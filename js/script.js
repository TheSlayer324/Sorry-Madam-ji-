console.log("Script loaded");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const gameArea = document.getElementById('game-area');
    const messageAreas = [
        document.getElementById('message-area-1'),
        document.getElementById('message-area-2'),
        document.getElementById('message-area-3'),
        document.getElementById('message-area-4'),
        document.getElementById('message-area-5')
    ];
    const gameContent = document.getElementById('game-content');
    const scoreElement = document.getElementById('score');
    const loveMessage = document.getElementById('love-message');
    let score = 0;

    let heartInterval;
    let messageIndex = 0;

    // Function to create a heart at a random position
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart', 'black-heart');
        
        // Random position within the game area
        const x = Math.random() * (gameArea.offsetWidth - 50);
        const y = Math.random() * (gameArea.offsetHeight - 50);

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        // Add click event listener
        heart.addEventListener('click', () => {
            scorePoint();
            heart.remove();  // Remove heart after clicking
        });

        gameArea.appendChild(heart);
    }

    // Function to display an apology message
    function displayMessage() {
        const messages = [
            "You are a melody, but I am tone-deaf. You are a dream but I can't sleep. You are a lighthouse but I am not lost at sea. So different, but I guess that's how love must be. Muahhhh.",
            "They talk about how beautiful flowers are but they haven't seen the flowers that bloom inside my head every time I catch a glimpse of yours.",
            "I love you so much that, even if you were fire, I'll burn in your flames. If you are fear, I'll be afraid. If you are exile, I'll walk alone. If you are mystery, I'll know unknowns. If you are abyss, I'll go and dive. If you are darkness, I'll close my eyes. If you are death, I shall not know life. Whatever you are, I will change myself according to you because losing you is the same as death.",
            "I am sorry for the silent hours, for the moments I let you down. Regret fills every passing minute, in every last and lonely sound. I promise to mend what I have broken, to cherish you in every way. Please forgive my thoughtless errors, and help me find a brighter day.",
            "Maaf bhi krdo mahrani ji, aap ignore krte ho to dil se bura lgta h!"
        ];

        if (messageIndex < messages.length) {
            const messageArea = messageAreas[messageIndex];
            messageArea.innerHTML = messages[messageIndex];
            messageArea.style.display = 'block';
            messageArea.style.position = 'fixed';
            messageArea.style.bottom = '0';
            messageArea.style.width = '100%';
            messageArea.style.textAlign = 'center';
            messageArea.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            messageArea.style.padding = '10px';
            messageArea.style.animation = 'fadeIn 1s ease-in-out, textEffect 1s infinite';
            messageIndex++;
        } else {
            showGame();
        }
    }

    // Function to show the game content
    function showGame() {
        document.getElementById('site-content').style.display = 'none';
        gameContent.style.display = 'block';
    }

    // Function to start generating hearts at regular intervals
    function startGame() {
        console.log("Game started");
        heartInterval = setInterval(createHeart, 500);  // Hearts will appear every 0.5 seconds
    }

    // Function to score points in the game
    function scorePoint() {
        score++;
        scoreElement.innerText = `Score: ${score}`;
        if (score >= 5) {
            loveMessage.classList.remove('hidden');
        }
    }

    // Start the game when the Enter key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            console.log("Enter key pressed");
            startGame();
        }
    });

    // Automatically display sorry text after 5 seconds
    setTimeout(() => {
        displayMessage();
    }, 5000);

    // Change the sorry message itself every 10 seconds
    setInterval(() => {
        if (messageIndex < messageAreas.length) {
            displayMessage();
        }
    }, 10000);

    // Add background image to the love letter
    const loveLetter = document.querySelector('.love-letter');
    loveLetter.style.backgroundImage = "url('https://media.tenor.com/v0FhxoZtDXsAAAAi/peach-goma-peach-and-goma.gif')";
    loveLetter.style.backgroundSize = 'cover';
    loveLetter.style.backgroundRepeat = 'no-repeat';
});
