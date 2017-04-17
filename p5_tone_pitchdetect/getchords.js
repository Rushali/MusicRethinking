var responseArray = [];

var predElem = document.getElementById("prechord");

// var notefrom ;

// if(document.getElementById("note") != null){
//      notefrom = document.getElementById("note");
//var incomingInformation = note ;

function getChords(incomingInformation) {



  console.log("I have been given " + incomingInformation + " chord.");
  

  responseArray[0] = "I have been given " + incomingInformation + " chord.";

  if (incomingInformation == "C") {
    responseArray[0] = incomingInformation + " detected. This is part of a C Chord. Other notes include E and G.";
    responseArray[1] = incomingInformation + " detected. This is part of a Cm Chord. Other notes include #D/bE and G.";
    responseArray[2] = incomingInformation + " detected. This is part of a Cdim Chord. Other notes include #D/bE and #F/bG.";
    responseArray[3] = incomingInformation + " detected. This is part of a Caug Chord. Other notes include E and #G/bA.";
    responseArray[4] = incomingInformation + " detected. This is part of a Csus Chord. Other notes include F and G.";
    responseArray[5] = incomingInformation + " detected. This is part of a C2 Chord. Other notes include D, E and G.";
    responseArray[6] = incomingInformation + " detected. This is part of a C6 Chord. Other notes include E, G and A.";
    responseArray[7] = incomingInformation + " detected. This is part of a Cm6 Chord. Other notes include #D/bE, G and A.";
    responseArray[8] = incomingInformation + " detected. This is part of a CM7 Chord. Other notes include E, G and B.";
    responseArray[9] = incomingInformation + " detected. This is part of a C7 Chord. Other notes include E, G and #A/bB.";
    responseArray[10] = incomingInformation + " detected. This is part of a Cm7 Chord. Other notes include #D/bE, G and #A/bB.";
  } else if (incomingInformation == "C#") {
    responseArray[0] = incomingInformation + " detected. This is part of a Db Chord. Other notes include F and #G/bA.";
    responseArray[1] = incomingInformation + " detected. This is part of a Dbm Chord. Other notes include E and #G/bA.";
    responseArray[2] = incomingInformation + " detected. This is part of a Dbdim Chord. Other notes include E and G.";
    responseArray[3] = incomingInformation + " detected. This is part of a Dbaug Chord. Other notes include F and A.";
    responseArray[4] = incomingInformation + " detected. This is part of a Dbsus Chord. Other notes include #F/bG and #G/bA.";
    responseArray[5] = incomingInformation + " detected. This is part of a Db2 Chord. Other notes include #D/bE, F and #G/bA.";
    responseArray[6] = incomingInformation + " detected. This is part of a Db6 Chord. Other notes include F, #G/bA and #A/bB.";
    responseArray[7] = incomingInformation + " detected. This is part of a Dbm6 Chord. Other notes include E, #G/bA and #A/bB.";
    responseArray[8] = incomingInformation + " detected. This is part of a DbM7 Chord. Other notes include F, #G/bA and C.";
    responseArray[9] = incomingInformation + " detected. This is part of a Db7 Chord. Other notes include F, #G/bA and B.";
    responseArray[10] =incomingInformation + " detected. This is part of a Dbm7 Chord. Other notes include E, #G/bA and B.";
  } else if (incomingInformation == "D") {
    responseArray[0] = incomingInformation + " detected. This is part of a D Chord. Other notes include #F/bG and A.";
    responseArray[1] = incomingInformation + " detected. This is part of a Dm Chord. Other notes include F and A.";
    responseArray[2] = incomingInformation + " detected. This is part of a Ddim Chord. Other notes include F and #G/bA.";
    responseArray[3] = incomingInformation + " detected. This is part of a Daug Chord. Other notes include #F/bG and #A/bB.";
    responseArray[4] = incomingInformation + " detected. This is part of a Dsus Chord. Other notes include G and A.";
    responseArray[5] = incomingInformation + " detected. This is part of a D2 Chord. Other notes include E, F and A.";
    responseArray[6] = incomingInformation + " detected. This is part of a D6 Chord. Other notes include #F/bG, A and B.";
    responseArray[7] = incomingInformation + " detected. This is part of a Dm6 Chord. Other notes include F, A and B.";
    responseArray[8] = incomingInformation + " detected. This is part of a DM7 Chord. Other notes include #F/bG, A and #C/bD.";
    responseArray[9] = incomingInformation + " detected. This is part of a D7 Chord. Other notes include #F/bG, A and C.";
    responseArray[10] =incomingInformation + " detected. This is part of a Dm7 Chord. Other notes include F, A and C.";
  } else if (incomingInformation == "D#") {
    responseArray[0] = incomingInformation + " detected. This is part of a Eb Chord. Other notes include G and #A/bB.";
    responseArray[1] = incomingInformation + " detected. This is part of a Ebm Chord. Other notes include #F/bG and #A/bB.";
    responseArray[2] = incomingInformation + " detected. This is part of a Ebdim Chord. Other notes include #F/bG and A.";
    responseArray[3] = incomingInformation + " detected. This is part of a Ebaug Chord. Other notes include G and B.";
    responseArray[4] = incomingInformation + " detected. This is part of a Ebsus Chord. Other notes include #G/bA and #A/B.";
    responseArray[5] = incomingInformation + " detected. This is part of a Eb2 Chord. Other notes include F, G and #A/bB.";
    responseArray[6] = incomingInformation + " detected. This is part of a Eb6 Chord. Other notes include G, #A/bB and C.";
    responseArray[7] = incomingInformation + " detected. This is part of a Ebm6 Chord. Other notes include #F/bG, #A/bB and C.";
    responseArray[8] = incomingInformation + " detected. This is part of a EbM7 Chord. Other notes include G, #A/bB and D.";
    responseArray[9] = incomingInformation + " detected. This is part of a Eb7 Chord. Other notes include G, #A/bB and #C/bD.";
    responseArray[10] =incomingInformation + " detected. This is part of a Ebm7 Chord. Other notes include #F/bG, #A/bB and #C/bD.";
  } else if (incomingInformation == "E") {
    responseArray[0] = incomingInformation + " detected. This is part of a E Chord. Other notes include #G/bA and B.";
    responseArray[1] = incomingInformation + " detected. This is part of a Em Chord. Other notes include G and B.";
    responseArray[2] = incomingInformation + " detected. This is part of a Edim Chord. Other notes include G and #A/bB.";
    responseArray[3] = incomingInformation + " detected. This is part of a Eaug Chord. Other notes include #G/bA and C.";
    responseArray[4] = incomingInformation + " detected. This is part of a Esus Chord. Other notes include A and B.";
    responseArray[5] = incomingInformation + " detected. This is part of a E2 Chord. Other notes include #F/bG, #G/bA and B.";
    responseArray[6] = incomingInformation + " detected. This is part of a E6 Chord. Other notes include #G/bA, B and #C/bD.";
    responseArray[7] = incomingInformation + " detected. This is part of a Em6 Chord. Other notes include G, B and #C/bD.";
    responseArray[8] = incomingInformation + " detected. This is part of a EM7 Chord. Other notes include #G/bA, B and #D/bE.";
    responseArray[9] = incomingInformation + " detected. This is part of a E7 Chord. Other notes include #G/bA, B and D.";
    responseArray[10] =incomingInformation + " detected. This is part of a Em7 Chord. Other notes include G, B and D.";
  } else if (incomingInformation == "F") {
    responseArray[0] = incomingInformation + " detected. This is part of a F Chord. Other notes include A and C.";
    responseArray[1] = incomingInformation + " detected. This is part of a Fm Chord. Other notes include #G/bA and C.";
    responseArray[2] = incomingInformation + " detected. This is part of a Fdim Chord. Other notes include #G/bA and B.";
    responseArray[3] = incomingInformation + " detected. This is part of a Faug Chord. Other notes include A and #C/bD.";
    responseArray[4] = incomingInformation + " detected. This is part of a Fsus Chord. Other notes include #A/bB and C.";
    responseArray[5] = incomingInformation + " detected. This is part of a F2 Chord. Other notes include G, A and C.";
    responseArray[6] = incomingInformation + " detected. This is part of a F6 Chord. Other notes include A, C and D.";
    responseArray[7] = incomingInformation + " detected. This is part of a Fm6 Chord. Other notes include #G/bA, C and D.";
    responseArray[8] = incomingInformation + " detected. This is part of a FM7 Chord. Other notes include A, C and E.";
    responseArray[9] = incomingInformation + " detected. This is part of a F7 Chord. Other notes include A, C and #D/bE.";
    responseArray[10] =incomingInformation + " detected. This is part of a Fm7 Chord. Other notes include #G/bA, C and #D/bE.";
  } else if (incomingInformation == "F#") {
    responseArray[0] = incomingInformation + " detected. This is part of a Gb Chord. Other notes include #A/bB and #C/bD.";
    responseArray[1] = incomingInformation + " detected. This is part of a Gbm Chord. Other notes include A and #C/bD.";
    responseArray[2] = incomingInformation + " detected. This is part of a Gbdim Chord. Other notes include A and C.";
    responseArray[3] = incomingInformation + " detected. This is part of a Gbaug Chord. Other notes include #A/bB and D.";
    responseArray[4] = incomingInformation + " detected. This is part of a Gbsus Chord. Other notes include B and #C/bD.";
    responseArray[5] = incomingInformation + " detected. This is part of a Gb2 Chord. Other notes include #G/bA, #A/bB and #C/bD.";
    responseArray[6] = incomingInformation + " detected. This is part of a Gb6 Chord. Other notes include #A/bB, #C/bD and #D/bE.";
    responseArray[7] = incomingInformation + " detected. This is part of a Gbm6 Chord. Other notes include A, #C/bD and #D/bE.";
    responseArray[8] = incomingInformation + " detected. This is part of a GbM7 Chord. Other notes include #A/bB, #C/bD and F.";
    responseArray[9] = incomingInformation + " detected. This is part of a Gb7 Chord. Other notes include #A/bB, #C/bD and E.";
    responseArray[10] =incomingInformation + " detected. This is part of a Gbm7 Chord. Other notes include A, #C/bD and E.";
  } else if (incomingInformation == "G") {
    responseArray[0] = incomingInformation + " detected. This is part of a G Chord. Other notes include B and D.";
    responseArray[1] = incomingInformation + " detected. This is part of a Gm Chord. Other notes include #A/bB and D.";
    responseArray[2] = incomingInformation + " detected. This is part of a Gdim Chord. Other notes include #A/bB and #C/bD.";
    responseArray[3] = incomingInformation + " detected. This is part of a Gaug Chord. Other notes include B and #D/bE.";
    responseArray[4] = incomingInformation + " detected. This is part of a Gsus Chord. Other notes include C and D.";
    responseArray[5] = incomingInformation + " detected. This is part of a G2 Chord. Other notes include A, B and D.";
    responseArray[6] = incomingInformation + " detected. This is part of a G6 Chord. Other notes include B, D and E.";
    responseArray[7] = incomingInformation + " detected. This is part of a Gm6 Chord. Other notes include #A/bB, D and E.";
    responseArray[8] = incomingInformation + " detected. This is part of a GM7 Chord. Other notes include B, D and #F/bG.";
    responseArray[9] = incomingInformation + " detected. This is part of a G7 Chord. Other notes include B, D and F.";
    responseArray[10] =incomingInformation + " detected. This is part of a Gm7 Chord. Other notes include #A/bB, D and F.";
  } else if (incomingInformation == "G#") {
    responseArray[0] = incomingInformation + " detected. This is part of a Ab Chord. Other notes include C and #D/bE.";
    responseArray[1] = incomingInformation + " detected. This is part of a Abm Chord. Other notes include B and #D/bE.";
    responseArray[2] = incomingInformation + " detected. This is part of a Abdim Chord. Other notes include B and D.";
    responseArray[3] = incomingInformation + " detected. This is part of a Abaug Chord. Other notes include C and E.";
    responseArray[4] = incomingInformation + " detected. This is part of a Absus Chord. Other notes include #C/bD and #D/bE.";
    responseArray[5] = incomingInformation + " detected. This is part of a Ab2 Chord. Other notes include #A/bB, C and #D/bE.";
    responseArray[6] = incomingInformation + " detected. This is part of a Ab6 Chord. Other notes include C, #D/bE and F.";
    responseArray[7] = incomingInformation + " detected. This is part of a Abm6 Chord. Other notes include B, #D/bE and F.";
    responseArray[8] = incomingInformation + " detected. This is part of a AbM7 Chord. Other notes include C, #D/bE and G.";
    responseArray[9] = incomingInformation + " detected. This is part of a Ab7 Chord. Other notes include C, #D/bE and #F/bG.";
    responseArray[10] =incomingInformation + " detected. This is part of a Abm7 Chord. Other notes include B, #D/bE and #F/bG.";
  } else if (incomingInformation == "A") {
    responseArray[0] = incomingInformation + " detected. This is part of a A Chord. Other notes include #C/bD and E.";
    responseArray[1] = incomingInformation + " detected. This is part of a Am Chord. Other notes include C and E.";
    responseArray[2] = incomingInformation + " detected. This is part of a Adim Chord. Other notes include C and #D/bE.";
    responseArray[3] = incomingInformation + " detected. This is part of a Aaug Chord. Other notes include #C/bD and F.";
    responseArray[4] = incomingInformation + " detected. This is part of a Asus Chord. Other notes include D and E.";
    responseArray[5] = incomingInformation + " detected. This is part of a A2 Chord. Other notes include B, #C/bD and E.";
    responseArray[6] = incomingInformation + " detected. This is part of a A6 Chord. Other notes include #C/bD, E and #F/bG.";
    responseArray[7] = incomingInformation + " detected. This is part of a Am6 Chord. Other notes include C, E and #F/bG.";
    responseArray[8] = incomingInformation + " detected. This is part of a AM7 Chord. Other notes include #C/bD, E and G.";
    responseArray[9] = incomingInformation + " detected. This is part of a A7 Chord. Other notes include #C/bD, E and G.";
    responseArray[10] =incomingInformation + " detected. This is part of a Am7 Chord. Other notes include C, E and G.";
  } else if (incomingInformation == "A#") {
    responseArray[0] = incomingInformation + " detected. This is part of a Bb Chord. Other notes include D and F.";
    responseArray[1] = incomingInformation + " detected. This is part of a Bbm Chord. Other notes include #C/bD and F.";
    responseArray[2] = incomingInformation + " detected. This is part of a Bbdim Chord. Other notes include #C/bD and E.";
    responseArray[3] = incomingInformation + " detected. This is part of a Bbaug Chord. Other notes include D and #F/bG.";
    responseArray[4] = incomingInformation + " detected. This is part of a Bbsus Chord. Other notes include #D/bE and F.";
    responseArray[5] = incomingInformation + " detected. This is part of a Bb2 Chord. Other notes include C, D and F.";
    responseArray[6] = incomingInformation + " detected. This is part of a Bb6 Chord. Other notes include D, F and G.";
    responseArray[7] = incomingInformation + " detected. This is part of a Bbm6 Chord. Other notes include #C/bD, F and G.";
    responseArray[8] = incomingInformation + " detected. This is part of a BbM7 Chord. Other notes include D, F and A.";
    responseArray[9] = incomingInformation + " detected. This is part of a Bb7 Chord. Other notes include D, F and #G/bA.";
    responseArray[10] =incomingInformation + " detected. This is part of a Bbm7 Chord. Other notes include #C/bD, F and #G/bA.";  
  } else if (incomingInformation == "B") {
    responseArray[0] = incomingInformation + " detected. This is part of a B Chord. Other notes include #D/bE and #F/bG.";
    responseArray[1] = incomingInformation + " detected. This is part of a Bm Chord. Other notes include D and #F/bG.";
    responseArray[2] = incomingInformation + " detected. This is part of a Bdim Chord. Other notes include D and F.";
    responseArray[3] = incomingInformation + " detected. This is part of a Baug Chord. Other notes include #D/bE and G.";
    responseArray[4] = incomingInformation + " detected. This is part of a Bsus Chord. Other notes include E and #F/bG.";
    responseArray[5] = incomingInformation + " detected. This is part of a B2 Chord. Other notes include #C/bD, #D/bE and #F/bG.";
    responseArray[6] = incomingInformation + " detected. This is part of a B6 Chord. Other notes include #D/bE, #F/bG and #G/bA.";
    responseArray[7] = incomingInformation + " detected. This is part of a Bm6 Chord. Other notes include D, #F/bG and #G/bA.";
    responseArray[8] = incomingInformation + " detected. This is part of a BM7 Chord. Other notes include #D/bE, #F/bG and #A/bB.";
    responseArray[9] = incomingInformation + " detected. This is part of a B7 Chord. Other notes include #D/bE, #F/bG and A.";
    responseArray[10] =incomingInformation + " detected. This is part of a Bm7 Chord. Other notes include D, #F/bG and A.";
  }


  return  responseArray;
}

function majorchord() {
    document.getElementById("prechord").innerHTML = responseArray[0];


}


function minorchord() {
document.getElementById("prechord").innerHTML = responseArray[1];


}

function randomchord() {

for(var i = 2;i<11;i++){
document.getElementById("prechord").innerHTML = responseArray[i];
}

  return  responseArray;
}