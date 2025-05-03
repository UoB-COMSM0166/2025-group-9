# 2025-group-9
2025 COMSM0166 group 9

## Race For The Cure
<img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/banner.png?raw=true" alt="Banner" width="100%"/>


[Click me! You Can Play The Game Here! 🎮🧪🌸](https://uob-comsm0166.github.io/2025-group-9/game)

## Table of Contents
- [The Group](#the-group)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Design](#design)
- [Implementation](#implementation)
- [Evaluation](#evaluation)
- [Process](#process)
- [Sustainability](#Sustainability)
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

When designing our game, we set out to create a puzzle-platformer that encourages players to work together under time pressure. Inspired by Fireboy and Watergirl, we aimed to develop a game where each character has distinct roles and unique obstacles to overcome, making coordination essential.


Players take on the roles of two university students, a chemistry student and a botany student, who have accidentally infected themselves with a virus during a joint experiment. Trapped in an abandoned science building at the University of Bristol, they must work together to gather the necessary components to create a cure and escape.


The game is set within a multi-floor maze connected by a lift system. Each floor contains character-specific challenges and puzzles. To win, players must collect two ingredients (one per character) and a key to unlock the lab. Only certain characters can collect certain ingredients, requiring teamwork and strategic navigation.


There are two difficulty levels: easy and hard. Both feature different maze structures, but only the hard mode includes puzzles that must be solved to access ingredients. A countdown timer adds urgency to the gameplay - players must reach the lab with the ingredients and key before time runs out. If either player dies, the game restarts.

| Character         | Description                                                                                   | Ingredient         | Puzzle Description                                                   |
|------------------|-----------------------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------|
| <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/chemistry-student.png?raw=true" width="100"/><br>**Chemistry Student** | A student specialising in chemistry, responsible for collecting chemical compounds. | <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/chem-vial.png?raw=true" width="100"/><br>**Chemical Compound** | Identify the correct order of vials needed to complete the experiment. |
| <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/botany-student.png?raw=true" width="100"/><br>**Botany Student**       | A student specialising in Botany, responsible for collecting rare plants.            | <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/flower.png?raw=true" width="100"/><br>**Rare Plant**          | Guess the name of the flower.                                          |


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


Our initial idea was to develop moving platforms for the game and allow players to start and stop them. Additionally, a magic door feature, enabling players to swap their positions in the game. To represent the idea, we created a paper prototype video:

**Initial Prototype Video:** https://youtu.be/2q2cDIboFrI?si=yGbFsBmup3uEhzl5

Building on this foundational idea, we developed several concepts to make the gameplay more engaging and challenging. This included the introduction of cooperative puzzles and an expanded narrative structure. We created a digital prototype video, which later served as a key inspiration for our final game concept, "Race for the Cure".

**Inspiration Prototype Video:** https://youtube.com/shorts/O2Wved8YsHU?si=evTJdVszApQ8bumC

The team developed a final interactive prototype to showcase the core concept of the game. The prototype reflects the finalized vision: a CooPuzzleGame that emphasizes cooperation, exploration, and problem-solving between two distinct characters. This video demonstration serves as a visual summary of the gameplay mechanics, level design, and user interface elements we have worked collaboratively to build.

**Final Prototype Video:** https://youtube.com/shorts/r6emoXvEDbI

### Stakeholders

**1. Product:**
Race to the Cure

**2. The System:**
Group 9 – Developing Team. Normal and Maintenance Operators

**3. The Containing System:**
- Casual Gamers
- Competitive Gamers
- Gamers with Disabilities
- Young Gamers
- Elderly Gamers
- Platform Hosting the Game
- Assessors

**4. The Wider Environment:**
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

<div align="center">

<img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/prelim_use_case_diagram(2).jpg?raw=true" alt="Preliminary Use Case Diagram" width="600"/>

**Figure 1**  
*Preliminary use case diagram showing system interactions.*  
</div>


## Design

Before undertaking the coding stage, our team first drafted a class diagram to act as a structured framework for our game. It was a point of reference that allowed us to visualize how elements in the game were interconnected, identify their properties and actions, and have an orderly development process. 

<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/class_diagram.jpg" alt="Class Diagram" width="600"/>
  <br/>
  <em>Figure: Class Diagram.</em>
</div>


The GameManager class is the game's main controller, monitoring overall progress, managing state transitions among the game states, and making sure players reach win or fail conditions. It controls the GameController directly, which manages individual game logic like monitoring the cure components that have been collected, monitoring the players' status, and managing the countdown timer.

The Player class, that extends from GameElement, is utilized to define the two game characters: the Chemist and the Biologist. The players possess certain skills and interact with various game elements such as Floor, Lift, Puzzles, Obstacles, and CureComponents. The Floor class, extending GameElement, is utilized to define the multi level game structure in which puzzles, obstacles, and significant items are placed. It contains methods for creating the layout and placing interactive objects such as walls, lifts, and pathways.

The Lift class offers a way for players to move between floors, responding dynamically to player input. Players also face Puzzles, which need to be solved in order to enter specific areas or unlock cure parts. Every puzzle has a type, a timer, and rewards when solved successfully. The Obstacles class adds obstacles that block player movement or need careful actions to disable. Barriers can be immobile (e.g., walls) or mobile (e.g., moving obstacles), and they damage player health or progress.

The CureComponents class is the main ingredients that must be collected in order to create the cure. The component is assigned to a specific player depending on their specialty (Chemistry or Biology), and coordination is required to complete the task. The GameController checks if all the cure components have been obtained, and upon completion, it signals the GameManager to begin the final challenge to beat the clock in reaching the lab before the virus can fully mature.

Together, these courses define the shape and mechanics of the game, offering a cooperative puzzle-solving experience with challenges, environmental risks, and strategic team-based elements.

## Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

## Evaluation
During the development process, it was important to ensure the usability and effectiveness of our game's design and core mechanics. To this end, we used a mixed-methods approach, **combining qualitative** and **quantitative evaluations**. The qualitative evaluation was interested in gathering rich user feedback for the sake of revealing usability issues early, while the quantitative evaluation was interested in measuring player performance and satisfaction through statistical analysis.

### Qualitative Evaluation
In Week 7's lab, we used two qualitative data collection methods: **Heuristic Evaluation** and **Think Aloud**.
Heuristic Evaluation was conducted by three peers from other teams, each independently assessing the game based on Nielsen’s usability principles. They identified a range of issues related to visual design, user control, and system feedback. These insights helped highlight critical usability problems at an early stage, allowing us to address them systematically. A full breakdown of the Heuristic Evaluation findings is provided in the attached HCV table.

![HCV Table](https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/HCVtable.png)
<div align="center">
  
*Figure: Heuristic Evaluation Table.*
</div>

---
**The Think Aloud test**, conducted on our digital prototype, provided us with additional feedback on the real user experience. Three users were recruited from outside our development group. Each user was instructed to make their way through the multi-floor maze, collect ingredients specific to their character, solve puzzles while against the clock, and reach the lab before the time expired. Throughout gameplay, players were prompted to think aloud, sharing their thoughts, feelings, and confusion, which enabled us to gather in-depth qualitative feedback.

Throughout the sessions, a number of common themes appeared. Players often complained of being confused over movement controls and having trouble finding objectives, pointing to a lack of clear onboarding and tutorial instruction. Visual issues were common; testers often struggled to distinguish between characters and weren't sure what various in-game icons meant. Platforming mechanics also received uniform feedback, namely the speed and responsiveness of the jump action. Text presentation was also pointed out as needing improvement, with font sizes being too small and pop-up instructions containing too much text.

A mind map of Think Aloud findings and thematic categorisation is presented below to graphically show the results of the evaluation.

![Think Aloud Mind Map](https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/ThinkAloudMindMap.gif)

<div align="center">
  
*Figure: Think Aloud evaluation feedback.*

</div>

#### **Based on this feedback, we made the following significant changes:**
- Shortened and summarised instructional text.


- Increased font sizes for better readability.


- Refined jumping mechanics for smoother and more consistent platforming.


- Increased visual cues to differentiate between two characters and draw attention to collectible items.




- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

## Process 

## Sustainability

### 1. Sustainability Dimentions

In Week 10, our group analyzed **Race for the Cure** through five sustainability dimensions individual, social, technical, economic, and environmental to ensure the game is engaging, accessible, and responsibly designed.

![Sustainability Dimensions Diagram](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/SustainabilityDimention.png)

<div align="center">
  
*Figure: Sustainability dimensions.*
</div>

--- 

### 2. Chains of Effects → Sustainability Dimensions

We also explored how **Race for the Cure** supports sustainability through its design. We analyzed each dimension and mapped out the chain of effects to show how our choices impact player well-being, environmental efficiency, technical performance, social value, and economic accessibility.

![Effect Chains GIF](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/sustainability_effect_chains.gif)

<div align="center">
  
*Figure: Chains of effects across sustainability dimensions.*
</div>

---

## 3. Ethics

From an ethical perspective, our game avoids violence, discrimination, and exploitative mechanics.
The narrative centers on a single player controlling two university students who work together to fix a problem they unintentionally caused promoting **accountability, empathy, and learning**.

- The game **does not collect or store personal data**, aligning with **privacy first principles**.
- Character roles (botany and chemistry) are not restricted by gender or cultural stereotypes, supporting inclusive representation for all players.

---

## 4. Accessibility

We designed to be accessible to a broad range of players, including those with diverse abilities:

- **Color Accessibility**: Important visual information is conveyed through icons and shapes, not color alone.
- **Clear UI and Fonts**: The interface is clean, using **readable fonts** and minimizing distractions.
- **Input Simplicity**: The game can be played fully with a keyboard, without requiring special equipment or high end devices.
- **Cognitive Accessibility**: Puzzles are structured to be challenging yet fair. The time limit introduces light tension without overwhelming the player, encouraging thoughtful coordination between the two characters.
  
---

## 5. Green Software Foundation Patterns → Game Integration

| **Plan to Add to Game**                 | **Relevant Pattern**                         | **Link**                                                                                                 | **Task Description**                                                                                                         |
|----------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Optimize sprites and assets            | Minify Web Assets                            | [Minify Web Assets](https://patterns.greensoftware.foundation/catalog/web/minify-web-assets/)            | Compress character sprites, background elements, and UI components to reduce file size and lower energy usage.                          |
| Replace GIFs with CSS/SVG animations   | Deprecate GIFs for Animated Content          | [Deprecate GIFs](https://patterns.greensoftware.foundation/catalog/web/deprecate-gifs/)                  | Replace GIF based animations (e.g. for loading screens or switches) with efficient alternatives.              |

---

## 6. Sustainability Requirements → User Stories
To ensure **Race for the Cure** meets sustainability goals, we turned our main design priorities into user stories. These stories are supported by acceptance criteria to help guide development and measure success.

![Sustainability Requirements](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/SusRequirements.png)

<div align="center">
  
*Figure: Sustainability Requirements as User Stories.*
</div>

### Collaboration

Throughout the development of our game, our team maintained consistent and effective collaboration. We met regularly during weekly lab sessions and often stayed behind or arranged extra meetings afterward. As the project progressed, we began scheduling frequent check-ins over WhatsApp and Microsoft Teams, particularly during key stages such as the design and final implementation phases.

From the beginning, we assigned tasks based on individual strengths. For instance, design-related tasks were mainly handled by Maram and Hadeel, while coding responsibilities were led by Vera, Satvika, and Hakeem. This division ensured that each team member could focus on what they felt most confident in, while also learning from others in collaborative settings.

Our meetings typically followed a structure where we’d begin by updating each other on what we had completed that week, and then decide on what we wanted to achieve in the week ahead. We would then split tasks into smaller groups or pairs. We found this structure to be far more efficient, especially after initially trying to do tasks with all five members at once which often slowed things down and led to duplication of effort.
In the early stages, we used the WhatsApp poll feature to shortlist and vote on our top two game ideas. We then held an in-person meeting to discuss the pros and cons of each, eventually deciding on a concept we all felt enthusiastic about. This helped everyone have a say, and we were able to quickly agree on a game idea that we all liked.

To document our progress, we kept detailed meeting notes on the repository, outlining what was discussed, what was completed, and the upcoming tasks for the next week. These notes helped ensure that no one lost track of our goals, even if they missed a session.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/meetingnotes.png?raw=true" width="55%" />
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/meetingnotes2.png?raw=true" width="35%" />
  <br>
  <em>Figure 1: Left - folders for each week used to store files and notes; Right - Week 4 meeting notes example with goals, stakeholders, and user stories</em>
</p>



A major strength of our collaboration was our use of pair programming. Working in pairs allowed us to support one another in real time, troubleshoot more effectively, and share different perspectives, which ultimately improved the quality and readability of our code. An example of when we used pair programming was during the development stage, when we were working on the player class. One person would focus on writing the code while the other helped with debugging or suggesting improvements. This made the process faster and helped us catch issues early on.


### Tools and Techniques

We incorporated various tools and techniques throughout the development process, many of which were inspired by lectures and labs on Agile software development (Week 2) and Project Management (Week 5).

**Kanban Board (GitHub Projects):**

We maintained a Kanban board that helped us visualise our workflow. Tasks were categorised into "To Do," "In Progress," and "Done." We would often move cards during meetings and use labels to indicate coding, design, or report-writing tasks. This was particularly useful during busy periods and ensured that everyone could see the project’s overall progress at a glance.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/kanbanboard.png?raw=true" width="60%" />
  <br>
  <em>Figure 4: Our Kanban board used to track coding, report writing, and task progress across the team</em>
</p>



**Google Docs:**

Our shared Google Doc was used for collaboratively writing the final report. We also created mini to-do lists for each section within the doc so that everyone was reminded of the specific requirements. This made it easier to divide writing tasks and collaborate on edits in real time.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/todolist.png?raw=true" width="35%" />
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/googledoc.png?raw=true" width="55%" />
  <br>
  <em>Figure 5: Sections of our shared Google Doc - Left: built-in to-do list for tracking progress; Right: main report document used for collaborative writing</em>
</p>


**Planning Poker:**

When estimating the effort required for larger tasks (like implementing animations or writing evaluation sections), we used planning poker during team discussions. This helped us set realistic expectations and distribute the workload fairly.

**Communication Platforms:**

We mainly used our WhatsApp group chat to stay in touch and ask quick questions throughout the week. For longer discussions or updates, we had regular meetings on Microsoft Teams, especially when we needed to talk through bigger decisions or check in on overall progress


### Reflection

While our collaboration became strong over time, we did struggle initially. In the early weeks, there were miscommunications around game design and gameplay ideas. Some team members had different understandings of what we had agreed on, especially when it came to how mechanics should work. These bumps helped us realise the importance of clarity after each meeting. We made a group effort to clearly define weekly goals and individual tasks before wrapping up any discussion. If anyone was confused, we’d follow up on the WhatsApp group chat, which became a central hub for clarification.

Having a clearly maintained Kanban board and a detailed to-do list in the Google Doc helped us massively. It meant everyone could double-check responsibilities, even outside of meetings.
We also realised that large group efforts on small tasks weren’t effective. During the first few weeks, all five of us would try to work on the same small feature or decision, which led to confusion and slow progress. Once we switched to working in smaller groups or pairs, we noticed a significant improvement in efficiency. We were able to tackle multiple things at once and make better use of our individual strengths.

Another learning curve came with our meetings. Initially, we didn’t set clear objectives, and as a result, some of our early meetings felt unfocused. Recognising this, we made it a habit to set a clear agenda for each meeting and identify what outcome we wanted. This small change made our sessions much more productive.

Overall, once we got into a good routine, things went a lot more smoothly. We stayed in touch, used the right tools, and worked well together.


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
