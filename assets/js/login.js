// SHOW HIDDEN - PASSWORD

const showhiddenpassword = () => {

const input = document.getElementById("loginpass");
const iconEye = document.getElementById(loginEye);
const iconEteConfirm = document.querySelector(".login__eye")

iconEye.addEventListener("click", ()=> {

    // change password ta 'text' ; 

    // icon change

    iconEye.classList.add("ri-eye-line");
    iconEye.classList.remove("ri-eye-off-line");

    iconEyeconfirm.classList.add("ri-eye-line")
    iconEyeconfirm.classList.remove("ri-eye-off-line");

} else {

    input.type = "password";
    iconEye.classList.add("ri-eye-off-line");
    iconEyeconfirm.classList.add("ri-eye-off-line");
}

});

};

let tentativas 

document.querySelector("form").addEventListener("submit", (event) => {

event.preventDefault();

const emailLogin = document.getElementById("email").value;
const senhaLogin = document.getElementById("password").value;

//dados recuperados do locaLSTORAGE

const emailCadastro = localStorage.getItem("emailCadastro");
const senhaCadastro = localStorage.getItem("senhaCadastro");

if ((emailCadastro === emailLogin) && (senhaCdastro=== senhaLogin)) {

    alert ("loginrealizado com sucesso");
    
} else {
if (condition) {

if (condition) {
    
} else {
    
}
}
    alert ("senha invalida ! == senhaLogin");
} else {

    tentativas += 1;
    alert(´tentativa &(tentativas}/3´)
    
}

});