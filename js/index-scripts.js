const themeBtn = document.getElementById("theme-toggle");
// const html = document.documentElement;

function changeColorThemeAttribute(){   
    if (html.getAttribute("data-theme") === "dark") {
            localStorage.removeItem("data-theme");
            html.removeAttribute("data-theme");
            themeBtn.setAttribute("name", "moon-outline");
            console.log("here");
        } else {
            localStorage.setItem("data-theme", "dark");
            html.setAttribute("data-theme", "dark");
            themeBtn.setAttribute("name", "sunny-outline");          
    }}

themeBtn.addEventListener("click", changeColorThemeAttribute);

