document.addEventListener("DOMContentLoaded", () => {
    const leaf = document.getElementById("leaf");
    const switchButton = document.getElementById("switch");
    const lift = document.getElementById("lift");
    const powerCord = document.getElementById("power-cord");
    const toxic = document.getElementById("toxic");
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");

    // Added for the interactive book
    const book = document.getElementById("book");
    const paperContainer = document.getElementById("paper-container");
    const closePaper = document.getElementById("close-paper");

    // Instead of a one‑time flag, use a flag that resets when no player is colliding.
    let bookAvailable = true;

    // Game state
    let isPowerOn = false;
    let isLeafCollected = false;
    let puzzleSolved = false;

    const players = {
        player1: { element: player1, x: 200, y: 350, velocityY: 0, isJumping: false, onPlatform: false },
        player2: { element: player2, x: 250, y: 350, velocityY: 0, isJumping: false, onPlatform: false }
    };

    const gravity = 1;
    const groundY = 710;
    const jumpStrength = -9.50;
    const moveSpeed = 1.50;
    const maxFallSpeed = 3;

    // Platforms
    const platforms = [
        { x: 600, y: 705, width: 170, height: 4 },
        { x: 500, y: 660, width: 100, height: 4 },
        { x: 475, y: 660, width: 45, height: 4 },
        { x: 395, y: 660, width: 25, height: 4 },
        { x: 889, y: 730, width: 51, height: 12 },
        { x: 912, y: 499, width: 49, height: 14 },
        { x: 952, y: 664, width: 44, height: 14 },
        { x: 980, y: 638, width: 31, height: 14 },
        { x: 912, y: 695, width: 14, height: 49 },
        { x: 950, y: 673, width: 14, height: 45 },
        { x: 980, y: 634, width: 14, height: 42 },
        { x: 1005, y: 660, width: 49, height: 7 },
        { x: 453, y: 705, width: 1, height: 0.20 },
        { x: 359, y: 557, width: 430, height: 4 },
        { x: 858, y: 557, width: 220, height: 4 }
    ];

    player1.style.display = "block";
    player2.style.display = "block";

    // The puzzle container
    const puzzleContainer = document.getElementById("puzzle-container");
    puzzleContainer.style.display = "none";

    // Collision detection for the power switch
    function checkSwitchCollision(player) {
        let playerRect = player.element.getBoundingClientRect();
        let switchRect = switchButton.getBoundingClientRect();
        return (
            playerRect.left < switchRect.right &&
            playerRect.right > switchRect.left &&
            playerRect.top < switchRect.bottom &&
            playerRect.bottom > switchRect.top
        );
    }

    // Power Activation Handling via collision
    function togglePower() {
        isPowerOn = true;
        switchButton.src = "assets/power_on.png";
        powerCord.src = "assets/cord_on.png";
        lift.src = "assets/lift_on.png";
        alert(" Power Restored! The Lift is Now Working!");
    }

    // Collision detection for the book
    function checkBookCollision(player) {
        let playerRect = player.element.getBoundingClientRect();
        let bookRect = book.getBoundingClientRect();
        return (
            playerRect.left < bookRect.right &&
            playerRect.right > bookRect.left &&
            playerRect.top < bookRect.bottom &&
            playerRect.bottom > bookRect.top
        );
    }

    // Close Paper Functionality
    closePaper.addEventListener("click", () => {
        paperContainer.style.display = "none";
        // Do not permanently disable the book overlay
    });

    // Player Controls
    const keys = {
        ArrowLeft: false, ArrowRight: false, ArrowUp: false,
        a: false, d: false, w: false
    };

    document.addEventListener("keydown", (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
        }
    });
    document.addEventListener("keyup", (e) => {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
        }
    });

    // First floor Puzzle
    // Assumes your HTML includes drop zones (.target) and draggable color blocks (.color-block)
    const dropZones = document.querySelectorAll(".target");
    const colors = document.querySelectorAll(".color-block");

    const correctOrder = ["yellow", "green", "red", "blue"];
    let currentOrder = [];

    colors.forEach(color => {
        color.setAttribute("draggable", true);
        color.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text", e.target.dataset.color);
        });
    });

    dropZones.forEach((zone, index) => {
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
        });
        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            const colorName = e.dataTransfer.getData("text");
            if (!currentOrder.includes(colorName)) {
                zone.style.background = colorName;
                currentOrder[index] = colorName;
                checkPuzzleSolution();
            }
        });
    });

    function checkPuzzleSolution() {
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            puzzleSolved = true;
            puzzleContainer.style.display = "none"; // Hide puzzle after solving
            alert("Colors Arranged Correctly! Now touch the power switch to activate the lift!");
        }
    }

    // Game Loop and Collision Code
    function gameLoop() {
        Object.values(players).forEach(player => {
            // Check collision with the power switch.
            if (checkSwitchCollision(player)) {
                if (!puzzleSolved) {
                    puzzleContainer.style.display = "block";
                } else if (!isPowerOn) {
                    togglePower();
                }
            }

            // Check collision with the book.
            let collision = checkBookCollision(player);
            if (collision && bookAvailable) {
                paperContainer.style.display = "block";
                bookAvailable = false;
            }

            // Handle Movement
            if (keys.ArrowRight && player === players.player1) player.x += moveSpeed;
            if (keys.ArrowLeft && player === players.player1) player.x -= moveSpeed;
            if (keys.d && player === players.player2) player.x += moveSpeed;
            if (keys.a && player === players.player2) player.x -= moveSpeed;

            // Prevent Players from Leaving the Screen
            if (player.x < 0) player.x = 0;
            if (player.x > window.innerWidth - 40) player.x = window.innerWidth - 40;

            // Check for Platform Collision
            if (!checkPlatformCollision(player)) {
                if (player.y < groundY) {
                    player.velocityY += gravity;
                    if (player.velocityY > maxFallSpeed) player.velocityY = maxFallSpeed;
                } else {
                    player.velocityY = 0;
                    player.y = groundY;
                    player.isJumping = false;
                }
            }

            // Jumping (for each player)
            if (keys.ArrowUp && !players.player1.isJumping && player === players.player1) {
                players.player1.velocityY = jumpStrength;
                players.player1.isJumping = true;
            }
            if (keys.w && !players.player2.isJumping && player === players.player2) {
                players.player2.velocityY = jumpStrength;
                players.player2.isJumping = true;
            }

            player.y += player.velocityY;

            // Check for Leaf Collection
            checkLeafCollection(player);
            updatePlayerPosition();
            checkCollision();
        });

        // After processing all players, reset the book flag if no player is colliding.
        let anyBookCollision = Object.values(players).some(player => checkBookCollision(player));
        if (!anyBookCollision) {
            bookAvailable = true;
        }

        requestAnimationFrame(gameLoop);
    }

    function checkLeafCollection(player) {
        let playerRect = player.element.getBoundingClientRect();
        let leafRect = leaf.getBoundingClientRect();

        if (
            playerRect.left < leafRect.right &&
            playerRect.right > leafRect.left &&
            playerRect.top < leafRect.bottom &&
            playerRect.bottom > leafRect.top
        ) {
            if (!isLeafCollected) {
                isLeafCollected = true;
                leaf.style.display = "none";
                alert(`${player.element.id.toUpperCase()} Collected the leaf!`);
            }
        }
    }

    function checkPlatformCollision(player) {
        for (let platform of platforms) {
            let playerBottom = player.y + 40;
            let playerTop = player.y;
            let playerRight = player.x + 40;
            let playerLeft = player.x;

            let platformTop = platform.y;
            let platformBottom = platform.y + platform.height;
            let platformRight = platform.x + platform.width;
            let platformLeft = platform.x;

            if (
                playerRight > platformLeft &&
                playerLeft < platformRight &&
                playerBottom >= platformTop &&
                playerBottom - player.velocityY < platformTop + 10 &&
                player.velocityY >= 0
            ) {
                player.y = platform.y - 40;
                player.velocityY = 0;
                player.isJumping = false;
                player.onPlatform = true;
                return true;
            }

            if (
                playerRight > platformLeft &&
                playerLeft < platformRight &&
                playerTop <= platformBottom &&
                playerTop - player.velocityY > platformBottom - 10 &&
                player.velocityY < 0
            ) {
                player.velocityY = 1;
            }

            if (
                playerBottom > platformTop &&
                playerTop < platformBottom
            ) {
                if (playerRight >= platformLeft && playerRight - moveSpeed < platformLeft + 10) {
                    player.x = platformLeft - 40;
                }
                if (playerLeft <= platformRight && playerLeft + moveSpeed > platformRight - 10) {
                    player.x = platformRight;
                }
            }
        }
        return false;
    }

    function updatePlayerPosition() {
        players.player1.element.style.left = players.player1.x + "px";
        players.player1.element.style.top = players.player1.y + "px";
        players.player2.element.style.left = players.player2.x + "px";
        players.player2.element.style.top = players.player2.y + "px";
    }

    function checkCollision() {
        Object.values(players).forEach(player => {
            let playerRect = player.element.getBoundingClientRect();
            let toxicRect = toxic.getBoundingClientRect();

            if (
                playerRect.left < toxicRect.right &&
                playerRect.right > toxicRect.left &&
                playerRect.top < toxicRect.bottom &&
                playerRect.bottom > toxicRect.top
            ) {
                setTimeout(() => {
                    alert(`${player.element.id.toUpperCase()} DIED! Mission Failed!`);
                    location.reload();
                }, 500);
            }
        });
    }

    gameLoop();
});
