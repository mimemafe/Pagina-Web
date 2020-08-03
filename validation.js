const form = document.querySelector("#infos")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const contraseña = document.querySelector("#contraseña")
const contraseñaHelp = document.querySelector("#contraseñaHelp")

form.addEventListener("submit", (event) => {
event.preventDefault()

if (email.value === "" || contraseña.value === "") {

 if (email.value === "") {
   	emailHelp.innerText = "¡Por favor, completar esta información!"
   }

   if (contraseña.value === "") {
   	contraseñaHelp.innerText = "¡Por favor, completar esta información!"
   }
} else {
	form.submit();
}
})

