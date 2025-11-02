//#region Check Session
    if (!sessionStorage.getItem('user')){
        sessionStorage.setItem('user',prompt("Ingresa tu nombre"))
        location.replace('index.html')
    }

//#end region