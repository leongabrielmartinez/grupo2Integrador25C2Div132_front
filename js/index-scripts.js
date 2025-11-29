    /*==========================================
      Formulario para usuarios.
==========================================*/
const themeBtn = document.getElementById("theme-toggle");
// const html = document.documentElement;

function changeColorThemeAttribute(){ 
    if (html.getAttribute("data-theme") === "dark") {
            localStorage.removeItem("data-theme");
            html.removeAttribute("data-theme");
            themeBtn.setAttribute("name", "moon-outline");
        } else {
            localStorage.setItem("data-theme", "dark");
            html.setAttribute("data-theme", "dark");
            themeBtn.setAttribute("name", "sunny-outline");          
    }}

    
themeBtn.addEventListener("click", changeColorThemeAttribute);

let userForm = document.getElementById("user-form");

userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userName = document.getElementById('user-name').value;

  let userNameTrimmed = userName.trim();

  if(!userNameTrimmed){
    alert("Debe ingresar un nombre");
  }
  if(userNameTrimmed.length < 20){
    if(typeof(userNameTrimmed) === "string" && userNameTrimmed){
      //Valido que sea un string y que no este vacio.
      //Segun chat gpt, .value ya define que va a ser un string, pero no estoy seguro...
      
      userNameTrimmed = userNameTrimmed.toLocaleLowerCase();
  
      const userNameTrimmedCapitalized = userNameTrimmed
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
      //le doy un formato pero no lo valido con regex, podria ser un numero o simbolos. 
  
      sessionStorage.setItem("userName", userNameTrimmedCapitalized);
      //guardo el nombre el session storage
      location.replace('products.html')
    }
  }else{
    alert("El nombre debe tener menos de 20 caracteres")
  }
}); 


//#region Ejemplo region.
// //#end region



