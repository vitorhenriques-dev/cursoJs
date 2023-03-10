let valores = [7,8,5,3,1,0]
/* forma manual
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5]) 

forma reptiçao for

for(let pos = 0; pos <= valores.length ; pos++){
    console.log(`a posição ${pos} recebe o valor ${valores[pos]}`)
} */
for(let pos in valores){
    console.log(`a posição ${pos} recebe o valor ${valores[pos]}`)
}