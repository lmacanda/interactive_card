let cardName = document.querySelector("#card-name");
let cardNumber = document.querySelector("#card-number");
let numberDisplay = document.querySelector("#display-number");
let numError = document.querySelector("#num-error");
let nameError = document.querySelector("#name-error");
let expiryError = document.querySelector("#expiry-error");
let CVCError = document.querySelector("#cvc-error");
let cardMonth = document.querySelector("#card-month");
let monthDisplay = document.querySelector("#display-month");
let cardYear = document.querySelector("#card-year");
let yearDisplay = document.querySelector("#display-year");
let cardCVC = document.querySelector("#card-cvc");
let CVCDisplay = document.querySelector("#display-cvc");
let nameDisplay = document.querySelector("#display-name");
let thankYou = document.querySelector("#thank-you-header");
let thankYouSection = document.querySelector("#thank-you");
let continueBtn = document.querySelector("#continue");
let form = document.querySelector("#my-form");

function displayName() {
  nameDisplay.innerHTML = cardName.value;
  if (nameDisplay.innerHTML == "")
    nameDisplay.innerText = cardName.ariaPlaceholder;
}

function displayNumber() {
  let cardNumberInput = cardNumber.value;
  let formattedCardNumber = cardNumberInput;
  formattedCardNumber = formattedCardNumber.substring(0, 19);
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

function validateInputs() {
  const cardNameValue = cardName.value;
  const cardNumberValue = cardNumber.value;
  const cardMonthValue = cardMonth.value;
  const cardYearValue = cardYear.value;
  const cardCVCValue = cardCVC.value;

  function validateName() {
    if (cardNameValue === "") {
      nameError.innerHTML = "Can't be blank!";
    } else {
      nameError.innerHTML = "";
    }
  }

  function validateNumber() {
    let regNum = /^[0-9]+$/;
    if (cardNumberValue === "") {
      numError.innerHTML = "Can't be blank!";
    } else if (cardNumber.value.match(regNum)) {
      numError.innerHTML = "";
    } else {
      numError.innerHTML = "Wrong format, numbers only";
    }
  }

  function validateMonth() {
    if (cardMonthValue === "") {
      expiryError.innerHTML = "Can't be blank!";
    } else {
      expiryError.innerHTML = "";
    }
  }

  function validateYear() {
    if (cardYearValue === "") {
      expiryError.innerHTML = "Can't be blank!";
    } else {
      expiryError.innerHTML = "";
    }
  }

  function validateCVC() {
    if (cardCVCValue === "") {
      CVCError.innerHTML = "Can't be blank!";
    } else {
      CVCError.innerHTML = "";
    }
  }
  validateName();
  validateNumber();
  validateMonth();
  validateYear();
  validateCVC();
  if (
    nameDisplay.innerHTML == cardName.ariaPlaceholder ||
    numberDisplay.innerHTML == cardNumber.ariaPlaceholder ||
    monthDisplay.innerHTML == "00" ||
    yearDisplay.innerHTML == "00" ||
    CVCDisplay.innerHTML == "000" ||
    (cardNumber.value.length > 0 && cardNumber.value.length < 19)
  ) {
    return false;
  } else {
    return true;
  }
}

form.addEventListener("submit", function (event) {
  validateInputs();
  if (validateInputs() == false) {
    event.preventDefault();
  } else {
    event.preventDefault();
    form.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
  }
});

continueBtn.addEventListener("click", function (event) {
  event.preventDefault();
  thankYouSection.classList.add("hidden");
  form.classList.remove("hidden");
  nameDisplay.innerHTML == cardName.ariaPlaceholder;
  numberDisplay.innerHTML == cardNumber.ariaPlaceholder;
  monthDisplay.innerHTML == "00";
  yearDisplay.innerHTML == "00";
  CVCDisplay.innerHTML == "000";
  cardName.value = "";
  cardNumber.value = "";
  cardMonth.value = "";
  cardYear.value = "";
  cardCVC.value = "";
  numError.innerHTML = "";
});
