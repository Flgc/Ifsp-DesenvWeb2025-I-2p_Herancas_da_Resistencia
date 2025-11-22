function verificarPares() {
  let inicio = Number(document.getElementById("inicio").value);
  let fim = Number(document.getElementById("fim").value);

  if (inicio > fim) {
    alert("Início não pode ser maior que o fim");
    return;
  }

  let paresEncontrados = [];
  for (let x = inicio; x <= fim; x++) {
    if (x % 2 === 0) paresEncontrados.push(x);
  }

  alert("Números pares: " + paresEncontrados.join(", "));
}

function calcular(operador, num1, num2) {
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);
  let resul = 0;

  switch (parseInt(operador)) {
    case 1:
      resul = n1 + n2;
      break;
    case 2:
      resul = n1 - n2;
      break;
    case 3:
      resul = n1 * n2;
      break;
    case 4:
      if (n2 === 0) {
        alert("Impossível dividir por zero");
        return;
      }
      resul = n1 / n2;
      break;
    default:
      return;
  }

  alert("Resultado = " + resul.toFixed(2));
}

function calcularImc(peso, altura) {
  peso = parseFloat(peso);
  altura = parseFloat(altura);
  const imc = peso / (altura * altura);
  const sexo = document.querySelector('input[name="sexo"]:checked').value;

  alert("IMC = " + imc.toFixed(2));

  if (sexo === "feminino") {
    alert("Aqui você pode colocar a categorização do IMC feminino");
  } else {
    alert("Aqui você pode colocar a categorização do IMC masculino");
  }
}
