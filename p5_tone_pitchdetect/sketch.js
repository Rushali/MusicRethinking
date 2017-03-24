  
var mic;
var mySound;
var mySoundRecorder;
var isRecording;

var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function setup(){  
  Tone.setContext(getAudioContext());

  pitchShiftProcess = new Tone.PitchShift({
    "pitch" : 0.5

  }).toMaster();

  toneSampler = new Tone.Sampler({
    "loop" : false


  }).toMaster();

  

  //usually we do .connect() or .toMaster
  //but won't work with a p5 object, like the recorded buffer object we use for p5 sound
  //need to find a way to pass it to a tone object


  //Later to try:
  //try doing a p5 recording directly into a tone buffer
  //but that might not be necessary


  isRecording = 0;

  mic = new p5.AudioIn();
  mic.start();
  mic.connect();
  mySound = new p5.SoundFile();
  mySoundRecorder = new p5.SoundRecorder();
  mySoundRecorder.setInput(mic);






  //This is just a starting tone to make sure tone.js is working
  //and to use as a template/copy paste code
  //
  // 
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
    if(key == "T"){
          //imported from pitchdetect.js
          //
          //var note =  noteFromPitch( pitch );
  		    //noteElem.innerHTML = noteStrings[note%12];
          //
          //these variables are in pitchdetect and are used for the main
          //text that shows notes in the example
          //
          //
          //we're using them here to give to a tone.js synth
          //Pressing the "T" button will play the note currently currently analyzed
          //(if "blank" it should default to the most recent analysis)

          var note =  noteFromPitch( pitch );
          var currentAnalyzedNote = noteStrings[note%12];

          console.log("t pressed, detected " + currentAnalyzedNote);
          synth.triggerAttackRelease([currentAnalyzedNote + "5"], "4n");
          }
  else{
  //console.log("Key Pressed");
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