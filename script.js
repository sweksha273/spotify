console.log("Welcome to Spotify");
let songs= [
    {songname: "Alag Aasman", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "Alag Aasman", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
    {songname: "salam-e-ishq", filepath: "song/1.mp3", coverpath: "cover/1.jpg"},
]
let audioElement=new Audio('1.mp3');
//audioElement.play();
//handle play/pause click
masterPlay.addeventListner('click', ()=>{
    if (audioElement.paused || audioElement.currenttime<=0){
        audioElement.play();
    masterPlay.classlist.remove('fa-play-circle');
    masterPlay.classlist.add('fa-pause-circle');
}
else{
    audioElement.play();
    masterPlay.classlist.remove('fa-pause-circle');
    masterPlay.classlist.add('fa-play-circle');
}

})
//Listen to events
myprogressBar.addeventListner('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
})