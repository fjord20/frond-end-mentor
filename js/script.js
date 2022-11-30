const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function validate() {
    const  emailHere = document.getElementById("emailHere");

    emailHere.addEventListener('emailHere', validate)

    if (isEmailValid(emailHere.value)) {
        emailHere.style.borderColor = 'hsl(0, 36%, 70%)';
        alert('Thank you');
    } else {
        emailHere.style.color = 'black';
        document.getElementById('emailHere').style.borderColor = 'red'; 
        document.getElementById('invalid').style.visibility = 'visible'; 
        document.getElementById('invalid').style.color = 'red';
        document.getElementById('error').style.visibility = 'visible'
    }
}

function isEmailValid(value) {
    return re.test(value);
}