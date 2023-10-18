var inputElements = document.querySelectorAll(".input-icons");
inputElements.forEach(function(inputElements){
    inputElements.addEventListener("change", function(){
        this.style.color = "#E1B168"; 
    })
})

const btn = document.getElementById("btnTop");
btn.addEventListener("click", function(){
    window.scrollTo(0,0);
})

document.addEventListener("scroll", hiden)

function hiden () {
    if(window.scrollY > 10){
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}

hiden();