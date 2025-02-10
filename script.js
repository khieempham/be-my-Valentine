// Create an audio element
const audio = new Audio('until-i-found-you.mp3'); // Updated file name

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
    const noMessage = document.getElementById("no-message");

    if (!noButton || !yesButton || !imageElement || !noMessage) {
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

    // Play the "No" audio
    audio.play()
        .then(() => console.log("No audio is playing"))
        .catch(e => console.error("No audio playback failed:", e));

    // Show the "No" message
    noMessage.style.display = "block";
}

// Handle "Yes" button click
function handleYesButtonClick() {
    const nameElement = document.getElementById("name");
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const imageElement = document.getElementsByClassName("image")[0];
    const yesMessage = document.getElementById("yes-message");

    if (nameElement) nameElement.remove();
    if (noButton) noButton.remove();
    if (yesButton) yesButton.remove();

    // Play the "Yes" audio
    const audioElement = new Audio("./Minions Cheering.mp3"); // Ensure correct file format
    audioElement.preload = "auto";
    audioElement.play()
        .then(() => console.log("Yes audio is playing"))
        .catch(e => console.error("Yes audio playback failed:", e));

    if (imageElement) {
        imageElement.src = "images/dance.gif";
    }

    // Show the "Yes" message
    if (yesMessage) {
        yesMessage.style.display = "block";
    }
}

// Attach event listeners to buttons
document.getElementById("yes-button").addEventListener("click", handleYesButtonClick);
document.getElementById("no-button").addEventListener("click", handleNoButtonClick);
