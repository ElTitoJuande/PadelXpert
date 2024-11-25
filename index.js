//Slider paleteros

const slider = document.querySelector('.slider');

let estaClickando = false; 
let startX; 
let scrollStart; 

// Cuando el usuario presiona el click
slider.addEventListener('mousedown', (e) => {
    estaClickando = true;
    slider.classList.add('clickando');
    startX = e.pageX; 
    scrollStart = slider.scrollLeft; 
});

// Cuando el usuario mueve el mouse
slider.addEventListener('mousemove', (e) => {
    if (!estaClickando) return; 
    e.preventDefault();
    const distancia = e.pageX - startX;
    slider.scrollLeft = scrollStart - distancia; 
});

// Cuando el usuario suelta el clic
slider.addEventListener('mouseup', () => {
    estaClickando = false; 
    slider.classList.remove('clickando');
});

// Si el mouse sale del slider, corta el arrastre
slider.addEventListener('mouseleave', () => {
    estaClickando = false;
    slider.classList.remove('clickando');
});
