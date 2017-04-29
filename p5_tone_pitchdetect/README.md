# Tuner Project

###A project fo Re-Thinking Production Tools by Rushali, Stanlyn and Dominic

#TO DO for Readme.md
These are the categories that were given in the Week 11 Documentation

##Description
Tuner is an audio analysis web app that can take audio and translate the frequencies into approximate MIDI notation to be used in music making software like Garage Band, Ableton Live, or any other program that can load MIDI files.

##Contributor List
Rushali, Stanlyn and Dominic

##Table of Contents
*index.html: Main index file
*pitchdetect.js: the base audio analysis, from web audio examples
*sketch.js: base logic
*getchords.js: separated file for suggesting chords
*style.css: styling info for the HTML

##Installation Instructions
Clone or download this repository and run a web server in it's directory. Use your browser to navigate to the local host.

##Code Snippet
Key functionality for this project can be found on:
###Line 286

This code is writing the notes, determined by the innerHTML of the noteElem DOM object, into the MIDI track object.

```javascript

function writeMIDICurrentNote(noteLength) {

  if (isRecording) {
    

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


      //midiPart .add() function adds notes to a sequence
      //.removeAll to clear a part
      //or new midiPart entirely just to be thorough

      midiPart = new Tone.Part(function (time, note) {
        //use the events to play the synth
        synth.triggerAttackRelease(note.name, note.duration, time, note.velocity)
      }, midi.tracks[0].notes);


    }
  }
}

```

###Line 224

Once we have MIDI written into the object, we can save the object as an actual MIDI file to download. The following code allows you to download any arbitrary file type, in our case a MIDI file called "audioToNotes.mid".

```javascript

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

```

##Troubleshooting Information
This is an in-progress project, currently useful as a starting template for web applications that want to utilize frequency/note analysis. As such, there are some issues, errors and bugs.

Notably, there is audio clicking and distortion on certain platforms and browser configurations. If you experience this, please try using a different browser for the time being.

Also, there are issues with audio bitrate mis-match on certain machines. Recorded and saved audio may sound like they are at a different pitch because of this bug.

##Additional Resources
https://webaudiodemos.appspot.com/pitchdetect/index.html
http://tonejs.github.io/
https://github.com/Tonejs/MidiConvert
https://p5js.org/


##Design Overview
The Tuner project is an attempt to create a simple to use music making utilitiy, as accessable and commonplace as a regular guitar tuner. Whistling a tune into Tuner will let you not only save the sound to listen to later, but also convert that into notation: MIDI data that can be opened in almost all popular music making software.

This opens up music composition to those who have musical ideas but don't know musical notation or theory. There are some existing utilities that offer this functionality, but most are more technical and incorporated into proprietary software. Our current application is a start of something that is more accessable to those who would need the functionality the most: musical non-professionals.

The second, broader design goal of this existing code base is to serve as a template for audio analysis web apps. We are using the existing web audio demo as a proven audio analysis base. p5.sound is used for easy mic access and audio saving capabilities, while the rest of p5 gives a common library for javascript creative coders to create visuals and interactions with. Tone.js, with the associated MidiConvert.js handles audio synthesis, musical syntax for timing and audio, and MIDI interpretation and authorship functionalities.

All of these libraries have been brought together in a code base that can serve as part example code and part boilerplate for javascript creative coding projects that involve musical audio analysis, visualization, and interaction.

##Contribution Guidelines
We are currently working on making this a more stable and feature complete application. If this code is useful to you, feel free to fork the project for your own purposes.

##Additional Credits
Many thanks to the original source and inspiration for the project:
https://webaudiodemos.appspot.com/pitchdetect/index.html
Chris Wilson, 2014

Also, many, *many* thanks to our professors, advisors and faculty for helping us along the way: Rune Madsen, Patrick Hebron, Yotam Mann, Justin Peake


#Licensing Information
We will also be using the MIT License.