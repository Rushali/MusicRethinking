function getChords(incomingInformation) {

  console.log("I have been given " + incomingInformation + " chord.");

  if (incomingInformation == "C") {
    console.log(incomingInformation + " detected. This is part of a C Chord. Other notes include E and G.");
    console.log(incomingInformation + " detected. This is part of a Cm Chord. Other notes include #D/bE and G.");
    console.log(incomingInformation + " detected. This is part of a Cdim Chord. Other notes include #D/bE and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Caug Chord. Other notes include E and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Csus Chord. Other notes include F and G.");
    console.log(incomingInformation + " detected. This is part of a C2 Chord. Other notes include D, E and G.");
    console.log(incomingInformation + " detected. This is part of a C6 Chord. Other notes include E, G and A.");
    console.log(incomingInformation + " detected. This is part of a Cm6 Chord. Other notes include #D/bE, G and A.");
    console.log(incomingInformation + " detected. This is part of a CM7 Chord. Other notes include E, G and B.");
    console.log(incomingInformation + " detected. This is part of a C7 Chord. Other notes include E, G and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Cm7 Chord. Other notes include #D/bE, G and #A/bB.");
  } else if (incomingInformation == "Db/C#") {
    console.log(incomingInformation + " detected. This is part of a Db Chord. Other notes include F and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Dbm Chord. Other notes include E and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Dbdim Chord. Other notes include E and G.");
    console.log(incomingInformation + " detected. This is part of a Dbaug Chord. Other notes include F and A.");
    console.log(incomingInformation + " detected. This is part of a Dbsus Chord. Other notes include #F/bG and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Db2 Chord. Other notes include #D/bE, F and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Db6 Chord. Other notes include F, #G/bA and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Dbm6 Chord. Other notes include E, #G/bA and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a DbM7 Chord. Other notes include F, #G/bA and C.");
    console.log(incomingInformation + " detected. This is part of a Db7 Chord. Other notes include F, #G/bA and B.");
    console.log(incomingInformation + " detected. This is part of a Dbm7 Chord. Other notes include E, #G/bA and B.");
  } else if (incomingInformation == "D") {
    console.log(incomingInformation + " detected. This is part of a D Chord. Other notes include #F/bG and A.");
    console.log(incomingInformation + " detected. This is part of a Dm Chord. Other notes include F and A.");
    console.log(incomingInformation + " detected. This is part of a Ddim Chord. Other notes include F and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Daug Chord. Other notes include #F/bG and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Dsus Chord. Other notes include G and A.");
    console.log(incomingInformation + " detected. This is part of a D2 Chord. Other notes include E, F and A.");
    console.log(incomingInformation + " detected. This is part of a D6 Chord. Other notes include #F/bG, A and B.");
    console.log(incomingInformation + " detected. This is part of a Dm6 Chord. Other notes include F, A and B.");
    console.log(incomingInformation + " detected. This is part of a DM7 Chord. Other notes include #F/bG, A and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a D7 Chord. Other notes include #F/bG, A and C.");
    console.log(incomingInformation + " detected. This is part of a Dm7 Chord. Other notes include F, A and C.");
  } else if (incomingInformation == "Eb/D#") {
    console.log(incomingInformation + " detected. This is part of a Eb Chord. Other notes include G and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Ebm Chord. Other notes include #F/bG and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Ebdim Chord. Other notes include #F/bG and A.");
    console.log(incomingInformation + " detected. This is part of a Ebaug Chord. Other notes include G and B.");
    console.log(incomingInformation + " detected. This is part of a Ebsus Chord. Other notes include #G/bA and #A/B.");
    console.log(incomingInformation + " detected. This is part of a Eb2 Chord. Other notes include F, G and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Eb6 Chord. Other notes include G, #A/bB and C.");
    console.log(incomingInformation + " detected. This is part of a Ebm6 Chord. Other notes include #F/bG, #A/bB and C.");
    console.log(incomingInformation + " detected. This is part of a EbM7 Chord. Other notes include G, #A/bB and D.");
    console.log(incomingInformation + " detected. This is part of a Eb7 Chord. Other notes include G, #A/bB and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Ebm7 Chord. Other notes include #F/bG, #A/bB and #C/bD.");
  } else if (incomingInformation == "E") {
    console.log(incomingInformation + " detected. This is part of a E Chord. Other notes include #G/bA and B.");
    console.log(incomingInformation + " detected. This is part of a Em Chord. Other notes include G and B.");
    console.log(incomingInformation + " detected. This is part of a Edim Chord. Other notes include G and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a Eaug Chord. Other notes include #G/bA and C.");
    console.log(incomingInformation + " detected. This is part of a Esus Chord. Other notes include A and B.");
    console.log(incomingInformation + " detected. This is part of a E2 Chord. Other notes include #F/bG, #G/bA and B.");
    console.log(incomingInformation + " detected. This is part of a E6 Chord. Other notes include #G/bA, B and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Em6 Chord. Other notes include G, B and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a EM7 Chord. Other notes include #G/bA, B and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a E7 Chord. Other notes include #G/bA, B and D.");
    console.log(incomingInformation + " detected. This is part of a Em7 Chord. Other notes include G, B and D.");
  } else if (incomingInformation == "F") {
    console.log(incomingInformation + " detected. This is part of a F Chord. Other notes include A and C.");
    console.log(incomingInformation + " detected. This is part of a Fm Chord. Other notes include #G/bA and C.");
    console.log(incomingInformation + " detected. This is part of a Fdim Chord. Other notes include #G/bA and B.");
    console.log(incomingInformation + " detected. This is part of a Faug Chord. Other notes include A and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Fsus Chord. Other notes include #A/bB and C.");
    console.log(incomingInformation + " detected. This is part of a F2 Chord. Other notes include G, A and C.");
    console.log(incomingInformation + " detected. This is part of a F6 Chord. Other notes include A, C and D.");
    console.log(incomingInformation + " detected. This is part of a Fm6 Chord. Other notes include #G/bA, C and D.");
    console.log(incomingInformation + " detected. This is part of a FM7 Chord. Other notes include A, C and E.");
    console.log(incomingInformation + " detected. This is part of a F7 Chord. Other notes include A, C and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Fm7 Chord. Other notes include #G/bA, C and #D/bE.");
  } else if (incomingInformation == "Gb/F#") {
    console.log(incomingInformation + " detected. This is part of a Gb Chord. Other notes include #A/bB and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Gbm Chord. Other notes include A and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Gbdim Chord. Other notes include A and C.");
    console.log(incomingInformation + " detected. This is part of a Gbaug Chord. Other notes include #A/bB and D.");
    console.log(incomingInformation + " detected. This is part of a Gbsus Chord. Other notes include B and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Gb2 Chord. Other notes include #G/bA, #A/bB and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Gb6 Chord. Other notes include #A/bB, #C/bD and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Gbm6 Chord. Other notes include A, #C/bD and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a GbM7 Chord. Other notes include #A/bB, #C/bD and F.");
    console.log(incomingInformation + " detected. This is part of a Gb7 Chord. Other notes include #A/bB, #C/bD and E.");
    console.log(incomingInformation + " detected. This is part of a Gbm7 Chord. Other notes include A, #C/bD and E.");
  } else if (incomingInformation == "G") {
    console.log(incomingInformation + " detected. This is part of a G Chord. Other notes include B and D.");
    console.log(incomingInformation + " detected. This is part of a Gm Chord. Other notes include #A/bB and D.");
    console.log(incomingInformation + " detected. This is part of a Gdim Chord. Other notes include #A/bB and #C/bD.");
    console.log(incomingInformation + " detected. This is part of a Gaug Chord. Other notes include B and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Gsus Chord. Other notes include C and D.");
    console.log(incomingInformation + " detected. This is part of a G2 Chord. Other notes include A, B and D.");
    console.log(incomingInformation + " detected. This is part of a G6 Chord. Other notes include B, D and E.");
    console.log(incomingInformation + " detected. This is part of a Gm6 Chord. Other notes include #A/bB, D and E.");
    console.log(incomingInformation + " detected. This is part of a GM7 Chord. Other notes include B, D and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a G7 Chord. Other notes include B, D and F.");
    console.log(incomingInformation + " detected. This is part of a Gm7 Chord. Other notes include #A/bB, D and F.");
  } else if (incomingInformation == "Ab/G#") {
    console.log(incomingInformation + " detected. This is part of a Ab Chord. Other notes include C and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Abm Chord. Other notes include B and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Abdim Chord. Other notes include B and D.");
    console.log(incomingInformation + " detected. This is part of a Abaug Chord. Other notes include C and E.");
    console.log(incomingInformation + " detected. This is part of a Absus Chord. Other notes include #C/bD and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Ab2 Chord. Other notes include #A/bB, C and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Ab6 Chord. Other notes include C, #D/bE and F.");
    console.log(incomingInformation + " detected. This is part of a Abm6 Chord. Other notes include B, #D/bE and F.");
    console.log(incomingInformation + " detected. This is part of a AbM7 Chord. Other notes include C, #D/bE and G.");
    console.log(incomingInformation + " detected. This is part of a Ab7 Chord. Other notes include C, #D/bE and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Abm7 Chord. Other notes include B, #D/bE and #F/bG.");
  } else if (incomingInformation == "A") {
    console.log(incomingInformation + " detected. This is part of a A Chord. Other notes include #C/bD and E.");
    console.log(incomingInformation + " detected. This is part of a Am Chord. Other notes include C and E.");
    console.log(incomingInformation + " detected. This is part of a Adim Chord. Other notes include C and #D/bE.");
    console.log(incomingInformation + " detected. This is part of a Aaug Chord. Other notes include #C/bD and F.");
    console.log(incomingInformation + " detected. This is part of a Asus Chord. Other notes include D and E.");
    console.log(incomingInformation + " detected. This is part of a A2 Chord. Other notes include B, #C/bD and E.");
    console.log(incomingInformation + " detected. This is part of a A6 Chord. Other notes include #C/bD, E and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Am6 Chord. Other notes include C, E and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a AM7 Chord. Other notes include #C/bD, E and G.");
    console.log(incomingInformation + " detected. This is part of a A7 Chord. Other notes include #C/bD, E and G.");
    console.log(incomingInformation + " detected. This is part of a Am7 Chord. Other notes include C, E and G.");
  } else if (incomingInformation == "Bb/A#") {
    console.log(incomingInformation + " detected. This is part of a Bb Chord. Other notes include D and F.");
    console.log(incomingInformation + " detected. This is part of a Bbm Chord. Other notes include #C/bD and F.");
    console.log(incomingInformation + " detected. This is part of a Bbdim Chord. Other notes include #C/bD and E.");
    console.log(incomingInformation + " detected. This is part of a Bbaug Chord. Other notes include D and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Bbsus Chord. Other notes include #D/bE and F.");
    console.log(incomingInformation + " detected. This is part of a Bb2 Chord. Other notes include C, D and F.");
    console.log(incomingInformation + " detected. This is part of a Bb6 Chord. Other notes include D, F and G.");
    console.log(incomingInformation + " detected. This is part of a Bbm6 Chord. Other notes include #C/bD, F and G.");
    console.log(incomingInformation + " detected. This is part of a BbM7 Chord. Other notes include D, F and A.");
    console.log(incomingInformation + " detected. This is part of a Bb7 Chord. Other notes include D, F and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Bbm7 Chord. Other notes include #C/bD, F and #G/bA.");
  } else if (incomingInformation == "B") {
    console.log(incomingInformation + " detected. This is part of a B Chord. Other notes include #D/bE and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Bm Chord. Other notes include D and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a Bdim Chord. Other notes include D and F.");
    console.log(incomingInformation + " detected. This is part of a Baug Chord. Other notes include #D/bE and G.");
    console.log(incomingInformation + " detected. This is part of a Bsus Chord. Other notes include E and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a B2 Chord. Other notes include #C/bD, #D/bE and #F/bG.");
    console.log(incomingInformation + " detected. This is part of a B6 Chord. Other notes include #D/bE, #F/bG and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a Bm6 Chord. Other notes include D, #F/bG and #G/bA.");
    console.log(incomingInformation + " detected. This is part of a BM7 Chord. Other notes include #D/bE, #F/bG and #A/bB.");
    console.log(incomingInformation + " detected. This is part of a B7 Chord. Other notes include #D/bE, #F/bG and A.");
    console.log(incomingInformation + " detected. This is part of a Bm7 Chord. Other notes include D, #F/bG and A.");

}
