var fs=require('file-system');
var midiconver=require('midiconvert');

//console.log(fs);
MidiConvert.load("./PPAP_Test.mid", function(midi){
    console.log(midi)
})