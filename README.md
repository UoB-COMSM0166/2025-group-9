# 2025-group-9
2025 COMSM0166 group 9

## Race For The Cure

Link to your game [PLAY HERE]

Your game lives in the [/docs](https://github.com/UoB-COMSM0166/2025-group-9/tree/main/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Table of Contents
- [The Group](#the-group)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Design](#design)
- [Implementation](#implementation)
- [Evaluation](#evaluation)
- [Process](#process)
- [Conclusion](#conclusion)
- [Contribution Statement](#contribution-statement)

## The Group

![Group-Photo](https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/Group-Photo.png) 

<div align="center">

| Name                        | Email                  |        Username |
|-----------------------------|------------------------|-----------------|
| Vera Babasa                 | ho24168@bristol.ac.uk  | VeraB08         |
| Satvika Mallela             | jg24071@bristol.ac.uk  | satvikamal      |
| Abdul-Hakeem Lamptey        | qw19275@bristol.ac.uk  | ahl-hx          |
| Maram Abdulaziz Alhussain   | ho24644@bristol.ac.uk  | MaramAbdulaziz1 |
| Hadeel Ibrahim              | po24432@bristol.ac.uk  | hadeelibrahimn  |

</div>


## Introduction

When designing our game, we set out to create a puzzle-platformer that encourages players to work together under increasing time pressure. Inspired by Fireboy and Watergirl, we wanted to develop a game where each character has distinct roles and obstacles to overcome, meaning coordination is key. The twist we introduced was a multi-floor maze with a lift system, combined with puzzles that only appear when collecting key ingredients and a progressive difficulty system where movement slows as the virus takes hold.


Players take on the roles of two university students, a chemistry student and a botany student, who accidentally infected themselves with a virus from an experiment they conducted together. Trapped in an abandoned science building at the University of Bristol, they need to find and collect four key ingredients to create a cure. However, only specific characters can retrieve certain ingredients, so teamwork is essential.


The science building is split into different levels, each with character-specific obstacles and puzzles that must be solved to access an ingredient. Players navigate the maze together, using the lift system to move between floors, while battling the effects of the virus, which slows their movement over time. Once all four ingredients are collected, the timer speeds up, forcing players to race to the lab before the time runs out.

Inorder to win, both players must survive, collect all four ingredients and get to the lab before the time runs out. If one player dies, the game will restart.


## Requirements 

### Requirements Engineering


Requirements Engineering is a thorough process to create and develop the requirements of a software system while managing the needs and expectations of the stakeholders. The requirements fall into two categories - functional and non-functional. Requirements engineering is vital as it tells every team member what to do. This leads to an optimised development process. (Irum Inayat et al., 2014)


### Ideation Process


Our team pitched two games each to serve as inspiration for our final idea in our group chat. Each game pitch comprised of our proposed idea for a ’twist’, ways to adapt the game, and a pros and cons list. Along with this, we expressed any challenges our team may face during the implementation of each game. The top two ideas to base our game on were Space Invaders and Fireboy and Watergirl. 



Our initial idea involved fighter jets shooting out ‘enemy/alien’ ships while adapting to weather conditions, returning fire, changes in altitude, and birds. To make the game more challenging, we introduced a time limit and bullet restrictions. When presented to players, our team applied the twists to the existing games. The feedback from test sessions informed us that the game was easy to understand and play. However, Dr Bennett suggested that it was too similar to Space Invaders, so we changed course. 
<div align="center">

<img src="https://github.com/user-attachments/assets/07dcfd8e-d6cf-4d12-b346-493b361063ff" alt="Game Pitches" width="200"/>
  
<img src="https://github.com/user-attachments/assets/3cfed99c-59c8-4427-ae1d-45ef542402d2" alt="Pros and Cons" width="210"/>

<img src="https://github.com/user-attachments/assets/05e4f805-5336-4fe8-8e33-406774037d08" alt="Vote" height="125" width="125"/>

</div>

During the same testing sessions, our team presented a game based on Fireboy and Watergirl. Players were more enthusiastic and willing to play the game multiple times. Hadeel, a team member, created a digital prototype to help us visualise the new idea. 

Our initial idea was to develop moving platforms for the game and allow players to start and stop them. Additionally, a magic door feature, enabling players to swap their positions in the game. To represent the idea, we created a prototype video:

 Watch the prototype video

### [Watch the prototype video]:
https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Week-3/Fireboy%20and%20Watergirl.mp4

Building on the previous idea, we developed several concepts to make the gameplay more challenging by introducing cooperative puzzles and new storylines, such as one character rescuing the other before they can reach their doors together. To demonstrate this, we created another prototype video:
 Watch the prototype video

### [Watch the prototype video]: 
https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Week-4/F%26W_compressed.mp4

We had our final idea, after a brainstorming session during Week 5.

### Stakeholders

**1 Product:**

Race to the Cure


**2 The System:**

Group 9 – Developing Team. Normal and Maintenance Operators


**3 The Containing System:**

- Casual Gamers
- Competitive Gamers
- Gamers with Disabilities
- Young Gamers
- Elderly Gamers
- Platform Hosting the Game
- Assessors


**4 The Wider Environment:**

University of Bristol


### Epics and User Stories

**1. Gameplay & Mechanics**

Ensuring smooth, enjoyable, and challenging gameplay
As a new player, I want a tutorial mode that explains the game mechanics and rules, so I can learn how to play efficiently.
As a casual player, I want the game to be intuitive and easy to learn, so I can start playing with minimal effort.
As a competitive player, I want a challenging difficulty level and a ranking system, so I can compare my performance with others.
As a player, I want smooth and responsive gameplay, so I can play for extended periods without fatigue.
As a player, I want minimal lag between audio and visuals, so the game feels synchronized and immersive.
As a player, I want sound effects when characters move or interact with the environment, so the game feels more engaging and responsive.
As a competitive player, I want level completion times to be recorded and displayed, so I can compete against others based on speed.
As a competitive player who frequently replays the game, I want an option to skip non-gameplay animations and introductions, so I can focus on gameplay.


**2. Accessibility & Inclusivity**

Ensuring the game is playable for all users, including those with disabilities or specific needs
As an elderly player with limited vision, I want an option to adjust text size, so I can read in-game text comfortably.
As a color-blind player, I want customizable color schemes, so I can distinguish game elements easily.
As an impressionable young player, I want the game to avoid excessive violence, so the content remains appropriate for my age group.
As the University of Bristol, I want the game to avoid insensitive or discriminatory depictions, so it remains inclusive and respectful to all players.


**3. Narrative & Aesthetics**

Ensuring the game has an engaging story and a visually cohesive design
As a player, I want an engaging introductory sequence that explains the game's lore, so I can be immersed in the story.
As a player, I want a consistent art style, so the game remains visually appealing and cohesive.


**4. Technical & Development Considerations**

Ensuring efficient, scalable, and maintainable development
As a developer, I want the game to follow a modular design, so features can be added or removed easily.
As a platform hosting the game, I want the game’s file size to be optimized, so it does not consume excessive server space.
As an assessor, I want the game to feature a unique twist on a classic concept or an advanced implementation challenge, so the game demonstrates originality and technical depth.


## Design

Before undertaking the coding stage, our team first drafted a class diagram to act as a structured framework for our game. It was a point of reference that allowed us to visualize how elements in the game were interconnected, identify their properties and actions, and have an orderly development process.
<div align="center">

**Figure 1**  
*Class diagram illustrating the game structure.*  

<img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/class_diagram.jpg" alt="Class Diagram" width="600"/>
</div>

The GameManager class is the game's main controller, monitoring overall progress, managing state transitions among the game states, and making sure players reach win or fail conditions. It controls the GameController directly, which manages individual game logic like monitoring the cure components that have been collected, monitoring the players' status, and managing the countdown timer.

The Player class, that extends from GameElement, is utilized to define the two game characters: the Chemist and the Biologist. The players possess certain skills and interact with various game elements such as Floor, Lift, Puzzles, Obstacles, and CureComponents. The Floor class, extending GameElement, is utilized to define the multi-level game structure in which puzzles, obstacles, and significant items are placed. It contains methods for creating the layout and placing interactive objects such as walls, lifts, and pathways.

The Lift class offers a way for players to move between floors, responding dynamically to player input. Players also face Puzzles, which need to be solved in order to enter specific areas or unlock cure parts. Every puzzle has a type, a timer, and rewards when solved successfully. The Obstacles class adds obstacles that block player movement or need careful actions to disable. Barriers can be immobile (e.g., walls) or mobile (e.g., moving obstacles), and they damage player health or progress.

The CureComponents class is the main ingredients that must be collected in order to create the cure. The component is assigned to a specific player depending on their specialty (Chemistry or Biology), and coordination is required to complete the task. The GameController checks if all the cure components have been obtained, and upon completion, it signals the GameManager to begin the final challenge—to beat the clock in reaching the lab before the virus can fully mature.

Together, these courses define the shape and mechanics of the game, offering a cooperative puzzle-solving experience with challenges, environmental risks, and strategic team-based elements.


- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

## Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

## Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

## Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together. 

## Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

## Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

## Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
