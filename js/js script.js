document.addEventListener("DOMContentLoaded", () => {
    // Set welcome name
    const userName = "Harfi";
    const welcomeElement = document.getElementById("welcome");
    if (welcomeElement) {
      welcomeElement.textContent = `Hi ${userName}, Welcome To Website`;
    }
  
    // Handle form submission
    const form = document.getElementById("contactForm");
    const resultBox = document.getElementById("resultBox");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("nameInput").value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const message = document.getElementById("messageText").value;
      const currentTime = new Date().toString();
  
      resultBox.innerHTML = `
        <strong>Current time:</strong> ${currentTime}<br><br>
        <strong>Nama:</strong> ${name}<br>
        <strong>Tanggal Lahir:</strong> ${birthdate}<br>
        <strong>Jenis Kelamin:</strong> ${gender}<br>
        <strong>Pesan:</strong> ${message}
      `;
    });
  });
  