function getValues() {
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