let num = [5,4,7,9]
num.sort
num.push(8)
num.push(2)
console.log(num)
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o primeiro numero do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('p valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}