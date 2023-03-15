let caja = document.getElementById("ir-arriba");

caja.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", function(){
    if (document.documentElement.scrollTop > 0)
    {
        caja.style.display = "flex"
    }
    else
    {
        caja.style.display = "none"
    }
})