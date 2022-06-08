document.getElementById('generateBtn').addEventListener('click', function(){
    let randomNum = Math.floor(1000 + Math.random() * 9000);
    let inputRandomNum = document.getElementById('random-num');
    inputRandomNum.value = randomNum;
     
})

let result = document.getElementById('pin-input');
function calculator(number){
    result.value += number;
}

function verifyPin(){
    const pin = document.getElementById('random-num').value;
    const typedPin = document.getElementById('pin-input').value;
    const success = document.getElementById('notify-success');
    const fail = document.getElementById('notify-fail');

    if (pin == typedPin){
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else{
        fail.style.display = 'block';
        success.style.display = 'none';
        
    }
}

function clr(){
    result.value = " ";
}

function del(){
    result.value = result.value.slice(0, -1)
}