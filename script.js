function formatJSON() {
    let input = document.getElementById("jsonInput").value;
    let output = document.getElementById("jsonOutput");

    try {
        let formattedJSON = JSON.stringify(JSON.parse(input), null, 4);
        output.textContent = formattedJSON;
        output.style.color = "lightgreen";
    } catch (error) {
        output.textContent = "❌ Geçersiz JSON!";
        output.style.color = "red";
    }
}

function copyToClipboard() {
    let output = document.getElementById("jsonOutput").textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert("JSON kopyalandı! 📋");
    }).catch(() => {
        alert("Kopyalama başarısız!");
    });
}
