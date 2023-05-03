let sum = '';

let out = document.querySelector('.calc__screen');

function sign(e){
    if(e !== '+/-'){
        sum += (e);
        out.textContent = sum;
    }
    else{
        sum = `-${sum}`;
        out.textContent = sum;
    }
}

function calc(){
    sum = eval(sum);
    out.textContent = sum;
}