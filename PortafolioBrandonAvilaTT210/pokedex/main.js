const pokemonList = document.getElementById("pokemon-list");
const pokemonDetail = document.getElementById("pokemon-detail");
const pokemonInfo = document.querySelector(".pokemon-info");
const backButton = document.getElementById("back-button");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentPage = 1;
const itemsPerPage = 49;
const totalPokemon = 1010;

async function fetchPokemonData(pokemonId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const pokemon = await response.json();
    return pokemon;
}

function displayPokemon(pokemon) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name.toUpperCase()}</h3>
        <p>ID: ${pokemon.id}</p>
    `;

    pokemonCard.addEventListener("click", () => {
        showPokemonDetail(pokemon);  
    });

    pokemonList.appendChild(pokemonCard); 
}

backButton.addEventListener("click", () => {
    pokemonDetail.style.display = "none";  
    pokemonList.style.display = "grid";  
});

function showPokemonDetail(pokemon) {
    pokemonList.style.display = "none";  
    pokemonDetail.style.display = "block";

    pokemonInfo.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>ID: ${pokemon.id}</p>
        <p>Altura: ${(pokemon.height / 10).toFixed(1)} m</p>
        <p>Peso: ${(pokemon.weight / 10).toFixed(1)} kg</p>
        <p>Tipo: ${pokemon.types.map(p => p.type.name).join(", ")}</p>
    `;
}

async function loadPokedex(page) {
    pokemonList.innerHTML = "";
    const start = (page - 1) * itemsPerPage + 1;
    const end = Math.min(page * itemsPerPage, totalPokemon); 

    for (let i = start; i <= end; i++) {
        try {
            const pokemon = await fetchPokemonData(i);
            displayPokemon(pokemon);
        } catch (error) {
            console.error(`Pokemón no encontrado ${i}:`, error);
        }
    }
    updatePaginationButtons(page)
    return
}

async function searchPokemon() {
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        try {
            const pokemon = await fetchPokemonData(query);
            pokemonList.style.display = "none";
            showPokemonDetail(pokemon);
        } catch (error) {
            alert("Pokémon no encontrado, inténtelo nuevamente");
        }
    }
}

searchButton.addEventListener("click", searchPokemon);

function updatePaginationButtons(page) {
    const totalPages = Math.ceil(totalPokemon / itemsPerPage);
    prevButton.disabled = page === 1; 
    nextButton.disabled = page === totalPages; 
}

nextButton.addEventListener("click", () => {
    if (currentPage * itemsPerPage < totalPokemon) { 
        currentPage++;
        loadPokedex(currentPage);
    }
});

prevButton.addEventListener("click", () => {
    if (currentPage > 1) { 
        currentPage--;
        loadPokedex(currentPage);
    }
});

// Initial load
loadPokedex(currentPage);