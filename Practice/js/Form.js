
console.log("Понеслась!")

document.getElementById('submit').disabled = true;

var check_pass = function() {
  if ((document.getElementById('password').value == document.getElementById('confirm_password').value) && (empty_pass())) {
    document.getElementById('password').style.border = '2px solid green';
    document.getElementById('confirm_password').style.border = '2px solid green';
    return true;
  } else {
    document.getElementById('password').style.border = '2px solid red';
    document.getElementById('confirm_password').style.border = '2px solid red';
    return false;
  }

}

var check_email = function() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  if ((re.test(document.getElementById('email').value))) {
    document.getElementById('email').style.border = '2px solid green';
    return true;
  } else {
    document.getElementById('email').style.border = '2px solid red';
    return false;
  }
}

var check_name = function() {
  if ((document.getElementById('name').value.length > 0) && (empty_name())) {
    document.getElementById('name').style.border = '2px solid green';
    return true;
  } else {
    document.getElementById('name').style.border = '2px solid red';
    return false;
  }
}


var check_all = function(){
  if ((check_name()) && (check_pass()) && (check_email())){
        document.getElementById('submit').disabled = false;
  }
  else {
    check_pass();
    check_email();
    document.getElementById('submit').disabled = true;
  }
}

var empty_name = function() {
  var flag = false;
  var checking = document.getElementById('name').value;
  for (i=0; i < checking.length; i++){
    if (checking[i] != " ") {flag = true;}
  }
  return flag;
}

var empty_pass = function() {
  var flag_pass = false;
  var checking_pass = document.getElementById('password').value;
  for (i=0; i < checking_pass.length; i++){
    if (checking_pass[i] != " ") {flag_pass = true;}
  }
  return flag_pass;
}


function checkSubmit(event) {
  log_1.textContent = document.getElementById('name').value + `, форма отправлена!`;
  log_2.textContent = `Ваш E-Mail: ` + document.getElementById('email').value;
  log_3.textContent = `Ваше письмо: ` + document.getElementById('text_area').value;
  log_1.style.color = "green";
  log_2.style.color = "green";
  log_3.style.color = "green";
  event.preventDefault();
}

const form = document.getElementById('form');
const log_1 = document.getElementById('log_1');
const log_2 = document.getElementById('log_2');
const log_3 = document.getElementById('log_3');
form.addEventListener('submit', checkSubmit);