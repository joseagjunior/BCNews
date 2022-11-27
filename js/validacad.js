var cad = document.querySelectorAll(".box_cad");

var dig_nome = cad.querySelector(".nome_cad");
var nome = dig_nome.textContent();

var dig_sobrenome = cad.querySelector(".sobrenome_cad");
var sobrenome = dig_sobrenome.textContent();

var dig_usuario = cad.querySelector(".usuario_cad");
var usuario = dig_usuario.textContent();

var dig_email = cad.querySelector(".email_cad");
var email = dig_email.textContent();







/**
var alunos = document.querySelectorAll(".paciente");

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];

    var tdn1 = aluno.querySelector(".info-n1");
    var n1 = tdn1.textContent();

    var tdn2 = aluno.querySelector("info-n2");
    var n2 = tdn2.textContent();

    var tdmedia = aluno.querySelector(".info-media");

    if (!nota1Valida) {
        console.log("Nota 1 inválida");
        nota1Valida = false;
        tdmedia.textContent = "Nota 1 inválida";
        aluno.classList.add("campo-invalido");
    }

    if (!nota2Valida) {
        console.log("Nota 2 inválida");
        nota2Valida = false;
        tdmedia.textContent = "Nota 2 inválida";
        aluno.classList.add("campo-invalido");
    }

    if (nota1Valida && nota2Valida) {
        var media = calculoMedia(n1, n2);
        tdmedia.textContent = media;
    }
}

function calculoMedia(n1, n2) {
    var media = 0;
    media = (n1 + n2) / 2;

    return media.toFixed(2);
}

function nota1Valida(n1) {
    if (n1 > 0 && n1 < 10) {
        return true;
    } else {
        return false;
    }
}

function nota2Valida(n2) {
    if (n2 > 0 && n2 < 10) {
        return true;
    } else {
        return false;
    }
}

*/