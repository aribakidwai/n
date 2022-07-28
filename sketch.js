 weight = [40,50,60,30];
 

function setup() 
{
 
  createCanvas(400,400);
  var sum = weight[0]+weight[1]+weight[2]+weight[3];
  var average= sum/weight.length;
  console.log(average);
}

function draw() 
{
background(51);

}

