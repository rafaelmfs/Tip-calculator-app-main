 export function getTip(){
    const tips = document.querySelectorAll("input.tips");
    for(let i of tips){
      if(i.checked){
        if(i.value === 'custom' ) return document.querySelector('#inpt-custom').value;
        return i.value;
      }
    }
  }
