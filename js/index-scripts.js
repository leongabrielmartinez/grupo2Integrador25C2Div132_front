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

  if(typeof(userNameTrimmed) === "string" && userNameTrimmed){
    //Valido que sea un string y que no este vacio.
    //Segun chat gpt, .value ya define que va a ser un string, pero no estoy seguro...
    
    userNameTrimmed = userNameTrimmed.toLocaleLowerCase();


    const userNameTrimmedCapitalized = userNameTrimmed
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    //le doy un formato pero no lo valido con regex, podria ser un numero o simbolos. 

    //sessionStorage.removeItem("userName", userNameTrimmedCapitalized)

    sessionStorage.setItem("userName", userNameTrimmedCapitalized);
    //guardo el nombre el session storage
   
    // localStorage.getItem("carrito") -> traerlo para validarlo.
  }
}); 


// let z = document.getElementById("clearSessionST");

// z.addEventListener("click", () =>{
//   sessionStorage.removeItem("userName");
// })

//#region leer este texto.
//probar de borrar atributo defer de global-scripts.js.
// //#end region



//     if (!sessionStorage.getItem('user')){
//         sessionStorage.setItem('user',
//           prompt("Ingresa tu nombre"))
//         location.replace('index.html')
//     }



// console.log(location);
// if(location.pathname !='/index.html'){
//     if (!sessionStorage.getItem('user')){
//         // console.log()
//         prompt("Falta iniciar sesion")
//         location.replace('index.html')
//     }
// }


