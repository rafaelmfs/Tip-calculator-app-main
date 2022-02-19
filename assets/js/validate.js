export default function validate(bill, people){
    let valid = true;
    document.querySelector("#bill-empty").style.display = "none";
    document.querySelector("#people-zero").style.display = "none";

    if(!bill.value){
        document.querySelector("#bill-empty").style.display = "block";
        valid = false;
    }if(people.value == 0){
        document.querySelector("#people-zero").style.display = "block";
        valid = false;
    }
    return valid;
}