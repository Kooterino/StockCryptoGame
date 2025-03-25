function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function viewStocks() {
    document.getElementById("content").innerHTML = "<h2>Stocks</h2><p>Stock data will be displayed here.</p>";
}
function viewCrypto() {
    document.getElementById("content").innerHTML = "<h2>Cryptocurrency</h2><p>Crypto data will be displayed here.</p>";
}