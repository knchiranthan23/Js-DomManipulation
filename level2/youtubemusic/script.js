var arr = [
    { songName: "Dheera Dheera", url: "./songs/Dheera Dheera.mp3", img: "./images/Dheera.png" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")



var audio = new Audio()


function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
    })
    allSongs.innerHTML = clutter

}
var selectedSong = 0
function loadSelectedSong() {
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}
mainFunction()
loadSelectedSong()

allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.id
    loadSelectedSong()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        audio.pause()
        flag = 0
    }
})


forward.addEventListener("click", function () {
    if (selectedSong < arr.length - 1) {
        selectedSong++;
        loadSelectedSong();
        audio.play();
        backward.style.opacity = 1;
    }
    forward.style.opacity = selectedSong === arr.length - 1 ? 0.4 : 1;
});

backward.addEventListener("click", function () {
    if (selectedSong > 0) {
        selectedSong--;
        loadSelectedSong();
        audio.play();
        forward.style.opacity = 1;
    }
    backward.style.opacity = selectedSong === 0 ? 0.4 : 1;
});
