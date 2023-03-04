var canvas = document.getElementById("lienzo")
var dibujos = canvas.getContext("2d")
var color = "red"

dibujos.beginPath()
dibujos.strokeStyle = color
dibujos.lineWidth = 3
dibujos.arc(100, 100, 0, 2*Math.PI)
dibujos.stroke