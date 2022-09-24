let cardName = document.querySelector("#card-name").value;
let cardNumber = document.querySelector("#card-number");
let numberDisplay = document.querySelector("#display-number");
let numError = document.querySelector("#num-error");
let nameError = document.querySelector("#name-error");
let cardMonth = document.querySelector("#card-month");
let monthDisplay = document.querySelector("#display-month");
let cardYear = document.querySelector("#card-year");
let yearDisplay = document.querySelector("#display-year");
let cardCVC = document.querySelector("#card-cvc");
let CVCDisplay = document.querySelector("#display-cvc");
let regNum = /^[0-9]+$/;

function displayName() {
  let nameDisplay = document.querySelector("#display-name");
  console.log(nameDisplay);
  nameDisplay.innerText = document.querySelector("#card-name").value;
}

function displayNumber() {
  let cardNumberInput = cardNumber.value;
  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
  formattedCardNumber = formattedCardNumber.substring(0, 16);
  let cardNumberSection = formattedCardNumber.match(/\d{1,4}/g);
  if (cardNumberSection !== null) {
    formattedCardNumber = cardNumberSection.join(" ");
  }
  if (cardNumberInput !== formattedCardNumber) {
    cardNumber.value = formattedCardNumber;
  }
  numberDisplay.innerText = cardNumber.value;
  if (cardNumber.value === "") {
    numberDisplay.innerText = cardNumber.ariaPlaceholder;
  }
}

function displayMonth() {
  let formattedMM = cardMonth.value;
  formattedMM = formattedMM.substring(0, 2);
  cardMonth.value = formattedMM;
  if (cardMonth.value === "") {
    monthDisplay.innerText = "00";
  } else {
    monthDisplay.innerText = cardMonth.value;
  }
}

function displayYear() {
  let formattedYY = cardYear.value;
  formattedYY = formattedYY.substring(0, 2);
  cardYear.value = formattedYY;
  if (cardYear.value === "") {
    yearDisplay.innerText = "00";
  } else {
    yearDisplay.innerText = cardYear.value;
  }
}

function displayCVC() {
  let formattedCVC = cardCVC.value;
  formattedCVC = formattedCVC.substring(0, 3);
  cardCVC.value = formattedCVC;
  if (cardCVC.value === "") {
    CVCDisplay.innerText = "000";
  } else {
    CVCDisplay.innerText = cardCVC.value;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (cardName == "") {
    nameError.innerHTML = "Can't be blank";
    cardName.focus();
    return false;
  }

  if (cardNumber == "") {
    numError.innerHTML = "Can't be blank";
    cardNumber.focus();
    return false;
  }
  if (!regNum.test(cardNumber)) {
    numError.innerHTML = "Wrong format, numbers only";
    cardNumber.focus();
    return false;
  }
  return true;
}
let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
