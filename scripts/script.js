const passwordField = document.getElementById("password");
const passwordFiledAgain = document.getElementById("confirm-password");





passwordFiledAgain.addEventListener("focusout", checkPasswords)
passwordField.addEventListener("focusout",checkPasswords)



function checkPasswords() {
    console.log(passwordField.value, passwordFiledAgain.value)

    if (passwordField.value !== passwordFiledAgain.value) {
        passwordFiledAgain.setCustomValidity(" ");
        console.log("ddd")
    }

    else {
        passwordFiledAgain.setCustomValidity("");
    }

}