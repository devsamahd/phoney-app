// function for checking phone number validity

document.querySelector('.phoneNum').addEventListener('input', (e) =>{
    const phoneNum = document.getElementById('phoneNum')
    const regex = /^(1)?[ ]?(\((\d{3})\)|\d{3})[ -]?(\d{3})[ -]?(\d{4})$/g
    const format = document.querySelector('.phoneFormat')
    const input = phoneNum.value;
    const found = regex.test(input)
    if(!found && input.length){
        phoneNum.classList.add('invalid')
        format.classList.remove('hide')
        
    }else{  
        phoneNum.classList.remove('invalid')
        format.classList.add('hide')
    }
})