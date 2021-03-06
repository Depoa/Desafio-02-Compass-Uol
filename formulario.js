// CAPTURAR ELEMENTOS

const form = document.getElementById("form");
const name = document.getElementById("name");
const endereco = document.getElementById("endereco");
const fone = document.getElementById("fone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

// BOTÃO

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// CAPTURAR VALOR E COMPARAÇÃO

function checkInputs() {
  const nameValue = name.value;
  const enderecoValue = endereco.value;
  const foneValue = fone.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (nameValue === "") {
    setErrorFor(name, "O nome de usuário é obrigatório.");
  } else if(!verificarNome(nameValue)){
    setErrorFor(name, "O nome deve ser digitado num formato válido");
  }else{
    setSuccessFor(name);
  }if (enderecoValue === "") {
    setErrorFor(endereco, "O endereço é obrigatório.");
  } else {
    setSuccessFor(endereco);
  }
  if (foneValue === "") {
    setErrorFor(fone, "O telefone é obrigatório.");
  } else {
    setSuccessFor(fone);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

//VALIDAÇÕES COM REGEX

function valida(nome){
  return (/[A-Z][a-z]* [A-Z][a-z]*/);
  }
//function verificarNome(nome){
   // return /^([A-Z][a-zA-Z',.-]+( [a-zA-Z',.-]+)*){2,30}$/.text(nome);
   // /^([A-Z][a-z].* [A-Z][a-z].*
//}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
