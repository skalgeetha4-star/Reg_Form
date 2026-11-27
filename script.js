document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    if(username.length < 4) {
        alert("Invalid Username! Minimum 4 characters");
        return;
    }
    if(password.length < 8 ||
       !/[A-Za-z]/.test(password) ||
       !/[0-9]/.test(password)) {
        alert("Invalid Password!");
        return;
    }
    if(age <= 0 || age >= 30) {
        alert("Age must be below 30!");
        return;
    }
    if(!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain 10 digits!");
        return;
    }
    document.getElementById("result").innerHTML =
        "Registration Successful!";
    alert("All Details Submitted Successfully!");
    document.getElementById("myForm").reset();
});
