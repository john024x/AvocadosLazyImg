const isIntersecting = (entry) =>{
    return entry.isIntersecting //devuelve true si esta adentro de la pantalla
}
const cargarImg = (entry) =>{
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar la imagen
    imagen.src = url;
    //desregistrar la imagen
    observador.unobserve(container);
}

const observador = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(cargarImg)
})

export const registerImg = (imagen) =>{
    //le pide al Intersection observer que interprete la imagen
    observador.observe(imagen)
}