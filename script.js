// Fade-in photos when scrolling

const photos = document.querySelectorAll(".gallery img");


window.addEventListener("scroll", () => {

    photos.forEach(photo => {

        const photoPosition = photo.getBoundingClientRect().top;

        const screenPosition = window.innerHeight - 100;


        if(photoPosition < screenPosition) {

            photo.classList.add("show");

        }

    });

});

function showSurprise(){

    document.getElementById("surpriseMessage").style.display = "block";

}

function playMusic() {

    let song = document.getElementById("song");

    song.play();

}