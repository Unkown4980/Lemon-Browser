let input = "https://example.com";

function promtuser() {
    input = window.prompt("Enter the URL of the website you want to visit", "https://example.com");
    go();
}

function updateInputValue() {
    input = document.getElementById('input').value;
}

document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        updateInputValue();
        go();
    }
});

function go() {
    const iframe = document.getElementById('browserFrame');
    iframe.src = input;
    updateUrl();
}

function updateUrl() {
    var iframe = document.getElementById('browserFrame');
    var urlSpan = document.getElementById('url');
    urlSpan.textContent = iframe.src;
}