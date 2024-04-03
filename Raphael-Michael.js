
const convertBtn = document.getElementById("btn");

function convertCelsiusToKelvin() {
  
  const celsiusInput = document.getElementById("celsius");
  const resultElement = document.getElementById("result");

  if(celsiusInput.value === String) {
    resultElement.textContent = "Invalid input";
  }
  if (celsiusInput.value !== "") {
    const celsiusValue = parseFloat(celsiusInput.value);
    const kelvinValue = celsiusValue + 273.15;
    resultElement.textContent = `${kelvinValue.toFixed(2)} K`; // Update Kelvin temperature in the HTML
    resultElement.style.color = "red";
  } 
  
  celsiusInput.value = "";
}



convertBtn.addEventListener("click", convertCelsiusToKelvin)


function convertCelsiusToFarenheit() {
  const celsiusInput = document.getElementById("fahrenheit");
  const resultElement = document.getElementById("faren-result");
  if (celsiusInput.value !== "") {
    const celsiusValue = parseFloat(celsiusInput.value);
    const farenheitValue = (celsiusValue * 9/5) + 32;
    resultElement.innerHTML = `${farenheitValue.toFixed(2)} &degF`; 
    // Update Farenheit temperature in the HTML
    resultElement.style.color = "red";
  }
    else {
      resultElement.textContent = "Invalid input";
    }
  
  celsiusInput.value = "";  
}

const farenBtn = document.getElementById("faren-btn");

farenBtn.addEventListener("click", convertCelsiusToFarenheit)