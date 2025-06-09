let elements = {
    email_number_email: window.document.querySelector('input#iemail_numbe'),
    password: window.document.querySelector('input#ipassword'),
    show: window.document.querySelector('p#warn')
}
/* LOCK PUT REGULAR EXPRESSION IN FORM VERIFY
let regex_number_email = /([a-z][0-9]){3,}(\.[a-z][0-9]){2,}?\@([a-z][0-9]){2,}\.([a-z][0-9]){2,}(\.[a-z][0-9]){2,}? || ([0-9]){5,}/gi;
let verify_number_email = regex_number_email.test(elements.email_number_email.value);
let verify_regex;
verify_number_email ? verify_regex = false : verify_regex = true ;
*/
function warn() {
    if (elements.email_number_email.value == "" && elements.password.value == "") {
        elements.show.innerText = "all textbox is empty" ;
    } else if (elements.email_number_email.value == "") {
        elements.show.innerText = "Check the email and phonenumber textbox" ;
    } else if (elements.password.value == "") {
        elements.show.innerText = "Check the password textbox" ;
    } else{
        elements.show.innerText = "some thing is wrong, try again!" ;
    }
    elements.show.style.color = 'red'
}