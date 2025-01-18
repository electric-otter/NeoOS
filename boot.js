document.documentElement.requestFullscreen();
document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        window.location.href = "https://electric-otter.github.io/NeoOS/desktop.html";
    }
}
