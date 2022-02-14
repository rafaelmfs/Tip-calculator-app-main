export default function format(element) {
    let val = element.value;

    val = val + '';
    val = parseInt(val.replace(/[\D]+/g, ''));
    val = val + '';
    val = val.replace(/([0-9]{2})$/g, ",$1");

    if (val.length > 6) {
        val = val.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    element.value = val;
    if(val == 'NaN') element.value = '';
  }