const checkEmpty = document.getElementById('Check');
const checkEmptyname = document.getElementById('Check_n');
const passEmpty = document.getElementById('pass_empty');
const emailValid = document.getElementById('email_correct');

function userid_validation() {
    
const uid_len = checkEmpty.value.length;
const uid_len_last = checkEmptyname.value.length;
const uid_len_pass = passEmpty.value.length;
const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (uid_len == 0)  {
    document.getElementById('first').style.visibility = 'visible';
    document.getElementById('img_first').style.visibility = 'visible';
    checkEmpty.focus();}

    if (uid_len_last == 0) {
        document.getElementById('last').style.visibility = 'visible';
        document.getElementById('img_last').style.visibility = 'visible';
        checkEmptyname.focus();

    } 

    if (uid_len_pass == 0) {
        document.getElementById('pass_not_empty').style.visibility = 'visible';
        document.getElementById('img_pass').style.visibility = 'visible';
        passEmpty.focus();
    }

    if (isEmailValid(emailValid.value)) {
        emailValid.style.borderColor = 'hsl(0, 36%, 70%)';

    } else {
        document.getElementById('email_not_valid').style.visibility = 'visible';
        document.getElementById('img_pass').style.visibility = 'visible';
        passEmpty.focus();
    }

    function isEmailValid(value) {
        return re.test(value);
    }

} 










