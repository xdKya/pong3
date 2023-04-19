const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var right;
var left;

var angle = 50;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01,
  };

  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 300, 400, 20, ground_options);
  World.add(world, ground);

  ground2 = Bodies.rectangle(200, 100, 100, 20, ground_options);
  World.add(world, ground2);

  ball = Bodies.circle(200, 10, 20, ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  right = createImg("right.png");
  right.size(50, 50);
  right.position(330, 330);
  right.mouseClicked(direita);

  left = createImg("left.png");
  left.size(50, 50);
  left.position(10, 330);
  left.mouseClicked(esquerda);
}

function draw() {
  background(51);
  Engine.update(engine);

  fill("red");

  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 500, 20);

  Matter.Body.rotate(ground2, angle);
  push();
  translate(ground2.position.x, ground2.position.y);
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();

  //girando
  angle += 0.01;

  console.log(ground.position.y);
}

function direita() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.005, y: 0 });
}

function esquerda() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: -0.005, y: 0 });
}
