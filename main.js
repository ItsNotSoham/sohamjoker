function setup() {
    c1=createCanvas(400,400);
    c1.center()
    v1=createCapture(VIDEO)
    v1.hide()
    myModel=ml5.poseNet(v1,modelLoaded)
    myModel.on('pose',gotPoses)

}
function modelLoaded()
{console.log("Posenet has loded")}
nosex=0
nosey=0
function gotPoses(results){
    if(results.length>0){
        nosex=results[0].pose.nose.x=-50
        nosey=results[0].pose.nose.y=-60
        console.log("X position of my nose is ",nosex)
        console.log("Y position of my nose is ",nosey)
    }
}

function preload(){
    jokernose=loadImage("https://i.postimg.cc/MpLMt7vC/istockphoto-1263470112-612x612.jpg")
}



function draw() {
    image(v1,0,0,400,400)
    image(jokernose,nosex,nosey,30,30)
}

