const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const spancantidad = document.querySelector(".cantidad");
const spanvalortotal = document.querySelector(".valor-total");
const btnsuma = document.querySelector("#suma");
const btnresta = document.querySelector("#resta");

let cant = 1;
let total = precio * cant;

spanvalortotal.innerHTML= total;
spancantidad.innerHTML = cant;
precioSpan.innerHTML = precio;

btnsuma.addEventListener("click", () =>{
    cant = cant + 1;
    total = precio * cant;
    spancantidad.innerHTML = cant;
    spanvalortotal.innerHTML= total;
})

btnresta.addEventListener("click", () => {
    if(cant > 0){
    cant = cant - 1;
    total = precio * cant;
    spancantidad.innerHTML = cant;
    spanvalortotal.innerHTML= total;}
})

