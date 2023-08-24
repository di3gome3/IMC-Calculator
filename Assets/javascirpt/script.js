const userName = document.querySelector('#name')
const userHeight = document.querySelector('#height')
const userWeight = document.querySelector('#weight')
const btnCalc = document.querySelector('#calc')




btnCalc.addEventListener('click', () => {
    const name = userName.value
    const height = Number(parseFloat(userHeight.value).toFixed(1));
    const weight = Number(parseFloat(userWeight.value).toFixed(1));
    const imc = Number(weight / (height * height)).toFixed(1)
    console.log(imc)
    function calcImc (){
        
     if (imc < 18.5){
        console.log('abaixo do peso')
     } else if (imc < 24.9){
        console.log('peso ideal')
     } else if (imc < 29.9){
        console.log('sobre peso')
     } else {
        console.log('gordola')
     }
        
    }

    calcImc()
})
 