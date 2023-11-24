
//The JavaScript code uses const instead of var for variable declaration, and it attaches an event listener to the button using addEventListener instead of inline JavaScript.

const minInput = document.getElementById('min-input');
const maxInput = document.getElementById('max-input');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)) {
    resultDiv.textContent = 'Please enter valid numbers.';
  } else if (min >= max) {
    resultDiv.textContent = 'Min value should be less than max value.';
  } else {
    const convertedValue = (max - min) / (max + min);
    resultDiv.textContent = `Converted value: ${convertedValue.toFixed(2)}`;
  }
});