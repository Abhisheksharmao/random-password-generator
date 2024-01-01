const passwordbox = document.getElementById("password");
const length = 6;
const uppercase = "QWERTYUIOPASDFGHJKLZXCVNM";
const lowercase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbols = "@$&_-";
const allchar = uppercase + lowercase + number + symbols;

function generate() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordbox.value = password;
}
function copy(){
    passwordbox.select();
    document.execCommand("copy");
}