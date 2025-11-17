const themeBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

function changeColorThemeAttribute(){   
    if (html.getAttribute("data-theme") === "dark") {
            html.removeAttribute("data-theme");
            themeBtn.setAttribute("name", "moon-outline");
        } else {
            html.setAttribute("data-theme", "dark");
            themeBtn.setAttribute("name", "sunny-outline");          
    }}

themeBtn.addEventListener("click", changeColorThemeAttribute);

