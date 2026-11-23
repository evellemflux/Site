function irCadastro() {
    window.location.href = "cadastro.html";
}


document.addEventListener("DOMContentLoaded", function() {

    // ELEMENTOS
    const loginForm = document.getElementById("loginForm");
    const cadastroForm = document.getElementById("cadastroForm");

    const loginTab = document.getElementById("loginTab");
    const cadastroTab = document.getElementById("cadastroTab");


    // ALTERNAR LOGIN E CADASTRO

    loginTab.addEventListener("click", function() {

        loginForm.classList.add("active");
        cadastroForm.classList.remove("active");

        loginTab.classList.add("active");
        cadastroTab.classList.remove("active");

    });

    cadastroTab.addEventListener("click", function() {

        cadastroForm.classList.add("active");
        loginForm.classList.remove("active");

        cadastroTab.classList.add("active");
        loginTab.classList.remove("active");

    });


    // MOSTRAR E OCULTAR SENHA

    const botoesOlho = document.querySelectorAll(".toggle-password");

    botoesOlho.forEach(function(botao) {

        botao.addEventListener("click", function() {

            const input = botao.parentElement.querySelector("input");
            const icone = botao.querySelector("i");

            if (input.type === "password") {

                input.type = "text";

                icone.classList.replace("fa-eye", "fa-eye-slash");

            } else {

                input.type = "password";

                icone.classList.replace("fa-eye-slash", "fa-eye");

            }

        });

    });


    // LOGIN

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const senha = document.getElementById("loginSenha").value;

        if (email === "" || senha === "") {

            alert("Preencha todos os campos!");
            return;

        }

        alert("Dados enviados! A autenticação ainda não está configurada.");

    });


    // CADASTRO

    cadastroForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("cadastroNome").value.trim();

        const dataNascimento = document.getElementById("cadastroData").value;

        const email = document.getElementById("cadastroEmail").value.trim();

        const cpf = document.getElementById("cadastroCpf").value.trim();

        const senha = document.getElementById("cadastroSenha").value;

        const confirmarSenha = document.getElementById("confirmarSenha").value;


        if (
            nome === "" ||
            dataNascimento === "" ||
            email === "" ||
            cpf === "" ||
            senha === "" ||
            confirmarSenha === ""
        ) {

            alert("Preencha todos os campos!");
            return;

        }


        if (senha !== confirmarSenha) {

            alert("As senhas não coincidem!");
            return;

        }


        alert("Cadastro realizado! A autenticação ainda não está configurada.");

    });


    // ANIMAÇÃO DA IMAGEM

    const imageSection = document.getElementById("imageSection");
    const card = document.getElementById("authCard");

    imageSection.addEventListener("click", function() {

        card.classList.toggle("reverse");

    });

});
