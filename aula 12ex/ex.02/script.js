function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date()
    var agora = hora.getHours()
    var min = hora.getMinutes()
    
    
    msg.innerHTML = `Agora são  <strong>${agora}:${min}</strong> horas`
    if(agora >= 0 && agora < 12){
        img.src="manha.png"
        document.body.style.background= '#f6dfbd'
    }else if(agora >= 12 && agora < 18){
         img.src="tarde.png"
         document.body.style.background= '#f2914c'
        
    }else{
        img.src="noite.png"
        document.body.style.background= '#192c32'
    }
}

