document.addEventListener("DOMContentLoaded", function() {
    const btnComprarNike = document.getElementById("btn-comprar-nike");
    const btnComprarLacoste = document.getElementById("btn-comprar-lacoste");

    btnComprarNike.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Você clicou em comprar o Nike Air Force!");
        this.innerText = "COMPRADO";
        this.disabled = true;
    });

    btnComprarLacoste.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Você clicou em comprar o Tênis Lacoste Europa!");
        this.innerText = "COMPRADO";
        this.disabled = true;
    });
});