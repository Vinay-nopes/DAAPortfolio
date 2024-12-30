const text = "ALGORITHM COURSE PROJECT"; // The text to display
const typingText = document.getElementById("typingText");

let index = 0;

function typeLetter() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(typeLetter, 200); // Delay between letters
    } else {
        // Pause before resetting
        setTimeout(() => {
            typingText.textContent = ""; // Clear the text
            index = 0; // Reset index
            typeLetter(); // Restart typing effect
        }, 1000); // Pause for 1 second after finishing
    }
}

// Start the typing effect on page load
window.onload = typeLetter;
