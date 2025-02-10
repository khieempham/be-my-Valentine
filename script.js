// Create an audio element
const audio = new Audio('until-i-found-you.mp3');

// Function to play the audio
function playAudio() {
    audio.load(); // Ensure the audio is loaded
    audio.play()
        .then(() => console.log('Audio is playing'))
        .catch(error => console.error('Error playing audio:', error));
}

// Function to pause the audio
function pauseAudio() {
    audio.pause();
}

// Function to stop the audio (resetting time to 0)
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

// Play audio after user interaction
window.addEventListener('load', () => {
    document.body.addEventListener('click', () => {
        playAudio();
    }, { once: true });
});

// Handle "No" button text changes and GIF changes
let noButtonClicks = 0;
function handleNoButtonClick() {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const imageElement = document.getElementsByClassName("image")[0];
    const messages = [
        "Are you sure?",
        "Chyouky please",
        "Don't do this to me:(",
        "Ur breaking my heart"
    ];
    const gifs = [
        "images/Happy Cat Sticker.gif",
        "images/Sad Cat GIF.gif",
        "images/Cat Crying GIF.gif"
    ];
    
    if (noButtonClicks < messages.length) {
        noButton.textContent = messages[noButtonClicks];
        if (noButtonClicks < gifs.length) {
            imageElement.src = gifs[noButtonClicks];
        }
        noButtonClicks++;
    }
    
    if (noButtonClicks === messages.length) {
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "3rem";
    }
}

// Handle "Yes" button click
function handleYesButtonClick() {
    document.getElementById("name")?.remove();
    document.getElementById("no-button")?.remove();
    
    const audioElement = new Audio("./Minions Cheering.mp3");
    audioElement.preload = "auto";
    audioElement.play().catch(e => console.error("Audio playback failed:", e));
    
    document.getElementsByClassName("image")[0].src = "images/dance.gif";
    document.getElementById("yes-button")?.remove();
}

// Add event listeners after DOM loads
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("no-button")?.addEventListener("click", handleNoButtonClick);
    document.getElementById("yes-button")?.addEventListener("click", handleYesButtonClick);
