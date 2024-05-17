import * as VB from "./VinBuilder.js"

let vinInput = document.getElementById("VINInput")
let validateButton = document.getElementById("ButtonOfValidation")
let resultText = document.getElementById("validity")

const updateValidity = () => {
    let vin = VB.VinBuilder.fastVin(vinInput.value);

    if(vin instanceof VB.ValidVin) {
        resultText.innerText = "Valid";
        resultText.style.color = "#B35AF2";
    }
    else {
        resultText.innerText = "Invalid";
        resultText.style.color = "#E35205";
    }
}

updateValidity();

vinInput.addEventListener("change", updateValidity);
validateButton.addEventListener("click", updateValidity);