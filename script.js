document.getElementById('convertButton').addEventListener('click', function() {
    const input = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(input)) {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(input);
    let result;

    switch (unit) {
        case 'Celsius':
            result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F | Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C | Kelvin: ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            result = `Celsius: ${(temperature - 273.15).toFixed(2)} °C | Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
    }

    resultDiv.textContent = result;
});
