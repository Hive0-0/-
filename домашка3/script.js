const coordsElement = document.getElementById("coords");
document.addEventListener("mousemove", function(event) {
    const x = event.clientX;
    const y = event.clientY;
    
    coordsElement.textContent = "X: " + x + ", Y: " + y;
    
});

