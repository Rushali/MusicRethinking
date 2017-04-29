//Welcome to Rethinking Production Tools with 
// Rushali, Stanlyn and Dominic
//
//Tuner, audio to MIDI musical web app
//Much thanks to:
//
//Web Audio Demos Pitch Detect Example:
//https://webaudiodemos.appspot.com/pitchdetect/index.html
//Tone.js, with MidiConvert.js
//p5.js
//
//Rune Madsen, Patrick Hebron, Yotam Mann, Justin Peake


var canvas;
var mic = new p5.AudioIn();
var micon = 0;
var mySound;
var mySoundRecorder;
var isRecording = 0;
var recordbutton;
var rID = null;
var song;
var amp1 = new p5.Amplitude();
var fft = new p5.FFT(0.8, 256);
var volhistory = [];
var w;
var vol;
var diam;
var spectrum;
var recInfoStatus;



//html elements for UI
var div2 = document.getElementById("d2");
var div3 = document.getElementById("d3");
var div3 = document.getElementById("detune");



//This is a MidiConvert midi sequence object 
var midi;

//midi score part object, for Tone.js note playback
var midiPart;

//synthesizer, for Tone.js voice
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();



function setup() {

  recInfoStatus = [
    { startTime: 0 },
    { endTime: 0 },
    { timeLength: 0 },
    { isRecording: false }

    //time is obtained by a var with "new Date()"
    //timers can be made by setting a start time with Date()
    //then an end time later on
    //at that point, you calculate the difference, end time minus start time
  ];

  canvas = createCanvas(1000, 500);
  canvas.id("maincanvas");

  colorMode(HSB);
  angleMode(DEGREES);

  
  w = width / 2048;

  //We're using p5 for some of the audio functionality
  //p5.sound has easy access to the browser microphone
    //and the ability to save audio buffers as .wav files easily
  amp = new p5.Amplitude();
  amp.setInput(mic);
  
  
  
  //Making sure that the Tone library shares browser audio context
  Tone.setContext(getAudioContext());

  
  toneSampler = new Tone.Sampler({
    "loop": false
  }).toMaster();

  //Using MidiConvert.js from Tone.js
  // create a new midi file
  midi = MidiConvert.create()
  // add a track
  midi.track()
    // select an instrument by its MIDI patch number
    .patch(32);
  //Notes can be added later in the following manner:
  // chain note events: note, time, duration
  //.note(60, 0, 1);
  // .note(63, 1, 1)
  // .note("C6", 2, 1);


  //Simple boolean isRecording status for audio recording
  //RecInfoStatus was created for more robust timing control
    //should eventually replace this, but for now this works
  isRecording = 0;


  
  //p5 audio Mic for recording into a p5 buffer
  //Which then can be put into a Tone buffer later on
  mic.start();
  mic.connect();
  mySound = new p5.SoundFile();
  mySoundRecorder = new p5.SoundRecorder();
  mySoundRecorder.setInput(mic);
  


  //Load a Midi sequence and play through the synth
  //
  midiPart = new Tone.Part(function (time, note) {
    //use the events to play the synth
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
  }, midi.tracks[0].notes);



  midiRecordingLoop = new Tone.Loop(function (time) {
    //This is triggered every eighth note.

    //When writing MIDI notes in a sequence, we are approximately quantizing as 8th notes
    //This is an artistic decision; users may want more or less granularity depending on use
    //But quantizing in this way helps us avoid more spastic MIDI recordings

    //Determining notes per second
    //((Notes Per Beat)  x  (Beats Per Minute)) / 60secs  =  Notes Per Second
    //Note Value	Notes Per Beat
    // Quarter Note:	1
    // 8th Note:	2
    // 8th Note Triplet:	3
    // 16th Note:	4
    // 16th Note Triplet:	6
    // 32nd Note:	8

    //For now we will hard code the note per beat.
    //Given 8th notes, we will create the note length in seconds and pass to function
    //Doing it this way allows us to adjust tempo later without issue

    var noteLength = ((8*Tone.Transport.bpm.value)/60)/60;

    writeMIDICurrentNote(noteLength);
  }, "8n").start(0);


  Tone.Transport.bpm.value = midi.header.bpm;
  Tone.Transport.start();

}


function draw() {
    
  background(255);


  //Visualize mic input
  translate(width / 2, height / 2);
  spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp2 = spectrum[i];
    var r = map(amp2, 0, 256, 100, 700);
    var x = r * cos(angle);
    var y = r * sin(angle);
    tint(255, 126);
    stroke(i, 255, 150);
    line(0, 0, x, y);
  }

  //not sure why this has to be set here, but it loops otherwise
  toneSampler.loop = 0;
  
  //get mic level
  micLevel = mic.getLevel();
  
}


function checkrecording() {
  if (isRecording == 0) {
    isRecording = 1;
    mySoundRecorder.record(mySound);
    recInfoStatus.startTime = new Date();
    //console.log(mySound);
    // if (currentvalue == "record") {
    document.getElementById("record").innerText = "stop";
      console.log("recordbutton pressed"); 
    }
    else if(isRecording == 1) {
    document.getElementById("record").innerText = "record";
    console.log("Key Released");
    isRecording = 0;
    mySoundRecorder.stop();
    toneSampler.set(mySound);
    theBuffer = mySound.buffer;
    recInfoStatus.endTime = new Date();
    var timeDiff = recInfoStatus.endTime - recInfoStatus.startTime;
    recInfoStatus.timeLength = timeDiff;
    
    }
} 


