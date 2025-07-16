document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const birth = document.getElementById('birth').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('message').value;

    const resultBox = document.getElementById('resultBox');

    if (!name || !birth || !gender || !message) {
        resultBox.innerHTML = '<p style="color:red;">Mohon lengkapi semua data.</p>';
        return;
    }

    const currentTime = new Date();

    resultBox.innerHTML = `
        <b>Current time :</b> ${currentTime}<br><br>
        <b>Nama :</b> ${name}<br>
        <b>Tanggal Lahir :</b> ${birth}<br>
        <b>Jenis Kelamin :</b> ${gender.value}<br>
        <b>Pesan :</b> ${message}
    `;
});
