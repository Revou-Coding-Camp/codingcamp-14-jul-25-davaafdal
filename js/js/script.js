document.addEventListener('DOMContentLoaded', function() {
    // 4. Welcoming speech on Home Page "Hi Name" is use JavaScript for fill the "Name"
    const userNameElement = document.getElementById('userName');
    if (userNameElement) {
        // You can get the name from a prompt, local storage, or a predefined value
        const defaultName = "Harfi"; // As seen in the mockup
        // const userName = prompt("Please enter your name:");
        // if (userName) {
        //     userNameElement.textContent = userName;
        // } else {
        userNameElement.textContent = defaultName;
        // }
    }

    // 5. Validate Form "Message Us" & show value when submit form on the HTML with JavaScript
    const messageForm = document.getElementById('messageForm');
    const submissionOutput = document.getElementById('submissionOutput');
    const currentTimeElement = document.getElementById('currentTime');

    // Display current time
    function updateCurrentTime() {
        const now = new Date();
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        currentTimeElement.textContent = now.toLocaleString('en-US', options);
    }
    updateCurrentTime(); // Call once initially
    setInterval(updateCurrentTime, 1000); // Update every second

    if (messageForm) {
        messageForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const jenisKelaminRadio = document.querySelector('input[name="jenisKelamin"]:checked');
            const jenisKelamin = jenisKelaminRadio ? jenisKelaminRadio.value : 'Tidak disebutkan';
            const pesan = document.getElementById('pesan').value;

            // Basic validation
            if (!nama || !tanggalLahir || !jenisKelaminRadio || !pesan) {
                alert('Semua kolom harus diisi!');
                return;
            }

            // Display values
            submissionOutput.innerHTML = `
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Tanggal Lahir:</strong> ${tanggalLabel(tanggalLahir)}</p>
                <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            `;

            // Optional: Clear form fields after submission
            messageForm.reset();
        });
    }

    function tanggalLabel(dateString) {
        if (!dateString) return 'Tidak disebutkan';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
});