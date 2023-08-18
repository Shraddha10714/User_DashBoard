console.log(window);
const button1=document.querySelector('.button1');

const signinform=document.querySelector('#signin-form');
const nameInput1=document.querySelector('#fullname1');
const passwordInput1=document.querySelector('#password1');
const msg1=document.querySelector('#msg1');
const userList1=document.querySelector('#user1');

signinform.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput1.value=='' || passwordInput1.value==''){
        msg1.classList.add('error');
        msg1.innerHTML='Please name and password';
        msg1.style.color='red';


    setTimeout(() => msg1.remove(), 3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput1.value} == ${passwordInput1.value}`))
        userList1.appendChild(li);

        nameInput1.value='';
        passwordInput1.value='';
    }
}
