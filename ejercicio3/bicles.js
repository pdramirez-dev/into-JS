if(5==5){
    console.log(" 5 es igual a 5")
}

if(5===5){
    console.log("5 es mas igual a 5")
}
// estructura for 
for ( let i = 0 ; i<10;i++){
    console.log(i);
}

let lista = [1,2,3,4,5,6,7,8];
for ( let i = 1; i<lista.length;i++){
    console.log(lista[i]*2)
}

// estructura for....of

for(let valor of lista){
    console.log(valor);
}

// estructura forEach

lista.forEach((valor)=>{
    console.log(valor)
});

let persona = {
    nombre: "Pablo",
    apellido: "Diaz",
    edad:34,
    isDeveloper: true
}

for(let prop in persona){
console.log(prop);
console.log(persona[prop]);
}

// Bucles While


