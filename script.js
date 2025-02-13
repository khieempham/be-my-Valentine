// Create an audio element
const audio = new Audio('until i found you - stephen sanchez, em beihold (sped uptiktok version) lyrics.mp3');

audio.preload = "auto"; // Preload the audio for smoother playback
audio.volume = 0.2; // Set volume to 50%

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, adding event listeners');
    document.getElementById("no-button")?.addEventListener("click", handleNoButtonClick);
    document.getElementById("yes-button")?.addEventListener("click", handleYesButtonClick);
    
    document.body.addEventListener('click', () => {
        console.log('User interacted, playing audio...');
        playAudio();
    }, { once: true });
});

// Function to play the audio starting from 34 seconds
function playAudio() {
    console.log('Attempting to play audio from 34 seconds...');
    audio.currentTime = 34; // Start at 34th second
    audio.play()
        .then(() => console.log('Audio is playing from 34s'))
        .catch(error => console.error('Error playing audio:', error));
}

// Handle "No" button text changes and GIF changes
let noButtonClicks = 0;

function handleNoButtonClick() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const imageElement = document.querySelector(".image"); // Selects the correct image

    const messages = [
        "Are you sure?",
        "Chyouky please",
        "Don't do this to me :(",
        "Ur breaking my heart"
    ];
    const gifs = [
        "images/Happy Cat Sticker.gif",
        "images/Sad Cat GIF.gif",
        "images/Cat Crying GIF.gif"
    ];

    if (noButtonClicks < messages.length) {
        noButton.textContent = messages[noButtonClicks]; // Update button text
    }

    if (noButtonClicks < gifs.length) {
        imageElement.src = gifs[noButtonClicks]; // Update GIF
    }

    noButtonClicks++;

    // "Yes" button enlarges ONLY after "Ur breaking my heart" is clicked
    if (noButtonClicks === messages.length) {
        setTimeout(() => {
            yesButton.style.position = "fixed";
            yesButton.style.top = "0";
            yesButton.style.left = "0";
            yesButton.style.width = "100vw";
            yesButton.style.height = "100vh";
            yesButton.style.fontSize = "3rem";
        }, 500); // Short delay to let "Ur breaking my heart" be seen
    }
}
// Handle "Yes" button click
function handleYesButtonClick() {
    console.log('Yes button clicked');
    document.getElementById("name")?.remove();
    document.getElementById("no-button")?.remove();
    document.getElementById("yes-button")?.remove();
    
    const audioElement = new Audio("Minions Cheering.mp4"); // Ensure correct file format and extension
    audioElement.preload = "auto";
    audioElement.play()
        .then(() => console.log("Yes audio is playing"))
        .catch(e => console.error("Audio playback failed:", e));
    
    document.getElementsByClassName("image")[0].src = "images/dance.gif";
    
    // Show the "Yes" message
    const yesMessage = document.getElementById("yes-message");
    if (yesMessage) {
        yesMessage.style.display = "block";
    }
}
