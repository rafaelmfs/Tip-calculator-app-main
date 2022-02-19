export default function reset(){
    let tips = document.querySelectorAll('.tips');
    const inptCustom = document.querySelector("#inpt-custom");

    for(let tip of tips){
    tip.checked = false;
    tip.classList.remove('.selected');
    }
    
    inptCustom.value = '';
    inptCustom .style.display = 'none';
    document.querySelector("#inpt-bill").value = '';
    document.querySelector('#number-people').value = '';
    document.querySelector("#result-tip").innerHTML = "$0.00";
    document.querySelector("#result-total").innerHTML = "$0.00";
    document.querySelector("#bill-empty").style.display = "none";
    document.querySelector("#people-zero").style.display = "none";

}