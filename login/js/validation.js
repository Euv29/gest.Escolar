const form = document.getElementById('form');
const username = document.getElementById('username');
const userpassword = document.getElementById('userpassword');

form.addEventListener('submit', (e) =>{
     e.preventDefault();

     checkIputs();
});

function checkIputs() {
     const usernameValue = username.value.trin();
     const userpasswordValue = userpassword.value.trin();

     if (usernameValue === ' '){
          errorValidation(username);
     }
     else{
          successValidation(username)
     }
}

function errorValidation(input) {
     const control = input.parentElement;

     control.className = 'control error';
}

function successValidation(input) {
     const control = input.parentElement;
     control.className = 'control success';
}