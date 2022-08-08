let btnSusc = document.getElementById("btnSusc")





//FUNCION VALIDAR CORREO
const validarCorreo = (labell, correo) =>{
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(expresionRegular.test(correo)){
        labell.classList.add("activar_label_JS")
        labell.textContent = "El correo fue enviado con exito"
        labell.style.color = "grey"
        labell.style.transition = "1s all"


    }else{
        labell.classList.add("activar_label_JS")
        labell.textContent = "El correo no es valido"
        labell.style.color = "red"
        labell.style.transition = "1s all"

    }
}	


btnSusc.addEventListener("click", () =>{
    let inputCorreo = document.getElementById("inputCorreo").value
    let texto_enail = document.getElementById("texto_enail")
    validarCorreo(texto_enail, inputCorreo)
})