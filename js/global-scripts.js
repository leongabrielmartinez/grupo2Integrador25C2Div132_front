//#region Check Session
console.log(location);
if(location.pathname !='/index.html'){
    if (!sessionStorage.getItem('user')){
        // console.log()
        prompt("Falta iniciar sesion")
        location.replace('index.html')
    }
}



//#end region