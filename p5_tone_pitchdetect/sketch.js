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


var div2 = document.getElementById("d2");
var div3 = document.getElementById("d3");
var div3 = document.getElementById("detune");



//midi sequence object, MidiConvert
var midi;

//midi score part object, for Tone.js note playback
var midiPart;

//synthesizer, for Tone.js voice
var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

function setup() {

  
  // var audioContext = window.AudioContext || window.webkitAudioContext;
	// this.context = new audioContext();
  //audioContext = getAudioContext();
  //nx.audioContext = getAudioContext();
  //console.log(nx.audioContext);

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
  canvas.id("maincanvas");
  //var div1 = document.getElementById("detector");
  //canvas.parent("detector");
  //document.getElementById("maincanvas").appendChild(div1);


  colorMode(HSB);
  angleMode(DEGREES);

  
  w = width / 2048;


  amp = new p5.Amplitude();
  amp.setInput(mic);

  
  //Rushali's pretty branch didn't have the above two lines,
  //just the commented out one below:
  //amp1.setInput(mic);


  
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
  
  mic.start();
  mic.connect();
  mySound = new p5.SoundFile();
  mySoundRecorder = new p5.SoundRecorder();
  mySoundRecorder.setInput(mic);

  //Load a Midi sequence and play through the synth
  //

  midiPart = new Tone.Part(function (time, note) {
    //Originally "part" instead of pattern

    //use the events to play the synth
    synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //Currently, the "time" doesn't work
    //need to figure how to properly implement note.time

  }, midi.tracks[0].notes);



  midiRecordingLoop = new Tone.Loop(function (time) {
    //triggered every eighth note. 
    //console.log("midiRecordingLoop: " + time);

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
  
  toneSampler.loop = 0;

  
  background(255);

  // vol = amp1.getLevel();
  // diam = map(vol, 0, 0.3, 10, 200);

  //console.log(diam);
  //ellipse(width / 2, height / 2, diam, diam);
  //pushMatrix();

  translate(width / 4, height / 4);
  spectrum = fft.analyze();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp2 = spectrum[i];
    var r = map(amp2, 0, 512, 100, 1000);
    var x = r * cos(angle);
    var y = r * sin(angle);
    tint(255, 126);
    stroke(i, 255, 150);
    line(0, 0, x, y);
  }


  //run input through low pas mid pass hi pass filters, 
  //popMatrix();

  toneSampler.loop = 0;
  //not sure why this has to be set here, but it loops otherwise

  micLevel = mic.getLevel();
  
  //ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);


  


  //writeMIDICurrentNote();
  //old method of writing the notes


  highlightNoteKey(freqToMidi(pitch));
}


function checkrecording() {
  if (isRecording == 0) {
    isRecording = 1;
    mySoundRecorder.record(mySound);
    recInfoStatus.startTime = new Date();
    console.log(mySound);
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
  console.log("save audio");
}


function savemidi(data, fileName) {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  blob = new Blob(data, { type: "octet/stream" }),
  url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  console.log("save midi");
}

function playaudio() {
  console.log("play audio");
}

function playmidi() {
  console.log("play midi");
  midiPart.index = 0;
  midiPart.start();
  // else {

  //     toneSampler.triggerAttackRelease(0, 0);
  //   midiPart.stop();
  //   }
}

function playsound() {
  toneSampler.triggerAttack(1);
  console.log("play sound");
    
}

function mutemic() {
  micon = document.getElementById('onoff').value;
if(micon == "On")
    { 
      mic.amp(0);
      document.getElementById("onoff").value = "Off";
      document.getElementById("micmute").innerText = "unmute";
      console.log("mic muted");
    }
  else if(micon == "Off") {
  //mic.disconnect();
  mic.amp(1);
  document.getElementById("onoff").value = "On";
  document.getElementById("micmute").innerText = "MUTE";
  console.log("mic unmuted");
    }
  //console.log("mute button pressed");
  }

function sensitivity() {
  console.log("sensitivity was changed");
}



//Saving MIDI
// (or arbitary file type)
// var saveMidiData = function (data, fileName) {
//   var a = document.createElement("a");
//   document.body.appendChild(a);
//   a.style = "display: none";
//   blob = new Blob(data, { type: "octet/stream" }),
//     url = window.URL.createObjectURL(blob);
//   a.href = url;
//   a.download = fileName;
//   a.click();
//   window.URL.revokeObjectURL(url);
// };


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
      //The added note is 0.01 seconds long
      //Will later adjust length based on different parameters


      //midiPart .add() function
      //.removeAll to clear
      //or new midiPart entirely

      midiPart = new Tone.Part(function (time, note) {
        //Originally "part" instead of pattern

        //use the events to play the synth
        synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
        //Currently, the "time" doesn't work
        //need to figure how to properly implement note.time

      }, midi.tracks[0].notes);


    }
  }
}

function highlightNoteKey(incomingNote){
  
  //Will use this once the nexusUI piano widget starts working
  //-Dominic

//   for(i=0; i<11; i++){
//      keyboard1.toggle( keyboard1.keys[i], false );
//   }

//  //keyboard1.toggle( keyboard1.keys[0], true );
   if(incomingNote == "C"){
     keyboard1.toggle( keyboard1.keys[0], true );
   }
//   else if(incomingNote == "C#"){
//     keyboard1.toggle( keyboard1.keys[1], true );
//   }
//   else if(incomingNote == "D"){
//     keyboard1.toggle( keyboard1.keys[2], true );
//   }
//   else if(incomingNote == "D#"){
//     keyboard1.toggle( keyboard1.keys[3], true );
//   }
//   else if(incomingNote == "E"){
//     keyboard1.toggle( keyboard1.keys[4], true );
//   }
//   else if(incomingNote == "F"){
//     keyboard1.toggle( keyboard1.keys[5], true );
//   }
//   else if(incomingNote == "F#"){
//     keyboard1.toggle( keyboard1.keys[6], true );
//   }
//   else if(incomingNote == "G"){
//     keyboard1.toggle( keyboard1.keys[7], true );
//   }
//   else if(incomingNote == "G#"){
//     keyboard1.toggle( keyboard1.keys[8], true );
//   }
//   else if(incomingNote == "A"){
//     keyboard1.toggle( keyboard1.keys[9], true );
//   }
//   else if(incomingNote == "A#"){
//     keyboard1.toggle( keyboard1.keys[10], true );
//   }
//   else if(incomingNote == "B"){
//     keyboard1.toggle( keyboard1.keys[11], true );
//   }    

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

    //Dominic
    //Updating on 4/15/17
    //midiPart has been changed to a ToneJs Part instead of Pattern
    //This means it needs to be explicitly stopped before I can start again
    //putting in a stop here so that the playback triggers properly
    //-which then also means we should do the same for the audio.
    toneSampler.triggerAttackRelease(0, 0);
    midiPart.stop();

    toneSampler.triggerAttack(1);
    //midiPart.index = 0;
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
    keyboard1.toggle( keyboard1.keys[11], true );
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
    element.setAttribute('download', 'miditest.mid');
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