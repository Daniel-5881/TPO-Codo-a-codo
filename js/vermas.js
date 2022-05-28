//selecciona dentro del contenedor
const contenedor = document.querySelectorAll('.grid-container');

function toggleText (e) {
    if (e.target.tagName !== 'BUTTON') {return;} //si la etiqueta no es BUTTON sale
    const button = e.target,
    nota = e.target.parentElement,
    hide = nota.querySelector('.three-dots'),
    show = nota.querySelector('.expanded-text'),
    state = !+button.getAttribute('data-state'),
    pos = +button.getAttribute('data-pos');

  // Realiza los cambios en la página
  hide.classList.toggle('hidden');
  show.classList.toggle('hidden');
  button.setAttribute('data-state', +state);
  button.textContent = (state) ?  ' Leer menos (-) ' : ' Leer más (+) ';
  
  // Ajusta scroll position

  const posDelta = (button.parentElement === contenedor.lastElementChild) ? 0 : -show.offsetHeight;
 
  if (state) {
    e.target.setAttribute('data-pos', posDelta);
  } else {
    window.scrollBy(0, pos);
  }

  return;
}

// Añade un event listener para cada elemento dentro de `.grid-container` de la página
contenedor.forEach(nota => nota.addEventListener('click', toggleText));

  function mostrar() {
      document.getElementById("campeon").style.display = "block";

}
