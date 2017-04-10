

var canvas;

var mic;
var mySound;
var mySoundRecorder;
var isRecording;
var recordbutton;
var rID = null;
var song;
var amp;
var fft;
var volhistory = [];
var w;
var vol;
var diam;
var spectrum;

var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function setup(){  

  canvas = createCanvas(1366, 784);
  canvas.parent('mainpart');

  colorMode(HSB);
  angleMode(DEGREES);
  //song.play();
  fft = new p5.FFT(0.8, 256);
  w = width/256;

  amp = new p5.Amplitude();
  amp.setInput(mic);

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


function draw() {
 
  background(255);
  //vol = amp.getLevel();
  diam = map(vol, 0, 0.3, 10, 200);
  fill(255, 0, 255);
  //console.log(diam);
  //ellipse(width / 2, height / 2, diam, diam);
  
  translate(width/2, height/2);
  spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp, 0, 256, 100, 700);
    var x = r * cos(angle);
    var y = r * sin(angle);
    tint(255, 126); 
    stroke(i, 255, 150);
    line(0, 0, x, y);
  
  }


  toneSampler.loop=0;
  //not sure why this has to be set here, but it loops otherwise
  micLevel = mic.getLevel();
  //ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
  //taking function from pitchdetect.js
  //gotStream(getAudioContext());

}


function checkrecording()
{ 
  if(isRecording==0)
  {isRecording = 1;
    mySoundRecorder.record(mySound);
    console.log(mySound);
  currentvalue = document.getElementById('record').value;
  if(currentvalue == "stop"){
    document.getElementById("record").value="record";
  }else{
    document.getElementById("record").value="stop";
  }
  console.log("recordbutton pressed");
}else if(isRecording==1)
  { console.log("Key Released");
    isRecording = 0;
    mySoundRecorder.stop();
    toneSampler.set(mySound);
    theBuffer = mySound.buffer;
  }
         //console.log(currentvalue);
         //console.log(document.getElementById("record").value);
}

function saveaudio(){
  save(mySound, "SoundSample.wav");
  console.log("save audio");
}


function savemidi(){
  console.log("save midi");
}

function playaudio() {
  console.log("play audio");
}

function playmidi() {
  console.log("play midi");
}

function playsound() {  
  toneSampler.triggerAttack(1);
  console.log("play sound");
}

function mutemic() {
  console.log("mute mic");
    //mic.disconnect();
    mic.amp(0); 
}

function sensitivity()
{
  console.log("sensitivity was changed");
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
          //Pressing the "T" button will play the note currently analyzed
          //(if "blank" it should default to the most recent analysis)

          var note =  noteFromPitch( pitch );
          var currentAnalyzedNote = noteStrings[note%12];

          console.log("t pressed, detected " + currentAnalyzedNote);
          synth.triggerAttackRelease([currentAnalyzedNote + "5"], "4n");
        }
        
        if (key=="S"){
          //-Dominic
          //save the current audio buffer
          //looks like it might need to be done with p5
          //

          save(mySound, "SoundSample.wav");

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

function onoff(){
  console.log("onoff working")
  currentvalue = document.getElementById('onoff').value;
  if(currentvalue == "Off"){
    document.getElementById("onoff").value="On";
  }else{
    document.getElementById("onoff").value="Off";
  }
}