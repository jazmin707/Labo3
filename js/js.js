const boton_menu= document.querySelector(".boton_menu");
const navMenu= document.querySelector(".menu");


boton_menu.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible")
});



const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#conectar')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:jazcar2003@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}