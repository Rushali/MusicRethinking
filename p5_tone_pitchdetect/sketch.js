  
var mic;
var mySound;
var mySoundRecorder;
var isRecording;

function setup(){  
  Tone.setContext(getAudioContext());

  pitchShiftProcess = new Tone.PitchShift({
    "pitch" : 0.5

  }).toMaster();

  toneSampler = new Tone.Sampler({
    "loop" : false


  }).toMaster();

  



  //usually would do .connect(),
  //but won't work with a p5 object
  //need to find a way to pass it to a tone object


  //Later to do
  //try doing a p5 recording directly into a tone buffer


  isRecording = 0;

  mic = new p5.AudioIn();
  mic.start();
  mic.connect();
  mySound = new p5.SoundFile();
  mySoundRecorder = new p5.SoundRecorder();
  mySoundRecorder.setInput(mic);







  var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
  //set the attributes using the set interface
  synth.set("detune", -1200);
  //play a chord
  synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");

}
function draw(){
  toneSampler.loop=0;
  //not sure why this has to be set here, but it loops otherwise

  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);


  //taking function from pitchdetect.js
  //gotStream(getAudioContext());

}

function mousePressed(){
  
}


function keyPressed(){
  
  if (key == "R"){

    console.log("r pressed");
    			isRecording = 1;
          mySoundRecorder.record(mySound);
          
          }
  if (key == "P"){
  console.log("play sound");
  //mySound.play();
  toneSampler.triggerAttack(1);
  //save(mySound,"mySound.wav");

  } if(key ==" "){
   granularSet(); 
  }
   if(key == "2"){
  console.log("pressed 2");
    //mic.disconnect();
  	mic.amp(0);    
  	}
   if(key == "1"){
          //mic.connect();
    			mic.amp(1);
          }
   
  else{
  //console.log("Key Pressed");
    //mySoundRecorder.record(mySound);
	
  //mySoundRecorder.record(mic.buffer);
  }
}

function keyReleased(){
  console.log("Key Released");
  if (isRecording == 1) {
    isRecording = 0;
    mySoundRecorder.stop();
    toneSampler.set(mySound);
    theBuffer = mySound.buffer;
  }
}