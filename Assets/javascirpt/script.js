const userName = document.querySelector("#name");
const userHeight = document.querySelector("#height");
const userWeight = document.querySelector("#weight");
const btnCalc = document.querySelector("#calc");
const res = document.querySelector("#awnser");

btnCalc.addEventListener("click", () =>{
  const name = userName.value;
  const height = parseFloat(userHeight.value);
  const weight = parseFloat(userWeight.value);
  res.innerHTML = "";

  if (name !== "" && userHeight !== "" && userWeight !== "") {
    let imc = Number(weight / (height * height)).toFixed(1);
    if (imc < 18.5) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está abaixo do peso`;
    } else if (imc < 24.9) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está no peso ideal`;
    } else if (imc < 29.9) {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está no acima do peso`;
    } else {
      res.innerHTML = `${name} seu IMC é de ${imc} e voce está Obeso`;
    }
  } else {
    alert("Preencha todos os dados");
  }
});
