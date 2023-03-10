var idade = 61
console.log(`Você tem ${idade} anos`)
if(idade <16){
    console.log('Não vota')
}else if(idade < 18 ||idade > 60){
    console.log('Voto Opcional')
}else{
    console.log('Voto Obrigatorio')
}
