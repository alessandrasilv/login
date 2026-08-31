const btn = document.getElementById("btn")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")

const login = [
    {"email": "ale@gmail.com", "senha": "ale123"},
    {"email": "gico@gmail.com", "senha": "gico123"},
    {"email": "emmy@gmail.com", "senha": "emmy123"}
];
const user = {
    "email": "",
    "senha": ""
};



btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const campos = document.querySelectorAll("input");

    user.email  = inputEmail.value;
    user.senha = inputSenha.value;

    const encontrado = login.find(b => b.email === user.email && b.senha === user.senha);

    if(encontrado) {
        alert("login efetuado com sucesso")
        campos.forEach(campo => campos.value = "")
    } else{
        alert("dados invalidos")
        campos.forEach(campo => campo.value = "")
    }
})