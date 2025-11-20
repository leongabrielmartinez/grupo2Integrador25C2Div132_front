const html = document.documentElement;

function checkUserTheme(){
if(localStorage.getItem("data-theme") === "dark"){
    //se activa el modo obscuro, si el usuario tiene en local storage "data-theme" el atributo "dark". 
    //(Que se consigue al presionar el boton de cambio de modo en el formulario inicial).
    html.setAttribute("data-theme", "dark");
}}

function validateExistNameUser(){
    if(location.pathname !='/index.html' && location.pathname !='/'){
    //location.pathname !='/' -> esto es para compatibilidad con go live/el servidor,
    //lo primero que se abre es / y dsp se redirige automaticamente a index pero en este
    //proceso se dispara el alert, para evitar eso esta el and.
        if(!sessionStorage.getItem('userName')){
            alert("Debe completar el formulario para usuarios, para poder navegar en la aplicación");
            location.replace('index.html')
        }}
}

function init(){
    validateExistNameUser();
    checkUserTheme();
}

init()