function saveaudio() {
  save(mySound, "SoundSample.wav");
  //console.log("save audio");
}


function savemidi() {

  var data = 'data:audio/midi;base64,' + btoa(midi.encode())
    var element = document.createElement('a');
    element.setAttribute('href', data);
    element.setAttribute('download', 'audioToNotes.mid');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  
}

function playaudio() {

    toneSampler.triggerAttackRelease(0, 0); //mimicing playmidi() functionality
    toneSampler.triggerAttack(1);

}

function playmidi() {
  console.log("playmidi()");
  
    midiPart.stop(); //this makes sure you can re-start
    midiPart.start();
}

function playsound() {

  playaudio();
  //console.log("play sound");
    
}

function mutemic() {
  micon = document.getElementById("micmute").value;
if(micon == "On")
    { 
      mic.amp(0);
      document.getElementById("micmute").value = "Off";
      document.getElementById("micmute").innerText = "unmute";
      console.log("mic muted");
    }
  else if(micon == "Off") {
  //mic.disconnect();
  mic.amp(1);
  document.getElementById("micmute").value = "On";
  document.getElementById("micmute").innerText = "MUTE";
  console.log("mic unmuted");
    }
  //console.log("mute button pressed");
  }

function sensitivity() {
  //highpass and lowpass hasn't been implemented yet
  //so we'll take out the HTML element for now
  //it is commented out in the index.html
  //console.log("sensitivity was changed");
}



function writeMIDICurrentNote(noteLength) {

  if (isRecording) {
    //console.log("inside writeMIDICurrentNote");

    //"blank" note evaluations seem to mess with the midi recording functionality
    //filtering out the "-" values that are generated
    //noteElem.innerHTML
    if (noteElem.innerHTML != "-") {
      currentMIDINote = freqToMidi(pitch);
      //freqToMidi is a Tone function
      //pitch is a variable from pitchdetect.js


      var currentTime = new Date();
      var currentRecTime = (currentTime - recInfoStatus.startTime) / 1000;

      console.log(currentMIDINote + " @ " + currentRecTime);

      midi.tracks[0].patch(32).note(currentMIDINote, currentRecTime, noteLength);
      //Note length determined by Tone time signature/bpm


      //midiPart .add() function
      //.removeAll to clear
      //or new midiPart entirely

      midiPart = new Tone.Part(function (time, note) {
        //use the events to play the synth
        synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
      }, midi.tracks[0].notes);


    }
  }
}


//Here are some keyPress functions that replicate the UI funcionality
  //and testing some new/other functionality
function keyPressed() {

  if (key == "R") {
    //console.log("r pressed");
    isRecording = 1;
    recInfoStatus.startTime = new Date();
    mySoundRecorder.record(mySound);
  }

  if (key == "P") {

    toneSampler.triggerAttackRelease(0, 0);
    midiPart.stop();

    toneSampler.triggerAttack(1);
    midiPart.start();

  } if (key == " ") {
    toneSampler.triggerAttackRelease(0, 0);
    midiPart.stop();
  }
  if (key == "2") {
    mic.amp(0);
    testDownload = midi.encode();
    save(testDownload, "test.mid");
  }
  if (key == "1") {
    keyboard1.toggle( keyboard1.keys[11], true );
    //un-mute mic
    mic.amp(1);
  }
  if (key == "T") {
    //pitch and noteElem.innerHTML are in pitchdetect and
    //are used for the main text that shows notes in the example
    //
    //we're using them here to give to a tone.js synth
    //Pressing the "T" button will play the note currently analyzed
    //(if "blank" it should default to the most recent analysis)

    var note = noteFromPitch(pitch);
    var currentAnalyzedNote = noteStrings[note % 12];

    console.log("t pressed, detected " + currentAnalyzedNote);
    synth.triggerAttackRelease([currentAnalyzedNote + "5"], "4n");
  }

  if (key == "S") {
    //save the current audio buffer
    //using p5 save functionality for the wav
    save(mySound, "SoundSample.wav");

    //Saving the current midi sequence
    //
    //User instructions for testing this:
    //
    //Make sure mic access works
    //Click "Use Live Input" to output notes
    //Hold "R" and whistle to record audio and MIDI
    //Press "S" to download audio and MIDI files
    //

    //Encoding the current sequence into the proper Midi format
    var data = 'data:audio/midi;base64,' + btoa(midi.encode())
    var element = document.createElement('a');
    element.setAttribute('href', data);
    element.setAttribute('download', 'miditest.mid');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

  }
  else {
    
  }
}

function keyReleased() {
  //console.log("Key Released");
  if (isRecording == 1) {
    isRecording = 0;
    recInfoStatus.endTime = new Date();

    var timeDiff = recInfoStatus.endTime - recInfoStatus.startTime;
    recInfoStatus.timeLength = timeDiff;

    mySoundRecorder.stop();
    toneSampler.set(mySound);
    theBuffer = mySound.buffer;
  }
}

function onoff() {
  //console.log("onoff working")
  currentvalue = document.getElementById('onoff').value;
  if (currentvalue == "Off") {
    document.getElementById("onoff").value = "On";
  } else {
    document.getElementById("onoff").value = "Off";
  }
}