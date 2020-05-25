/*function getValues() {
    let billAmount = parseInt(document.getElementById('billAmount').value);
    console.log(billAmount);
    
    let service = parseInt(document.getElementById('service').value);
    console.log(service);
    
    let people = parseInt(document.getElementById('numberOfPeople').value);
    console.log(people);
    
    let tip = billAmount * (service / 100);
    console.log(tip);
    
    let tipPerPerson = tip / people;
    console.log(tipPerPerson);
    alert('The tip per person is $' + tipPerPerson);
}

function calculate() {
    getValues();
}
*/

function getBillAmount() {
    let billAmount = parseInt(document.getElementById('billAmount').value);
    console.log(billAmount);
    return billAmount;
}

function getService() {
    let service = parseInt(document.getElementById('service').value);
    console.log(service);
    return service;
}

function getPeople() {
    let people = parseInt(document.getElementById('numberOfPeople').value);
    console.log(people);
    return people;
}

function calculateTotalTip() {
    let b = getBillAmount();
    let s = getService();
    let tip = b * (s / 100);
    console.log(tip); 
    return tip;
}

function calculateTipPerPerson() {
    let t = calculateTotalTip();
    let p = getPeople();
    let tipPerPerson = t / p;
    console.log(tipPerPerson);
    alert('The tip per person is $' + tipPerPerson);
    return tipPerPerson;
}

function calculate() {
    getBillAmount();
    getService();
    getPeople();
    calculateTotalTip();
    calculateTipPerPerson();
}
