function formvalidation() {
    const first = document.getElementById("first").value;
    const fname = document.getElementById("fname").value;
    const designation = document.getElementById("designation").value;
    const dateofBirth = document.getElementById("dateofBirth").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;

    const firstError = document.getElementById("first-error");
    const fnameError = document.getElementById("fname-error");
    const designationError = document.getElementById("designation-error");
    const dateofBirthError = document.getElementById("dateofBirth-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const mobileError = document.getElementById("mobile-error");

    firstError.textContent = "";
    fnameError.textContent = "";
    designationError.textContent = "";
    dateofBirthError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    mobileError.textContent = "";

    let isValid = true;

    if (first === "" || /\d/.test(first)) {
        firstError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (fname === "" || /\d/.test(fname)) {
        fnameError.textContent = "Please enter your father's name properly.";
        isValid = false;
    }

    if (designation === "None") {
        designationError.textContent = "Please select your designation.";
        isValid = false;
    }

    if (dateofBirth === "") {
        dateofBirthError.textContent = "Please enter your date of birth properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 8 || !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])/.test(password)) {
        passwordError.textContent = "Please enter a valid password with at least 8 characters, including a number, a letter, and a special character.";
        isValid = false;
    }

    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        mobileError.textContent = "Please enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (isValid) {
        if (designation === "Admin") {
            alert("Signup successfully");
            window.location = "login.html"; 
        } else {
            alert("Student cannot sign up. Admin only.");
        }
    }

    return isValid;
}
