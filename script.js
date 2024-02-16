
let input = document.querySelector("#input-number");
let message = document.querySelector("#notify");
let button = document.querySelector("#check-btn");


button.addEventListener('click', (e)=>{

    message.classList.remove("isArmstrong");
    message.classList.remove("notArmstrong");

    let number = Number(input.value);
    
    const isArmstrong = checkArmstrong(number);

    if(isArmstrong === true){
        message.classList.add("isArmstrong");
        message.innerHTML = `${number} is an armstrong number`;
    }
    else{
        message.classList.add("notArmstrong");
        message.innerHTML = `${number} is not an armstrong number`;
    }
    
});

function checkArmstrong(number){
    const armNumber = Armstrong(number);
    if(armNumber === number) return true;
    else return false;
}

function coutDigit(number){
    let count = 0;
    while(number > 0){
        number = Math.floor(number / 10);
        count++; 
    }
    return count;
}

function Armstrong(number){
    let countNum = coutDigit(number);
    let result = 0;
    while(number > 0){
        let rem = number % 10;
        result = (result + (Math.pow(rem, countNum))); 
        number = Math.floor(number / 10);
    }
    return result; 
}
