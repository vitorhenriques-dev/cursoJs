var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
if(horas < 12){
    console.log('Bom dia')
}else if(horas < 18){
    console.log('Boa Tarde')
}else if(horas < 5){
    console.log('Boa madrugada')
}else{
    console.log(horas,':',minutos  ,'Boa Noite')
}
