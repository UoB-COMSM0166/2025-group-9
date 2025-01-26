# Week 2 Meeting

## Goals
This week we were tasked to deploy our paint app using GitHub and to write up two game ideas. Using the list of ideas we created last week, our team looked at the pros and cons for each game and voted on Fireboy and Watergirl and Space Invaders.

## Fireboy and Watergirl


## Space Invaders
### Game Description Summary:
A twist to the classic arcade game. It requires players to defend their barriers and eliminate invading enemies. Players control a cannon at the bottom of the screen, shooting upwards to destroy invaders while dodging their bullets. Barriers provide temporary protection but can break down if hit, unless players target specific colour-coded invaders that trigger unique effects. For example, hitting one colour stops barrier damage and reflects invader bullets at random angles, potentially harming other invaders. Hitting a differently coloured mothership freezes all invaders temporarily, though their bullets continue firing. Once they resume movement, the invaders briefly speed up, adding intensity.

Players face a mix of enemy types, including standard invaders, explosive invaders that drop bombs to destroy barriers, and ground-based enemies that move directly toward them, increasing the challenge. The game includes a time limit and a limited number of bullets (e.g., 30 per game). At the end of each level, players encounter a powerful boss invader that demands special strategies or weapons to defeat. As players progress, the challenge increases and the invaders move faster.

### Game Mechanics:

Building upon the original concept of the game, our team has suggested the below ideas to make the game more engaging:
- Hitting a specific colour invader stops the barriers from being broken down by bullets. When this happens invaders' bullets can be deflected back at random angles for a limited time, potentially damaging other invaders.
- ⁠Hitting a different colour mothership stops the invaders from moving. Whilst they can’t move, their bullets still fire. Once they start moving again, they can speed up briefly to make the game more intense.
- ⁠Can introduce new types of invaders e.g explosive invaders that can drop bombs and can destroy barriers entirely if not stopped in time.
- Add time limit challenge and limit the bullets number (e.g. 30 bullets per game).
- Introduce ground based enemies that move toward the player as it will add more pressure and excitement to the game.
- The player can get a particular powerful weapon to take down boss invaders after completing each level or might need special strategies to beat them.

### Developmental Challenges:

- Developing accurate collision detection for regenerating barriers when deflecting bullets or dealing with explosive invader bombs.
- Ensuring smooth performance while managing numerous moving objects, such as bullets, invaders, and barriers, especially on lower-end systems.
- Handling multiple collision detections to prevent any impact on overall game performance.
- Implementing bullet deflection at random angles and ensuring they interact correctly with both invaders and the environment.
- Creating smooth animations to visually communicate invader behaviour changes (frozen states, speed boosts after the freeze effect ends, explosive invader bomb drops).
- Designing AI for ground-based invaders that can navigate the play area, track the player’s position, and provide a challenging yet fair threat.
- Creating a UI that clearly displays time remaining, bullet count, and player progress.

