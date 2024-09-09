'use strict';

const billInput = document.querySelector('.bill_input');
const customInput = document.querySelector('.custom_input');
const peopleInput = document.querySelector('.people_input');

const fivePercentBtn = document.querySelector('.five_percent');
const tenPercentBtn = document.querySelector('.ten_percent');
const fifteenPercentBtn = document.querySelector('.fifteen_percent');
const twentyfivePercentBtn = document.querySelector('.twentyfive_percent');
const fiftyPercentBtn = document.querySelector('.fifty_percent');

const tipPerPerson = document.querySelector('.tip_per_person');
const totalPerPerson = document.querySelector('.total_per_person');

const resetBtn = document.querySelector('.reset_btn');
const textZero = document.querySelector('#text_zero');

// Creating global variables
let billAmount;
let numberOfPeople;
let customPercent;

// Helper function
const calcAmounts = function (e) {
    if (numberOfPeople && billAmount) {
        const totalAmount = billAmount + (billAmount * this);
        const totalAmtPerPerson = totalAmount / numberOfPeople;
        let tipAmtPerPerson;
        numberOfPeople === 1 ? tipAmtPerPerson = billAmount * this : tipAmtPerPerson = totalAmtPerPerson * this;
        
        tipPerPerson.textContent = tipAmtPerPerson.toFixed(2);
        totalPerPerson.textContent = totalAmtPerPerson.toFixed(2);

        // console.log('Total amount: ', totalAmount);
        // console.log('Total per person: ', totalAmtPerPerson);
        // console.log('Tip per person: ', tipAmtPerPerson);
    } else if (numberOfPeople === 0) {
        textZero.classList.remove('hidden');
        peopleInput.style.borderColor = 'red';
    };
};

// Input fields
billInput.addEventListener('change', function (e) {
    e.preventDefault();
    billAmount = +e.target.value;
    resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
});

peopleInput.addEventListener('change', function (e) {
    e.preventDefault();
    numberOfPeople = +e.target.value;
    resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
});

customInput.addEventListener('change', function (e) {
    e.preventDefault();
    customPercent = e.target.value / 100;

    // NOTE: for some reason the calcAmount function is not working
    if (numberOfPeople && billAmount) {
        const totalAmount = billAmount + (billAmount * customPercent);
        const totalAmtPerPerson = totalAmount / numberOfPeople;
        let tipAmtPerPerson;
        numberOfPeople === 1 ? tipAmtPerPerson = billAmount * customPercent : tipAmtPerPerson = totalAmtPerPerson * customPercent;
        
        tipPerPerson.textContent = tipAmtPerPerson.toFixed(2);
        totalPerPerson.textContent = totalAmtPerPerson.toFixed(2);    

        // console.log('Total amount: ', totalAmount);
        // console.log('Total per person: ', totalAmtPerPerson);
        // console.log('Tip per person: ', tipAmtPerPerson);
    };
    resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
});

// Percent buttons
fivePercentBtn.addEventListener('click', calcAmounts.bind(0.05));
tenPercentBtn.addEventListener('click', calcAmounts.bind(0.1));
fifteenPercentBtn.addEventListener('click', calcAmounts.bind(0.15));
twentyfivePercentBtn.addEventListener('click', calcAmounts.bind(0.25));
fiftyPercentBtn.addEventListener('click', calcAmounts.bind(0.5));

// Reset button
resetBtn.addEventListener('click', function () {
    tipPerPerson.textContent = totalPerPerson.textContent = '$0.00';
    billInput.value = customInput.value = peopleInput.value = '';
    resetBtn.style.backgroundColor = 'hsl(183, 94%, 21%)';
});



