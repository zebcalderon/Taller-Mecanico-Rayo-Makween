function valida(){

    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const form = document.getElementById("form")
    const parrafo1 = document.getElementById("warnings1")
    const parrafo2 = document.getElementById("warnings2")
    const parrafo3 = document.getElementById("warnings3")


    form.addEventListener("submit", e=>{
        e.preventDefault()
        let warningsA = ""
        let warningsB = ""
        let entrar = false
        let regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
        parrafo1.innerHTML = ""
        parrafo2.innerHTML = ""
        parrafo3.innerHTML = ""

        if(!regexEmail.test(email.value)){
            warningsA += 'El email no es válido<br>'
            entrar = true
            email.style.border= 'solid 1px red';
        }else{
            email.style.border= '';
        }

        if(pass.value.length < 5) {
            warningsB += 'La contraseña no es válida'
            entrar = true
            pass.style.border= 'solid 1px red';
        }else{
            pass.style.border= '';
        }

        if(entrar){
            parrafo1.innerHTML = warningsA
            parrafo2.innerHTML = warningsB
        } else {
            parrafo3.innerHTML = "Enviado"
        }
    })
}