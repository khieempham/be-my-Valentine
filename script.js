// Create an audio element
const audio = new Audio('until-i-found-you.mp3'); // Ensure correct file path

// Function to play the audio
function playAudio() {
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

    if (!noButton || !yesButton || !imageElement) {
        console.error("Required elements not found in the DOM.");
        return;
    }

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
    const nameElement = document.getElementById("name");
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const imageElement = document.getElementsByClassName("image")[0];

    if (nameElement) nameElement.remove();
    if (noButton) noButton.remove();
    if (yesButton) yesButton.remove();

    const audioElement = new Audio("./Minions Cheering.mp3"); // Ensure correct file format
    audioElement.preload = "auto";
    audioElement.play().catch(e => console.error("Audio playback failed:", e));

    if (imageElement) {
        imageElement.src = "images/dance.gif";
    }
}
