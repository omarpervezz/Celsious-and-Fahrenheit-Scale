const celsisous = document.querySelector('#celsious');
const fahrenheit = document.querySelector('#fahrenheit');
const ctFr = document.querySelector('#ctFr');
const ftcr = document.querySelector('#ftcr');


function toCelsious(){
    ftcr.innerHTML = 0;
    fahrenheit.value = '';
    // celsisous value
    let cValue = celsisous.value;
    if(cValue){
        const input = parseFloat(cValue);
        if(Number.isNaN(input)){
           return ''
        }
        else{
            const cTf =   (input * 9 / 5) + 32 ;
            const rounded = Math.round(cTf * 1000) / 1000;
            const result =  fahrenheit.value = rounded;
            ftcr.innerHTML = result;
            return result;
        }
    }
   
}


function toFahrenheit(){
    ctFr.innerHTML = 0;
    celsisous.value = ''
    let fValue = fahrenheit.value;
    if(fValue){
        const input = parseFloat(fValue);
        if(Number.isNaN(input)){
            return '';
        }
        else{
            const cTf = (input - 32) * 5 / 9;
            const rounded = Math.round(cTf * 1000) / 1000;
            const result =  celsisous.value = rounded;
            ctFr.innerHTML = result;
            return  result;
        }
    }
}


fahrenheit.addEventListener('input', toFahrenheit);
celsisous.addEventListener('input', toCelsious)









