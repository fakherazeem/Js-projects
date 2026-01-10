document.getElementById("generateBtn").addEventListener("click", function () {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const passwordLength = 14;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars[randomNum];
  }

  document.getElementById("password").value = password;
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  navigator.clipboard.writeText(passwordInput.value);
    alert("Password copied to clipboard!");

});
