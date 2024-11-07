// Muestra la tarjeta modal con el contenido de proyectos
function showProjects() {
    document.getElementById("modal-title").innerText = "Proyectos";
    document.getElementById("modal-content").innerHTML = `
        <ul>
            <li>Proyecto 1: Descripción breve del proyecto.</li>
            <li>Proyecto 2: Descripción breve del proyecto.</li>
            <li>Proyecto 3: Descripción breve del proyecto.</li>
        </ul>
    `;
    document.getElementById("modal-overlay").classList.remove("hidden");
}

// Muestra la tarjeta modal con el contenido de contacto
function showContact() {
    document.getElementById("modal-title").innerText = "Contacto";
    document.getElementById("modal-content").innerHTML = `
        <p>Para más información, puedes contactarme a través de los siguientes medios:</p>
        <ul>
            <li>Email: correo@example.com</li>
            <li>Teléfono: +123 456 7890</li>
            <li>LinkedIn: <a href="#" target="_blank">Mi perfil</a></li>
        </ul>
    `;
    document.getElementById("modal-overlay").classList.remove("hidden");
}

// Cierra la tarjeta modal
function closeModal() {
    document.getElementById("modal-overlay").classList.add("hidden");
}

function showContent(tab) {
    const projectsTab = document.getElementById('projects');
    const contactTab = document.getElementById('contact');
    const buttons = document.querySelectorAll('.tab-button');
    
    if (tab === 'projects') {
        projectsTab.style.display = 'flex';
        contactTab.style.display = 'none';
        buttons[0].classList.add('active');
        buttons[1].classList.remove('active');
    } else {
        projectsTab.style.display = 'none';
        contactTab.style.display = 'block';
        buttons[1].classList.add('active');
        buttons[0].classList.remove('active');
    }
}
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Selecciona la sección a la que debe hacer scroll
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Ajusta el desplazamiento
        const offset = 100; // Altura del menú
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        // Desplazamiento suave
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
 // Variables de los elementos
 const about1 = document.querySelector('.about1');
 const about2 = document.querySelector('.about2');
 const about3 = document.querySelector('.about3');
 const about4 = document.querySelector('.about4');
 const toggleButton = document.getElementById('toggleButton');

 // Estado de la lista
 let isExpanded = false;

 