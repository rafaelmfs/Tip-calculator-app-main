export default class Claculator{
    constructor(nPeople, valueAccount, tipPercent = 0){
        this.nPeople = Number(nPeople.replace(/\D+/g, ''));
        this.valueAccount = Number(valueAccount.replace(',', '.'));
        this.tipPercent = Number(tipPercent);
    }

    tipValue(){
        return (this.valueAccount * (this.tipPercent / 100)).toFixed(2);
    }

    totalAccount(){
        let tipValue = this.tipValue();
        return (this.valueAccount + Number(tipValue)).toFixed(2);
    }
    
    totalPerPerson(){
        let totalAccount = this.totalAccount();
        return (totalAccount / this.nPeople).toFixed(2);
    }

    tipPerPerson(){
        let tip = this.tipValue();
        return (tip / this.nPeople).toFixed(2);
    }
}