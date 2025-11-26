const html = document.documentElement;

if(localStorage.getItem("data-theme") === "dark"){
    //se activa el modo obscuro, si el usuario tiene en local storage "data-theme" el atributo "dark". 
    //(Que se consigue al presionar el boton de cambio de modo en el formulario inicial).
    html.setAttribute("data-theme", "dark");
}

