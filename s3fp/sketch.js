function setup() {
  createCanvas(900, 700);
}


let data = ["", "h", "a", "v", "e", "", "n", "o", "", "f", "e", "a", "r", ":)"];
let fonts = [
  "Liu Jian Mao Cao",
  "Pacifico",
  "Dancing Script",
  "Indie Flower",
  "Shadows Into Light",
  "Shadows Into Light Two",
  "Amatic SC",
  "Permanent Marker",
  "Sue Ellen Francisco",
  "Comic Neue",
  "Caveat",
  "Merienda",
  "Reenie Beanie",
  "Homemade Apple",
  "Neucha",
  "Architects Daughter",
  "Rock Salt",
  "Handlee",
  "Marck Script"
];
let i = 0;
let j = 0;
let c = 0;

function setup() {
  createCanvas(900, 700);
  frameRate(random(2,7));
}

function draw() {
  if (i > data.length) {
    textFont(random(fonts));
    background(250);
    i = 0;
    rect(25, 25, 50, 50);
    rect(820, 615, 50, 50);
  }

  let d = data[i];

  var r = random(20, 255);
  var g = random(0, 200);
  var b = random(40, 255);
  fill(r, g, b);
  text(d, 60 * i, random(300,600));
  textAlign(CENTER);
  textSize(random (30,75));
  i = i + 1;
}

function mousePressed() {
  background(random(0, 255), random(0, 255), random(0, 255));
}

function keyPressed() {
  if (key == 's') {
    save("seemslikeyoudo.png");
  }
}