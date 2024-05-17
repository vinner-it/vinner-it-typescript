import * as VB from "./VinBuilder.js";

let resultText = document.getElementById("resultText");
let inputText = document.getElementById("inputText");
let checkButton = document.getElementById("checkButton");

const updateResultText = () => {
    let vin = VB.VinBuilder.fastVin(inputText.value);

    console.log(vin)

    if(vin instanceof VB.ValidVin) {
        resultText.style.color = "green";
        resultText.innerText = "Valid vin";
    }
    else {       
        resultText.style.color = "red";
        resultText.innerText = "Invalid vin";
    } 
}

inputText.addEventListener("change", updateResultText);
checkButton.addEventListener("click", updateResultText);