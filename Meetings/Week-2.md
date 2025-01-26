# Week 2 Meeting

## Goals
This week we were tasked to deploy our paint app using GitHub and to write up two game ideas. Using the list of ideas we created last week, our team looked at the pros and cons for each game and voted on Fireboy and Watergirl and Space Invaders.

## Fireboy and Watergirl


## Space Invaders
### Game Description:
The game is a twist on the classic arcade game. Players control a cannon at the bottom of the screen, shooting waves of descending alien invaders while using barriers for protection. The goal is to destroy all invaders before they reach the bottom. As the game progresses, invaders move faster and fire more bullets, therefore making it more challenging for the player.

### Game Mechanics:
Players can target specific colour-coded invaders to trigger unique effects. For instance, hitting one colour stops barriers from being damaged and allows invader bullets to be deflected at random angles, potentially harming other invaders. Hitting a differently coloured mothership temporarily freezes all invaders, though their bullets continue firing. Once they resume movement, the invaders briefly speed up, making the game more intense.

New enemy types are also introduced, such as explosive invaders that drop bombs capable of destroying barriers entirely if not intercepted in time and ground-based enemies that move directly toward the player add further pressure and create a sense of urgency. A time limit and restricted bullet count (e.g., 30 bullets per game) is added to make it more challenging for the player. Players can earn powerful weapons after completing each level to help take down boss invaders or use special strategies to defeat them.

### Developmental Challenges:
The game comes with several developmental challenges that need to be addressed for a smooth and enjoyable experience. Collision detection must be accurate for regenerating barriers, deflecting bullets, and handling explosive invader bombs. Performance optimisation is key to managing multiple moving objects like bullets, invaders, and barriers, while ensuring collision checks don’t slow the game down. Bullet deflection at random angles needs to work seamlessly with invaders and the environment. Smooth animations are essential to show invader behaviour changes, such as freezing, speeding up, or dropping bombs. Ground-based invaders require AI that can navigate the play area, track the player, and provide a balanced challenge. Lastly, a clear and simple UI is needed to display time remaining, bullet count, and player progress effectively.

