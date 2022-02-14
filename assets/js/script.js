    import format from "./format.js";
    import { getTip } from "./tips.js";

    const bill = document.querySelector("#inpt-bill");
    const radio = document.querySelectorAll('.tips');
    const content = document.querySelector('.content');
    const custom = document.querySelector("#inpt-custom");
    const people = document.querySelector('#number-people');
    const resultTip = document.querySelector("#result-tip");
    const resultTotal = document.querySelector("#result-total");
    const btnReset = document.querySelector("#button-reset");



    bill.addEventListener('keyup', (e) => format(bill));

    content.addEventListener('click', (e) =>{
        for(let i of radio){
          if(i.checked){
            i.value === 'custom' ? custom.style.display = 'block' : custom.style.display = 'none';
            i.parentNode.classList.add('selected');
          }else{
            i.parentNode.classList.remove('selected');
          }
        }
        if(people.value != ""){
          //
          console.log(getTip());
        }
    })

    people.addEventListener('focus', ()=>{
      //
    })

    btnReset.addEventListener('click', ()=>{
      let tips = document.querySelectorAll('.tips');
      for(let tip of tips){
        tip.checked = false;
        tip.classList.remove('.selected');
      }
      bill.value = '';
      people.value = '';
      custom.value = '';
      custom.style.display = 'none';
      resultTip.innerHTML = "$0.00";
      resultTotal.innerHTML = "$0.00";
    });
     
