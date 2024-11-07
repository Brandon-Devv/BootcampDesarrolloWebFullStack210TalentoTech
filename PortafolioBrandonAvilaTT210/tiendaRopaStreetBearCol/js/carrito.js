let itemsCarrito = [];
let totalCarrito = 0;

document.addEventListener("DOMContentLoaded", function () {
    const itemsguardadosCarrito = JSON.parse(localStorage.getItem("itemsCarrito"));
    const totalguardadoCarrito = parseFloat(localStorage.getItem("totalCarrito")) || 0;

    if (itemsguardadosCarrito) {
        itemsCarrito = itemsguardadosCarrito;
        totalCarrito = totalguardadoCarrito;
        updateCart();
    }
});

function openCartModal() {
    document.getElementById("cart-modal").style.display = "flex";
    updateCart();
}

function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
}

function addToCart(itemName, itemPrice, itemImage) {
    const itemExistente = itemsCarrito.find(item => item.name === itemName);

    if (itemExistente) {
        itemExistente.quantity++;
        itemExistente.totalPrice += itemPrice;
    } else {
        itemsCarrito.push({ name: itemName, price: itemPrice, image: itemImage, quantity: 1, totalPrice: itemPrice });
    }

    totalCarrito += itemPrice; 

    updateCart();

    Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito',
        imageUrl: itemImage,
        imageWidth: 250,
        imageHeight: 250,
        showConfirmButton: false,
        position: 'center', // Puedes cambiar esto según tu preferencia
        timer: 2000,
    });

    saveCartToLocalStorage();
}


function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    itemsCarrito.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50">
            ${item.name} - Cantidad: ${item.quantity} - $${item.totalPrice.toFixed(2)}
            <select onchange="changeTalla(this.value, '${item.name}', ${item.price}, '${item.image}')">
                <option value="" selected disabled>Elegir talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
            </select>
            <button onclick="removeFromCart('${item.name}')">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10l4 4m0 -4l-4 4" />
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                </svg>
            </button>
        `;
        cartList.appendChild(li);
    });

    const totalCarritoElement = document.getElementById("cart-total");
    totalCarritoElement.textContent = `$${totalCarrito.toFixed(2)}`;

    saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
    localStorage.setItem("itemsCarrito", JSON.stringify(itemsCarrito));
    localStorage.setItem("totalCarrito", totalCarrito.toFixed(2));
}

function removeFromCart(itemName) {
    const itemExistente = itemsCarrito.find(item => item.name === itemName);

    if (itemExistente) {
        const removedItemIndex = itemsCarrito.findIndex(item => item.name === itemName);

        if (itemExistente.quantity > 1) {
            // Si hay más de un producto, disminuye la cantidad y el precio total
            itemExistente.quantity--;
            itemExistente.totalPrice -= itemExistente.price;
            totalCarrito -= itemExistente.price;
        } else {
            // Si hay solo un producto, elimina completamente el elemento del carrito
            if (removedItemIndex !== -1) {
                const removedItem = itemsCarrito.splice(removedItemIndex, 1)[0];
                totalCarrito -= removedItem.totalPrice; // Resta el totalPrice del producto eliminado
            }
        }

        updateCart();
    }
}

function clearCart() {
    itemsCarrito = [];
    totalCarrito = 0;
    updateCart();
}

function checkout() {
    Swal.fire({
        icon: 'success',
        title: `Total a pagar: $${totalCarrito.toFixed(2)}`,
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        setTimeout(() => {
            window.location.href = 'pagina38-mantenimiento.php';
        }, 2000);

        clearCart();
        closeCartModal();
    });
}