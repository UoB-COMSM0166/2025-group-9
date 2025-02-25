// Checks if call cures are collected and speeds up timer
// Resets ingredients on game restart
// Player class stores collected cures in cureCollected[] array and handles cure collection per player - notify CureManager


// TODO: cure is collected only when the puzzle is solved 
class CureManager {
    constructor(puzzleCureMap, gameController, players) {
        this.puzzleCureMap = puzzleCureMap; // Maps puzzles to their corresponding cures - need to add this onto sketch.js 
        this.gameController = gameController; // Reference to the game controller
        this.players = players; // List of all players in the game
        this.allCollected = false; // Tracks if all cures have been collected
    }

    // returns component name associated with a specific puzzle
    getCureForPuzzle(puzzleName) {
        return this.puzzleCureMap[puzzleName] || null; 
    }

    // called when a player collects a component, if all cures are collected timer speeds up
    trackCureCollection() {
        if (this.allComponentsCollected() && !this.allCollected) {
            console.log("All components collected! Speeding up timer...");
            this.gameController.timeManager.speedUpTimer();
            this.allCollected = true;
        }
    }

    // checks if all components have been collected
    allComponentsCollected() {
        let collectedComponents = [];

        // gets all the components collected by each player
        this.players.forEach(player => {
            collectedComponents = collectedComponents.concat(player.collectedComponents);
        });

        // check if all required components are in the collected list
        // puzzelCureMap - define within sketch.js, maps each puzzle to the specific cure component that it rewards when solved
        return Object.values(this.puzzleCureMap).every(component => collectedComponents.includes(component));
    }

    // reset all cure components when the game restarts
    resetComponents() {
        this.allCollected = false;
        this.players.forEach(player => {
            player.collectedComponents = [];
        });
    }
}
