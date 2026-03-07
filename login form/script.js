let isLoginMode = true;

function toggleForm() {
    isLoginMode = !isLoginMode;
    
    
    document.getElementById('signupFields').style.display = isLoginMode ? 'none' : 'block';
    document.getElementById('confirmField').style.display = isLoginMode ? 'none' : 'block';

    
    document.getElementById('formTitle').innerText = isLoginMode ? "Sign in" : "Create your Account";
    document.getElementById('formSubtitle').innerText = isLoginMode ? "Use your StyleHub Account" : "Continue to StyleHub";
    document.getElementById('switchBtn').innerText = isLoginMode ? "Create account" : "Sign in instead";
    document.getElementById('mainBtn').innerText = isLoginMode ? "Next" : "Create";
}

function handleAuth() {
    const email = document.getElementById('userEmail').value;
    const pass = document.getElementById('userPass').value;

    if (isLoginMode) {
     
        const savedData = localStorage.getItem(email);
        if (savedData) {
            const user = JSON.parse(savedData);
            if (user.password === pass) {
                alert(`Welcome back, ${user.fname}! Login Successful.`);
                window.location.href = "store.html";
            } else {
                alert("Incorrect password.");
            }
        } else {
            alert(" User not found.");
        }
    } else {
        // --- SIGNUP LOGIC ---
        const fname = document.getElementById('firstName').value;
        const lname = document.getElementById('lastName').value;
        const phone = document.getElementById('userPhone').value;
        const confirm = document.getElementById('confirmPass').value;

        // 1. Check for empty fields
        if (!fname || !lname || !phone || !email || !pass) {
            alert(" Please fill all fields.");
            return;
        }

        // 2. Check if passwords match
        if (pass !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        // 3. Save complex object
        const userData = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            password: pass
        };

        localStorage.setItem(email, JSON.stringify(userData));
        alert(` Account created for ${fname}! Please login.`);
        
        
        document.querySelectorAll('input').forEach(input => input.value = '');
        toggleForm();
    }
}