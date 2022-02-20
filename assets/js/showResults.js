const tipAmount = document.querySelector("#result-tip");
const totalPerPerson = document.querySelector("#result-total");

export function showResults(tip, total){
    
    if(isNaN(tip) || isNaN(total)){
        tipAmount.innerHTML = "$0.00";
        totalPerPerson.innerHTML = "$0.00";
    }else{
        tipAmount.innerHTML = `\$${tip}`;
        totalPerPerson.innerHTML = `\$${total}`; 
    }
}