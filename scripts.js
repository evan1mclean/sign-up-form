let form = document.getElementById("signup-form");
let password = document.getElementById("userpassword");
let confirmPassword = document.getElementById("confirmpassword");
let errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", function(e) {
    if (password.value !== confirmPassword.value) {
        password.style.border = "1px solid red";
        confirmPassword.style.border = "1px solid red";
        errorMessage.textContent = "* Passwords do not match";
        e.preventDefault();
    }
});