const lengthSlider = document.getElementById("length");
const lenVal = document.getElementById("lenVal");
const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

lenVal.textContent = lengthSlider.value;

lengthSlider.oninput = () => {
    lenVal.textContent = lengthSlider.value;
};

function generatePassword() {
    let chars = "";
    if (upper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (number.checked) chars += "0123456789";
    if (symbol.checked) chars += "!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < lengthSlider.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordInput.value = password;
    checkStrength(password);
}

function checkStrength(password) {
    let strength = "Weak";
    if (password.length >= 12 && /[A-Z]/.test(password) &&
        /[a-z]/.test(password) && /\d/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 8) {
        strength = "Medium";
    }
    strengthText.textContent = "Strength: " + strength;
}

function togglePassword() {
    passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
}

function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied!");
}

function signUp() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const successMsg = document.getElementById("successMsg");

    emailError.textContent = "";
    successMsg.textContent = "";

    if (!email.includes("@")) {
        emailError.textContent = "Invalid email address";
        return;
    }

    if (passwordInput.value.length < 6) {
        alert("Password too short");
        return;
    }

    localStorage.setItem(email, passwordInput.value);
    successMsg.textContent = "Account created successfully!";
}
