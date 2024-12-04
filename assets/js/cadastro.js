const btncadastrar = document.getElementById("cadastrar");
const form =  document.querySelector("form");

form.addEventListener("submit", (event)=> {

    event.preventDefault();

    const emailCadastro = document.getElementById("email").value;
    const senhaCadastro = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_confirma").value;

    if (condition) {

        alert("cadastro realizado com sucesso");

        localStorage.setItem("emailCadastro", emailCadastro);
        localStorage.setItem("senhaCadastro", senhaConfirma);

        window.location.href = "../index.html";
        
    } else {
        
        alert("senhas nao conferem !!!");
        
    }

});