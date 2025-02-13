// Create an audio element for background music
const audio = new Audio("until i found you.mp3");
audio.preload = "auto";
audio.volume = 0.2;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("no-button").addEventListener("click", handleNoButtonClick);
    document.getElementById("yes-button").addEventListener("click", handleYesButtonClick);

    document.body.addEventListener("click", () => {
        playAudio();
    }, { once: true });
});

// Function to play the audio from 34 seconds
function playAudio() {
    audio.currentTime = 34;
    audio.play().catch(error => console.error("Error playing audio:", error));
}

// No button logic
let noButtonClicks = 0;
function handleNoButtonClick() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const imageElement = document.querySelector(".image");

    const messages = ["Are you sure?", "Chyouky please", "Don't do this to me :(", "Ur breaking my heart"];
    const gifs = ["images/happy_cat.gif", "images/sad_cat.gif", "images/crying_cat.gif"];

    if (noButtonClicks < messages.length) {
        noButton.textContent = messages[noButtonClicks];
    }

    if (noButtonClicks < gifs.length) {
        imageElement.src = gifs[noButtonClicks];
    }

    noButtonClicks++;

    if (noButtonClicks === messages.length) {
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "3rem";
    }
}

// Yes button logic
function handleYesButtonClick() {
    document.getElementById("name").remove();
    document.getElementById("question").remove();
    document.getElementById("no-button").remove();
    document.getElementById("yes-button").remove();

    const yesMessage = document.getElementById("yes-message");
    yesMessage.style.display = "block";

    const audioElement = new Audio("Minions Cheering.mp3");
    audioElement.preload = "auto";
    audioElement.play().catch(error => console.error("Audio playback failed:", error));

    document.querySelector(".image").src = "images/dance.gif";
}
