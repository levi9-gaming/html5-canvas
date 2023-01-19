/* Create a bouncing ball that starts from center in
 * random direction.
*/

/** @type {HTMLCanvasElement} */
var canvas = document.getElementById("bouncing-ball-canvas");
var context = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 4;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();
context.stroke();