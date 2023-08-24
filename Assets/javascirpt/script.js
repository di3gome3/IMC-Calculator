const userName = document.querySelector("#name");
const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");
const btnCalc = document.querySelector("#calc");
const res = document.querySelector("#awnser");

btnCalc.addEventListener("click", () => {
  const name = userName.value;
  const height = Number(parseFloat(userHeight.value).toFixed(1));
  const weight = Number(parseFloat(userWeight.value).toFixed(1));
  const imc = Number(weight / (height * height)).toFixed(1);
  res.innerHTML = "";
  function calcImc() {
    if (imc < 18.5) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está abaixo do peso`;
    } else if (imc < 24.9) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está no peso ideal`;
    } else if (imc < 29.9) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está no acima do peso`;
    } else {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está Obeso`;
    }
  }

  calcImc();
});
