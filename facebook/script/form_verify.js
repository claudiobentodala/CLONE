let elements = {
    email_number_email: window.document.querySelector('input#iemail_numbe'),
    password: window.document.querySelector('input#ipassword'),
    show: window.document.querySelector('p#warn'),
    wrong_pop: window.document.querySelector('section#worg_password')
}
verify_number_email ? verify_regex = false : verify_regex = true ;
function warn() {
    const show_warn = () => elements.show.style.color = 'red';
    const hide_warn = () => elements.show.style.color = 'transparent';
    if (elements.email_number_email.value == "" && elements.password.value == "") {
        elements.show.innerText = "all textbox is empty";
        show_warn();
    } else if (elements.email_number_email.value == "") {
        elements.show.innerText = "Check the email and phonenumber textbox" ;
        show_warn();
    } else if (elements.password.value == "") {
        elements.show.innerText = "Check the password textbox" ;
        show_warn();
    } else{
        elements.wrong_pop.style.display = 'flex';
        hide_warn()
    }
    
}