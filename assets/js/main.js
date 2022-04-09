    import format from "./format.js";
    import { getTip } from "./tips.js";
    import { showResults } from "./showResults.js"
    import Calculator from "./Calculator.js";
    import validate from "./validate.js"
    import reset from "./reset.js";

    const bill = document.querySelector("#inpt-bill");
    const radio = document.querySelectorAll('.tips');
    const elemCalculator = document.querySelector('.calculator');
    const custom = document.querySelector("#inpt-custom");
    const people = document.querySelector('#number-people');
    const btnReset = document.querySelector("#button-reset");


    bill.addEventListener('keyup', (e) => format(bill));
    btnReset.addEventListener('click', () => reset());


    elemCalculator.addEventListener('click', (e) =>{
      for(let i of radio){
        if(i.checked){
          i.value === 'custom' ? 
            (custom.style.display = 'block')
            : custom.style.display = 'none';
          i.parentNode.classList.add('selected');

        }else{
          i.parentNode.classList.remove('selected');
        }
      }
      if(people.value != ""){         
        let tip = getTip();
        let calculator = new Calculator(people.value, bill.value, tip);
        if(validate(bill, people)){
          showResults(calculator.tipPerPerson(), calculator.totalPerPerson());
        }
      }
    })

    people.addEventListener('keyup', ()=>{
      let tip = getTip();
      console.log(tip);
      let calculator = new Calculator(people.value, bill.value, tip);

      if(validate(bill, people)){
        showResults(calculator.tipPerPerson(), calculator.totalPerPerson());
      } 
    })

