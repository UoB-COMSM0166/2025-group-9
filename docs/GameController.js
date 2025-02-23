// Manages all game mechanics and connects other managers (TimeManager, HealthManager, CureManager, PuzzleManager)
// Decides when game is win/lost
//      win condition logic - lab position (player class will need to implement a method that detects when the player is at the lab)
//          [this.gameController.players.every(player => player.isAtLab(this.labX, this.labY))]
// Resets time, health, puzzle and cure
// tracks game progression

// HealthManager =  managing player health and movement speed - as time goes on, health decreases and speed of player decreases?


// PuzzleManager = tracks and manages all the puzzles 
//      stores a list of the puzzles
//      starts a puzzles when a player interacts with it
//      checks if a puzzle is solved and rewards the corresponding cure component
//      resets all puzzles when game restarts

// Puzzle class = represents a single puzzle
//      contains puzzle attributes
//      show puzzle UI display
//      check if solution is correct and marks puzzle as solved



