function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO], confira o dado')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id' , 'img')
        if(fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = 'blue'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src' , 'toy.png')
            }else if(idade >= 11 && idade < 30){
                 img.setAttribute('src' , 'garoto.png')
            }else if (idade >= 30 && idade < 50){
                img.setAttribute('src' , 'homem.png')
            }else if (idade >= 50){
                img.setAttribute('src' , 'senhor.png')
            }
        }else {
            genero = 'Mulhuer'
            document.body.style.background ='pink'
            if(idade >= 0 && idade < 11){
                img.setAttribute('src' , 'menina.png')

            }else if(idade >= 11 && idade < 30){
                img.setAttribute('src' , 'garota.png')

            }else if(idade >= 30 && idade < 50){
                img.setAttribute('src' , 'mulher.png')

            }else if (idade >= 50){
                img.setAttribute('src' , 'senhora.png')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um[a] ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}