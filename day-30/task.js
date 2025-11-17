// ---------- Calculator ----------
function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = a + b;
}

function sub() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = a - b;
}

function mul() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = a * b;
}

function div() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = a / b;
}

function mod() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = a % b;
}

// ---------- Light / Dark Mode ----------
function toggleMode() {
    document.body.classList.toggle("dark");
}

// ---------- Show / Hide Paragraph ----------
function showHide() {
    let p = document.getElementById("myp");
    if (p.style.display === "none")
         {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

// ---------- Character Count ----------
function countChars() {
    let text = document.getElementById("txt").value;
    document.getElementById("charCount").innerText = text.length;
}
