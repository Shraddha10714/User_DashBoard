console.log(window);

const button=document.querySelector('.button');

const signupform=document.querySelector('#signup-form');
const nameInput=document.querySelector('#fullname');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const reEnterPassword=document.querySelector('#reenterpassword');
const msg=document.querySelector('#msg');
const userList=document.querySelector('#user');

signupform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value===''||passwordInput.value===''||reEnterPassword.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please fill all the details';
        msg.style.color='red';

    setTimeout(() => msg.remove(), 3000);
    }
    else{
        // console.log('success');
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} == ${emailInput.value}`))
        userList.appendChild(li);

        nameInput.value='';
        emailInput.value='';
        
    }
}

