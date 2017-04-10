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

var recInfoStatus;



//midi sequence object, MidiConvert
var midi;

//midi score part object, for Tone.js note playback
var midiPart

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

  canvas = createCanvas(1366, 784);
  canvas.parent('mainpart');


  colorMode(HSB);
  angleMode(DEGREES);

  fft = new p5.FFT(0.8, 256);
  w = width / 256;

  amp = new p5.Amplitude();
  amp.setInput(mic);

  Tone.setContext(getAudioContext());
  pitchShiftProcess = new Tone.PitchShift({
    "pitch": 0.5

  }).toMaster();
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




  isRecording = 0;
  //There is "recInfoStatus", which will replace this eventually
  //But we'll use this boolean for now

  //p5 audio Mic for recording into a p5 buffer
  //Which then can be put into a Tone buffer later on
  mic = new p5.AudioIn();
  mic.start();
  mic.connect();
  mySound = new p5.SoundFile();
  mySoundRecorder = new p5.SoundRecorder();
  mySoundRecorder.setInput(mic);



  //Load a Midi sequence and play through the synth
  //

  midiPart = new Tone.Pattern(function (time, note) {
    //Originally "part" instead of pattern

    //use the events to play the synth
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //Currently, the "time" doesn't work
    //need to figure how to properly implement note.time

  }, midi.tracks[0].notes);



  Tone.Transport.bpm.value = midi.header.bpm;
  Tone.Transport.start();



}


function draw() {
  toneSampler.loop = 1;

  background(255);
  //vol = amp.getLevel();
  diam = map(vol, 0, 0.3, 10, 200);
  fill(255, 0, 255);
  //console.log(diam);
  //ellipse(width / 2, height / 2, diam, diam);

  translate(width / 2, height / 2);
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


  toneSampler.loop = 0;
  //not sure why this has to be set here, but it loops otherwise

  micLevel = mic.getLevel();
  //ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);



  writeMIDICurrentNote();
  //Currently "writing" notes in the draw function, fast as possible
  //Later we will only access our midi writer at specific intervals
}


function checkrecording() {
  if (isRecording == 0) {
    isRecording = 1;
    mySoundRecorder.record(mySound);
    console.log(mySound);
    currentvalue = document.getElementById('record').value;
    if (currentvalue == "stop") {
      document.getElementById("record").value = "record";
    } else {
      document.getElementById("record").value = "stop";
    }
    console.log("recordbutton pressed");
  } else if (isRecording == 1) {
    console.log("Key Released");
    isRecording = 0;
    mySoundRecorder.stop();
    toneSampler.set(mySound);
    theBuffer = mySound.buffer;
  }
}

function saveaudio() {
  save(mySound, "SoundSample.wav");
  console.log("save audio");
}


function savemidi() {
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

function sensitivity() {
  console.log("sensitivity was changed");
}






//Saving MIDI
// (or arbitary file type)
var saveMidiData = function (data, fileName) {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  blob = new Blob(data, { type: "octet/stream" }),
    url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};


function writeMIDICurrentNote() {

  if (isRecording) {
    //console.log("inside writeMIDICurrentNote");

    //noteElem.innerHTML

    currentMIDINote = freqToMidi(pitch);
    //freqToMidi is a Tone function
    //pitch is a variable from pitchdetect.js


    var currentTime = new Date();
    var currentRecTime = (currentTime - recInfoStatus.startTime) / 1000;

    console.log(currentMIDINote + " @ " + currentRecTime);

    midi.tracks[0].patch(32).note(currentMIDINote, currentRecTime, 0.01);
    //The added note is 0.01 seconds long
    //Will later adjust length based on different parameters

  }
}

function keyPressed() {

  if (key == "R") {

    console.log("r pressed");
    isRecording = 1;
    recInfoStatus.startTime = new Date();
    mySoundRecorder.record(mySound);
  }

  if (key == "P") {
    console.log("play sound");
    toneSampler.triggerAttack(1);
    midiPart.index = 0;
    midiPart.start();

  } if (key == " ") {
    toneSampler.triggerAttackRelease(0, 0);
    midiPart.stop();
  }
  if (key == "2") {
    console.log("pressed 2");
    //Mute mic
    mic.amp(0);
    testDownload = midi.encode();
    save(testDownload, "test.mid");
  }
  if (key == "1") {
    //un-mute mic
    mic.amp(1);
  }
  if (key == "T") {
    //imported from pitchdetect.js
    //
    //var note =  noteFromPitch( pitch );
    //noteElem.innerHTML = noteStrings[note%12];
    //
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
    //

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
    element.setAttribute('download', 'miditest.midi');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

  }
  else {
    //
  }
}

function keyReleased() {
  console.log("Key Released");
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
  console.log("onoff working")
  currentvalue = document.getElementById('onoff').value;
  if (currentvalue == "Off") {
    document.getElementById("onoff").value = "On";
  } else {
    document.getElementById("onoff").value = "Off";
  }
}