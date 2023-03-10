function verificar(){
    var res = window.document.querySelector('div#res')
    res.appendChild(img)    
    if(toy[0].checked) {
            document.body.style.background = 'blue'
            img.setAttribute('src' , 'toy.png')
        }else if(henrique[0].checked){
            img.setAttribute('src' , 'henrique.png')
        }else if (talo[0].checked){
            img.setAttribute('src' , 'talo.png')
        }else if (gus[0].checked){
            img.setAttribute('src' , 'gustavao.png')
        }else if(men[0].checked){
            img.setAttribute('src' , 'menor.png')
        }
}
        res.appendChild(img)

    