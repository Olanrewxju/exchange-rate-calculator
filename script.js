const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");

const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/8db4ab1b93bb781d976fa6aa/latest/${currency_one}`
  )
    .then((response) => response.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      console.log(rate);

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    });
}

//event listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

//swap the currency
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
