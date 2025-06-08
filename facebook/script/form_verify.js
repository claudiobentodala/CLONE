let elements = {
    email_number: window.document.querySelector('input#iemail_numbe'),
    password: window.document.querySelector('input#ipassword'),
    show: window.document.querySelector('p#warn')
}

function warn() {
    if (elements.email_number.value == "" && elements.password.value == "") {
        elements.show.innerText = "all textbox is empty" ;
    } else if (elements.email_number.value == "") {
        elements.show.innerText = "Check the email and phonenumber textbox" ;
    } else if (elements.password.value == "") {
        elements.show.innerText = "Check the password textbox" ;
    } else{
        elements.show.innerText = "some thing is wrong, try again!" ;
    }
    elements.show.style.color = 'red'
}