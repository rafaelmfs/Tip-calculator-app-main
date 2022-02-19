const tipAmount = document.querySelector("#result-tip");
const totalPerPerson = document.querySelector("#result-total");

export function showResults(tip, total){
    tipAmount.innerHTML = `\$ ${tip}`;
    totalPerPerson.innerHTML = `\$ ${total}`; 
}