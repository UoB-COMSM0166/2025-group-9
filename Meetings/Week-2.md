# Week 2 Meeting

## Goals
This week we were tasked to deploy our paint app using GitHub and to write up two game ideas. Using the list of ideas we created last week, our team looked at the pros and cons for each game and voted on Fireboy and Watergirl and Space Invaders.

## Fireboy and Watergirl
### Game Description:
The game is a cooperative puzzle that combines elements of puzzle-solving and platforming where two characters with contrasting talents work together to complete increasingly challenging levels. The Fireboy interacts with fire-related elements, while the Watergirl manipulates water-based ones. The challenge lies in controlling both characters simultaneously in order to avoid obstacles and solve puzzles to advance through each stage.

### Game Mechanics:
Based on the original concept of "Fireboy and Watergirl" we suggest several enhancement ideas to the gameplay:
- Dynamic environmental changes, such as moving platforms, rising water waves that trigger new puzzles, and spreading fire that forces     the Fire Girl to find faster paths to avoid getting burned.
- Multiple levels with increasing difficulty, introducing twists like moving platforms, timed challenges, or character-specific            elements, such as sections requiring quick control of both characters.
- Considering changing the game characters to be CS-related, though it might be challenging. Here’s a list of potential characters:
   - Virus: Disrupts other characters by destroying software or altering system data.
   - Robot: Repairs malfunctions, bypasses software traps, and fixes damaged devices.
   - Programmer: Writes code to modify the game environment, adding new features or removing obstacles temporarily.

  ### Developmental challenges:
  - Managing Dynamic Environments involves creating smooth transitions for moving platforms, rising water levels, and spreading fire to      ensure the game feels fluid while maintaining performance.
  - Simultaneous Character Control involves fine-tuning the control for seamless movement of both characters without lag, while ensuring     intuitive character switching.
  - The user Interface for dynamic changes involves designing an interface that clearly communictaes changes like water levels, fire         spread and new characters.
  - Gradually increasing the game's difficulty with complex puzzles and timing-based tasks.

## Space Invaders
### Game Description:
The game is a twist on the classic arcade game. Players control a cannon at the bottom of the screen, shooting waves of descending alien invaders while using barriers for protection. The goal is to destroy all invaders before they reach the bottom. As the game progresses, invaders move faster and fire more bullets, therefore making it more challenging for the player.

### Game Mechanics:
- Players can target specific colour-coded invaders to trigger unique effects. For instance, hitting one colour stops barriers from being damaged and allows invader bullets to be deflected at random angles, potentially harming other invaders.
- Hitting a differently coloured mothership temporarily freezes all invaders, though their bullets continue firing. Once they resume movement, the invaders briefly speed up, making the game more intense.
- New enemy types are also introduced, such as explosive invaders that drop bombs capable of destroying barriers entirely if not intercepted in time and ground-based enemies that move directly toward the player add further pressure and create a sense of urgency.
- A time limit and restricted bullet count (e.g., 30 bullets per game) is added to make it more challenging for the player.
- Players can earn powerful weapons after completing each level to help take down boss invaders or use special strategies to defeat them.

### Developmental Challenges:
- Collision detection must be accurate for regenerating barriers, deflecting bullets, and handling explosive invader bombs.
- Performance optimisation is key to managing multiple moving objects like bullets, invaders, and barriers, while ensuring collision checks don’t slow the game down.
- Bullet deflection at random angles needs to work seamlessly with invaders and the environment. Smooth animations are essential to show invader behaviour changes, such as freezing, speeding up, or dropping bombs.
- Ground-based invaders require AI that can navigate the play area, track the player, and provide a balanced challenge.
- A clear and simple UI is needed to display time remaining, bullet count, and player progress effectively.

