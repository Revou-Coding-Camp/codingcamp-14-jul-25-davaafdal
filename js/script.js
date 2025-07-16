document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    const name = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    const output = document.getElementById('output');
    output.innerHTML = `
        <strong>Current time: </strong>${new Date().toString()}<br>
        <strong>Nama: </strong>${name}<br>
        <strong>Tanggal Lahir: </strong>${birthDate}<br>
        <strong>Jenis Kelamin: </strong>${gender}<br>
        <strong>Pesan: </strong>${message}
    `;
});
