const email = document.querySelector('.email');
const form = document.querySelector('.access-form');
const submitBtn = document.querySelector('.access-submit');
const inputContainer = document.querySelector('.input');
const error = document.querySelector('.error');

let errorCount = 0; // Tracks error occurence.

form.addEventListener("submit", event => {
    event.preventDefault();
    validateInput();

    if (errorCount === 0) {
        alert("We have received your details.\nThank you for using Fylo.");
    }

});

const validateEmail = (email) => {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;

    const isValid = regex.test(email.trim().toLowerCase());
    return isValid;
};

const validateInput = () => {
    //Getting values
    errorCount = 0;
    const emailValue = email.value.trim();
    if(emailValue === "") {
        setError(email, "Email Address is required");
        errorCount++;
    } else if (!validateEmail(emailValue)) {
        setError(email, "Please enter a valid email address");
        errorCount++;
    } else {
        inputContainer.classList.remove("fail");
    };
};

const setError = (element, message) => { // Display error messages
    inputContainer.classList.add("fail");
    error.textContent = message;

    element.addEventListener("click", event => {
        inputContainer.classList.remove("fail");
    });
};