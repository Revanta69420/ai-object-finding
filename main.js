status = "";
function preload() {

}
function setup() {
    canvas = createCanvas(520, 340);
    canvas.center();
    video = createCapture(VIDEO);
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("text_input").value;
}
function modelLoaded() {
console.log("Model Loaded!")
status = true;
}
function draw() {
image(video, 0, 0, 520, 340);
}