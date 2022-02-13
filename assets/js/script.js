    const bill = document.querySelector("#inpt-bill");
    const radio = document.querySelectorAll('.tips');
    const content = document.querySelector('.content');
    const custom = document.querySelector("#inpt-custom");

    function formatarMoeda(element) {
      let val = element.value;

      val = val + '';
      console.log(val)
      val = parseInt(val.replace(/[\D]+/g, ''));
      console.log(val)
      val = val + '';
      console.log(val)
      val = val.replace(/([0-9]{2})$/g, ",$1");
      console.log(val)

      if (val.length > 6) {
          val = val.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }

      element.value = val;
      if(val == 'NaN') element.value = '';
    }

    bill.addEventListener('keyup', (e) => formatarMoeda(bill));
    content.addEventListener('click', (e) =>{
        for(let i of radio){
          if(i.checked){
            i.value === 'custom' ? custom.style.display = 'block' : custom.style.display = 'none';
            i.parentNode.classList.add('selected');
          }else{
            i.parentNode.classList.remove('selected');
          }
        }
    })