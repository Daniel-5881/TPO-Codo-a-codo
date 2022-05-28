const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password1 = document.getElementById('password1')
const telefono = document.getElementById('telefono')
const checkbox = document.getElementById('checkbox')
const form = document.getElementById('formulario1')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nombre.value === '' || nombre.value == null) {
    messages.push('Tenés que poner tu nombre')
  }
  if (apellido.value === '' || apellido.value == null) {
    messages.push('Tenés que poner tu apellido')
  }
  if (telefono.value === '' || telefono.value == null) {
    messages.push('Tenés que poner tu teléfono')
  }

  if (email.value === '' || email.value == null) {
    messages.push('Tenés que poner tu e-mail')
  }

  if (email.value.length < 8) {
    messages.push('El e-mail debe ser de al menos 8 caracteres')
  }

  if (telefono.value.length <= 6) {
    messages.push('El número de teléfono debe ser de al menos 6 cifras')
  }

  if (isNaN( document.formulario1.telefono.value)) {
    messages.push('El teléfono debe estar en formato número')
  }

  if (password.value.length <= 6) {
    messages.push('La clave debe ser de al menos 6 caracteres')
  }

  if (password.value.length >= 20) {
    messages.push('La clave debe ser menor o igual a 20 caracteres')
  }

  if (password.value === 'password') {
    messages.push('La clave no puede ser password')
  }

  if (password.value != password1.value) {
    messages.push('La clave y su confirmación no coinciden')
    }

  if (!checkbox.checked) {
      messages.push('Por favor acepte nuestros términos y condiciones')
    }

    
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

