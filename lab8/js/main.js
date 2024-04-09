const PhoneRegex = /^7[0-9]{10}$/

let firstname_input = document.getElementById('firstName');
let lastName_input = document.getElementById('lastName');

const StringChecker = () =>  {
    let firstname = firstname_input.value;
    let lastName = lastName_input.value;

    const StringRegex = /^[a-zA-Zфа-яА-Я]*$/

    if (StringRegex.test(firstname) && StringRegex.test(lastName) && lastName !== '' && firstname !== '' ) {
        document.getElementById('order').style.backgroundColor = 'rgb(79, 226, 91)';
        document.getElementById('nameChecker').textContent = ''
        return true;
    } else {
        document.getElementById('order').style.backgroundColor = 'red';
        document.getElementById('nameChecker').textContent = 'Неверный формат данных'
        document.getElementById('nameChecker').style.color = 'white'
        document.getElementById('nameChecker').style.fontSize='35px'
        
        return false;
    }
}

let phone_input = document.getElementById('phone');

const phoneChecker = () =>  {
    let phone = phone_input.value;

    const PhoneRegex = /^7[0-9]{10}$/

    if (PhoneRegex.test(phone)) {
        document.getElementById('order').style.backgroundColor = 'rgb(79, 226, 91)';
        document.getElementById('phoneChecker').textContent = ''
        return true;
    } else {
        document.getElementById('order').style.backgroundColor = 'red';
        document.getElementById('phoneChecker').textContent = 'Неверный формат данных'
        document.getElementById('phoneChecker').style.color = 'white'
        document.getElementById('phoneChecker').style.fontSize='35px'
        return false;
    }
}

let age_input=document.getElementById('age')
const ageChecker = () =>  {
    let age = age_input.value;

    const ageCheckerRegex = /^[1-9]{1}[0-9]{1,2}$/

    if (ageCheckerRegex.test(age)) {
        document.getElementById('order').style.backgroundColor = 'rgb(79, 226, 91)';
        document.getElementById('ageChecker').textContent = ''
        return true;
    } else {
        document.getElementById('order').style.backgroundColor = 'red';
        document.getElementById('ageChecker').textContent = 'Ваш возраст недостаточен'
        document.getElementById('ageChecker').style.color = 'white'
        document.getElementById('ageChecker').style.fontSize='35px'
        return false;
    }
}

const completeOrder = (event) => {
    event.preventDefault();
    StringChecker()
    ageChecker()
    phoneChecker()
    if (
        !StringChecker() || !ageChecker() || !phoneChecker()
    )
        document.getElementById('order').style.backgroundColor = 'red';

    
}

const orderButton = document.getElementById("OrderButton");
orderButton.addEventListener("click", completeOrder);