// Create an audio element
const audio = new Audio('until i found you - stephen sanchez, em beihold (sped uptiktok version) lyrics.mp3');

audio.preload = "auto"; // Preload the audio for smoother playback

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, adding event listeners');
    document.getElementById("no-button")?.addEventListener("click", handleNoButtonClick);
    document.getElementById("yes-button")?.addEventListener("click", handleYesButtonClick);
    
    document.body.addEventListener('click', () => {
        console.log('User interacted, playing audio...');
        playAudio();
    }, { once: true });
});

// Function to play the audio
function playAudio() {
    console.log('Attempting to play audio...');
    audio.play()
        .then(() => console.log('Audio is playing'))
        .catch(error => console.error('Error playing audio:', error));
}

// Handle "No" button text changes and GIF changes
let noButtonClicks = 0;
function handleNoButtonClick() {
    console.log(`No button clicked ${noButtonClicks + 1} times`);
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
        console.log('Final no-button click reached, enlarging Yes button');
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
    console.log('Yes button clicked');
    document.getElementById("name")?.remove();
    document.getElementById("no-button")?.remove();
    
    const audioElement = new Audio("Minions Cheering.mp3");
    audioElement.preload = "auto";
    audioElement.play()
        .then(() => console.log("Yes audio is playing"))
        .catch(e => console.error("Audio playback failed:", e));
    
    document.getElementsByClassName("image")[0].src = "images/dance.gif";
    document.getElementById("yes-button")?.remove();
}
