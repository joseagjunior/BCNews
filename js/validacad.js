var senha = document.getElementById("senha_cad")
  , conf_senha = document.getElementById("confsenha_cad");

function validasenha(){
  if(senha.value != conf_senha.value) {
    conf_senha.setCustomValidity("Senhas diferentes!");
  } else {
    conf_senha.setCustomValidity('');
  }
}

senha.onchange = validasenha;
conf_senha.onkeyup = validasenha;