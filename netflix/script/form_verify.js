let inputs = {
    email: window.document.querySelector('input#iemail_number'),
    password: window.document.querySelector('input#ipassword'),
    signin: window.document.querySelector('input#ipassword')
}
let output = {
    email: window.document.querySelector('span#email_wrong')
}
let warn = {
    password_incorrect: window.document.querySelector('div#warn'),
    email_incorrect: window.document.querySelector('div#warn_email')
}

function wrong_password() {
    output.email.innerText = inputs.email.value
    if (!inputs.email.value == "" && !inputs.password.value == "") {
        warn.password_incorrect.style.display = 'block'
    }
}
function warn_email() {
    if (warn.password_incorrect.style.display == 'block') {
        warn.email_incorrect.style.display = 'block'
        warn.password_incorrect.style.display = 'none'
    } else if (warn.email_incorrect.style.display == 'block') {
        warn.email_incorrect.style.display = 'none'
    }
}