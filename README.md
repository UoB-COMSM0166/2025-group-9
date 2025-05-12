# 2025-group-9
2025 COMSM0166 group 9

## Race For The Cure

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/banner.png?raw=true" alt="Banner" width="100%"/><br>
  <a href="https://uob-comsm0166.github.io/2025-group-9/game">
    <strong>Click me! You Can Play The Game Here! 🎮🧪🌸</strong>
  </a>
</p>

<br>

<p align="center">
  <a href="https://www.youtube.com/watch?v=rswHupL4rKg" target="_blank">
    <img src="https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-9/main/Meetings/Images/DemoPoster.png" width="550" height="120"/>
  </a>
  <br>
  <em>Click the image above to watch our gameplay video on YouTube.</em>
</p>





## Table of Contents
- [The Group](#the-group)
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Design](#design)
- [Implementation](#implementation)
- [Evaluation](#evaluation)
- [Process](#process)
- [Sustainability](#sustainability)
- [Conclusion](#conclusion)
- [Contribution Statement](#contribution-statement)
<br><br><br>

## The Group

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/group-photo.png" alt="Group-Photo">
</p>

<div align="center">

| Name                        | Email                  |        Username |
|-----------------------------|------------------------|-----------------|
| Vera Babasa                 | ho24168@bristol.ac.uk  | VeraB08         |
| Satvika Mallela             | ig24071@bristol.ac.uk  | satvikamal      |
| Abdul-Hakeem Lamptey        | qw19275@bristol.ac.uk  | ahl-hx          |
| Maram Abdulaziz Alhussain   | ho24644@bristol.ac.uk  | MaramAbdulaziz1 |
| Hadeel Ibrahim              | po24432@bristol.ac.uk  | hadeelibrahimn  |

</div>
<br><br><br>

## Introduction

When designing our game, we set out to create a puzzle-platformer that encourages players to work together under time pressure. Inspired by Fireboy and Watergirl, we aimed to develop a game where each character has distinct roles and unique obstacles to overcome, making coordination essential.


Players take on the roles of two university students, a chemistry student and a botany student, who have accidentally infected themselves with a virus during a joint experiment. Trapped in an abandoned science building at the University of Bristol, they must work together to gather the necessary components to create a cure and escape.


The game is set within a multi-floor maze connected by a lift system. Each floor contains character-specific challenges and puzzles. To win, players must collect two ingredients (one per character) and a key to unlock the lab. Only certain characters can collect certain ingredients, requiring teamwork and strategic navigation.


There are two difficulty levels: easy and hard. Both feature different maze structures, but only the hard mode includes puzzles that must be solved to access ingredients. A countdown timer adds urgency to the gameplay - players must reach the lab with the ingredients and key before time runs out. If either player dies, the game restarts.

| Character         | Description                                                                                   | Ingredient         | Puzzle Description                                                   |
|------------------|-----------------------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------|
| <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/chemistry-student.png?raw=true" width="100"/><br>**Chemistry Student** | A student specialising in chemistry, responsible for collecting chemical compounds. | <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/chem-vial.png?raw=true" width="100"/><br>**Chemical Compound** | Identify the correct order of vials needed to complete the experiment. |
| <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/botany-student.png?raw=true" width="100"/><br>**Botany Student**       | A student specialising in Botany, responsible for collecting rare plants.            | <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/flower.png?raw=true" width="100"/><br>**Rare Plant**          | Guess the name of the flower.                                          |

<br><br>

## Requirements 

### Requirements Engineering

Requirements Engineering is a thorough process to create and develop the requirements of a software system while managing the needs and expectations of the stakeholders. The requirements fall into two categories - functional and non-functional. Requirements engineering is vital as it tells every team member what to do. This leads to an optimised development process. (Irum Inayat et al., 2014)
<br>

### Ideation Process

Our team pitched two games each to serve as inspiration for our final idea in our group chat. Each game pitch comprised of our proposed idea for a ’twist’, ways to adapt the game, and a pros and cons list. Along with this, we expressed any challenges our team may face during the implementation of each game. The top two ideas to base our game on were Space Invaders and Fireboy and Watergirl. 


Our initial idea involved fighter jets shooting out ‘enemy/alien’ ships while adapting to weather conditions, returning fire, changes in altitude, and birds. To make the game more challenging, we introduced a time limit and bullet restrictions. When presented to players, our team applied the twists to the existing games. The feedback from test sessions informed us that the game was easy to understand and play. However, Dr Bennett suggested that it was too similar to Space Invaders, so we changed course. 
<br><br>

<div align="center">

<img src="https://github.com/user-attachments/assets/07dcfd8e-d6cf-4d12-b346-493b361063ff" alt="Game Pitches" width="300"/>
  
<img src="https://github.com/user-attachments/assets/3cfed99c-59c8-4427-ae1d-45ef542402d2" alt="Pros and Cons" width="310"/>

<img src="https://github.com/user-attachments/assets/05e4f805-5336-4fe8-8e33-406774037d08" alt="Vote" height="125" width="125"/>

<em>Potential game ideas and voting</em>

</div>
<br><br>
During the same testing sessions, our team presented a game based on Fireboy and Watergirl. Players were more enthusiastic and willing to play the game multiple times. Hadeel, a team member, created a digital prototype to help us visualise the new idea. 


Our initial idea was to develop moving platforms for the game and allow players to start and stop them. Additionally, a magic door feature, enabling players to swap their positions in the game. To represent the idea, we created a paper prototype video:

**Initial Prototype Video:** https://youtu.be/2q2cDIboFrI?si=yGbFsBmup3uEhzl5

Building on this foundational idea, we developed several concepts to make the gameplay more engaging and challenging. This included the introduction of cooperative puzzles and an expanded narrative structure. We created a digital prototype video, which later served as a key inspiration for our final game concept, "Race for the Cure".

**Inspiration Prototype Video:** https://youtube.com/shorts/O2Wved8YsHU?si=evTJdVszApQ8bumC

The team developed a final interactive prototype to showcase the core concept of the game. The prototype reflects the finalized vision: a CoopPuzzleGame that emphasizes cooperation, exploration, and problem-solving between two distinct characters. This video demonstration serves as a visual summary of the gameplay mechanics, level design, and user interface elements we have worked collaboratively to build.

**Final Prototype Video:** https://youtube.com/shorts/r6emoXvEDbI

<br>

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

<br>

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

*Preliminary use case diagram showing system interactions.*  
</div>

<br><br>

## Design

Before undertaking the coding stage, our team first drafted a class diagram to act as a structured framework for our game. It was a point of reference that allowed us to visualize how elements in the game were interconnected, identify their properties and actions, and have an orderly development process. 

A class diagram is a core component of Object-Oriented Design (OOD). It visually represents the classes in a system, their attributes, methods, and the relationships between them (e.g., inheritance, associations, and dependencies). It was important for us to create a class diagram early on, because it would help us understand the system’s structure at a high level before diving into implementation. It also ensured that key design principles such as encapsulation, modularity, and reusability were considered. Therefore, allowing us to plan how objects would interact, identify potential design flaws, and improve collaboration within the team by providing a shared understanding of the system architecture.

<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/class_diagram.jpg" alt="Class Diagram" width="600"/>
  <br/>
  
  <em>Class Diagram</em>
  
</div>
<br><br>

The GameManager class is the game's main controller, monitoring overall progress, managing state transitions among the game states, and making sure players reach win or fail conditions. It controls the GameController directly, which manages individual game logic like monitoring the cure components that have been collected, monitoring the players' status, and managing the countdown timer.

The Player class, that extends from GameElement, is utilized to define the two game characters: the Chemistry student and the Botany student. The characters possess certain skills and interact with various game elements such as Floor, Lift, Puzzles, Obstacles, and CureComponents. The Floor class, extending GameElement, is utilized to define the multi level game structure in which puzzles, obstacles, and significant items are placed. It contains methods for creating the layout and placing interactive objects such as walls, lifts, and pathways.

The Lift class offers a way for players to move between floors, responding dynamically to player input. Players also face Puzzles, which need to be solved in order to enter specific areas or unlock cure parts. Every puzzle has a type, a timer, and rewards when solved successfully. The Obstacles class adds obstacles that block player movement or need careful actions to disable. Barriers can be immobile (e.g., walls) or mobile (e.g., moving obstacles), and they damage player health or progress.

The CureComponents class is the main ingredients that must be collected in order to create the cure. The component is assigned to a specific player depending on their specialty (Chemistry or Biology), and coordination is required to complete the task. The GameController checks if all the cure components have been obtained, and upon completion, it signals the GameManager to begin the final challenge to beat the clock in reaching the lab before the virus can fully mature.

Together, these courses define the shape and mechanics of the game, offering a cooperative puzzle-solving experience with challenges, environmental risks, and strategic team-based elements.

<br><br>

## Implementation

### Designing User Interface
Since most of our team are not gamers, we wanted to make sure our game appealed to both gamers and non-gamers. Our objective was to create a game that was simple yet engaging. One of the first steps we took to achieve this was to create a user-friendly interface. 

Race For The Cure had several iterations. The finalised layout and colour scheme were driven by the feedback received during the Think Aloud and Heuristic evaluations. Initially, we had one instruction page detailing a backstory, how to play, the controls, and what to collect. Our team also wanted to lean further into the pixelated aesthetic. However, we felt that it was too much information to present to the player at one time. Coupled with the aesthetic, the instructions were difficult to read.

<div align="center">
  <img src="https://github.com/user-attachments/assets/d0e01b8a-4385-4f94-ba3b-b89c9ae8512f" alt="OldInstructionCard" width="500"/>
  <br/>
  
  <em>Early version of the Instruction Page</em>
  
</div>
<br><br>

Our solution - present bitsize information that is pertinent to gameplay throughout three cards. 
<br>
<div align="center">
  <img src="https://github.com/user-attachments/assets/a0ce9519-18fb-44b0-ad23-19adf5f59547" alt="infopage1" width="500"/>
  <img src="https://github.com/user-attachments/assets/ecf31fa8-d9a2-4f7f-ab3d-6afa13406507" alt="infopage2" width="500"/>
  <img src="https://github.com/user-attachments/assets/3f5a3d60-d997-441f-b8f5-60aa8a03347b" alt="infopage3" width="500"/>
  <br/>
  
  <em>How to Play pages</em>
  
</div>
<br><br>

The feedback from the qualitative evaluations suggested that some more clarification at certain points in the game would benefit the user experience. So to further improve user interface, we created popups to indicate when an ingredient has been collected or to provide in-the-moment instructions and error messages. 

The evaluations pose another question: What if the player solves the puzzles and obtains both the vial and the flower using a single character? To promote the use of both characters, we designed them to be able to acquire ingredients that are exclusive to their speciality, such as the Botany student can only retrieve the flower. The chemistry student can only retrieve the vial. In the hard level, only students of the science can solve the puzzle to collect the vial or the flower. 
<br>

### Image Preloader for Colour Blind players
Protanopia and Deuteranopia are the most common forms of colour blindness. Those with Protanopia are likely to perceive some shades of blue with red, purple or dark pink and green with orange. Those with Deuteranopes are likely to perceive red with green or brown, bright green with yellow, and light blue with lilac. The colours listed here are the ones that would directly affect colour blind users when playing our game. 

For example, all of the pages are various shades of blue, and one of the puzzles implemented in the hard level requires the identification of the colours red, green, yellow and purple.

<div align="center">
  <img src="https://github.com/user-attachments/assets/475901e6-6fda-445c-b7ed-53bf80041dbe" alt="chem-question" width="500"/>
  <img src="https://github.com/user-attachments/assets/1339b60e-0bd1-42ab-b385-59376106d6ec" alt="mazeflooreasy" width="500"/>
  <br/>
  
  <em>Original</em>
  
</div>
<br><br>

To ensure that colour blind players are offered the same experience while playing as those who aren’t colour blind, all of the images are processed through a colour filter and called upon in the `ImagePreloader.js` class. Depending on the accommodation a player chooses, images with the suffix `RBP` will be called for Protanopia and `GBD` for Deuteranopia. When `preloadImages` is called, it takes the root image name and combines it with the respective suffix. Then all relevant images are loaded into `setImgs`. 

<div align="center">
  <img src="https://github.com/user-attachments/assets/6e8b1313-2979-41c5-9aba-fb90a54fcc4a" alt="chem-questionRBP" width="500"/>
  <img src="https://github.com/user-attachments/assets/6b55b0ae-321c-43e1-bb3c-9956ca3e0bac" alt="mazeflooreasyRBP" width="500"/>
  
  <em>Accomodated version of the Chemistry question and Easy level map for Protanopia</em>
  
  <img src="https://github.com/user-attachments/assets/964f8231-0246-40a3-b700-0e170ed60b82" alt="chem-questionGBD" width="500"/>
  <img src="https://github.com/user-attachments/assets/b96c605e-c6dc-4d31-9558-e440c25fb87f" alt="mazeflooreasyGBD" width="500"/>
  <br/>
  
  <em>Accomodated version of the Chemistry question and Easy level map for Deuteranopia</em>
  
</div>
<br><br>

`Window` is used to maintain consistency with variables in `sketch.js`. This allows for the images to be preloaded, therefore, at runtime the change from the original images to the accommodated images will be seamless.

<br><br>

## Evaluation
During the development process, it was important to ensure the usability and effectiveness of our game's design and core mechanics. To this end, we used a mixed-methods approach, **combining qualitative** and **quantitative evaluations**. The qualitative evaluation was interested in gathering rich user feedback for the sake of revealing usability issues early, while the quantitative evaluation was interested in measuring player performance and satisfaction through statistical analysis.

<br>

### Qualitative Evaluation
In Week 7's lab, we used two qualitative data collection methods: **Heuristic Evaluation** and **Think Aloud**.
Heuristic Evaluation was conducted by three peers from other teams, each independently assessing the game based on Nielsen’s usability principles. They identified a range of issues related to visual design, user control, and system feedback. These insights helped highlight critical usability problems at an early stage, allowing us to address them systematically. A full breakdown of the Heuristic Evaluation findings is provided in the attached HCV table.

<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/HCVtable2.png" width="1200"/>
  <br>
  <em>Heuristic Evaluation Table.</em>
</div>
<br><br>

**The Think Aloud test**, conducted on our digital prototype, provided us with additional feedback on the real user experience. Three users were recruited from outside our development group. Each user was instructed to make their way through the multi-floor maze, collect ingredients specific to their character, solve puzzles while against the clock, and reach the lab before the time expired. Throughout gameplay, players were prompted to think aloud, sharing their thoughts, feelings, and confusion, which enabled us to gather in-depth qualitative feedback.

Throughout the sessions, a number of common themes appeared. Players often complained of being confused over movement controls and having trouble finding objectives, pointing to a lack of clear onboarding and tutorial instruction. Visual issues were common; testers often struggled to distinguish between characters and weren't sure what various in-game icons meant. Platforming mechanics also received uniform feedback, namely the speed and responsiveness of the jump action. Text presentation was also pointed out as needing improvement, with font sizes being too small and pop-up instructions containing too much text.

A mind map of Think Aloud findings and thematic categorisation is presented below to graphically show the results of the evaluation.

<div align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/ThinkAloudMindMap.gif" width="980"/>
  <br>
  <em>Think Aloud evaluation feedback.</em>
</div>
<br><br>

#### **Based on this feedback, we made the following significant changes:**
- Shortened and summarised instructional text.


- Increased font sizes for better readability.


- Refined jumping mechanics for smoother and more consistent platforming.


- Increased visual cues to differentiate between two characters and draw attention to collectible items.

<br>

### Quantitative Evaluation
In order to evaluate different aspects of user experience in our game, we conducted two quantitative tests: **the System Usability Scale (SUS)**, which focuses on system usability, and **the NASA Task Load Index (NASA-TLX)**, which measures perceived workload. For this part, we're looking at the SUS method, as it provided more observations about users working with our interface. The full results of both tests are shown below in the tables.

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/SUStable.png" width="250"/><br>
        <em>SUS scores for both difficulty levels</em>
      </td>
      <td align="center">
        <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/NASA-TLXtable.png" width="250"/><br>
        <em>NASA-TLX scores for both difficulty levels</em>
      </td>
    </tr>
  </table>
</div>
<br><br>

The SUS questionnaire was presented to ten subjects after they had played both levels of difficulty for our game. We purposely randomized the order of play to reduce the learning effect, some subjects began with the easy level, and others began with the hard level. This gave us more balanced feedback and avoided biased results due to familiarity.

Each SUS score was calculated as per the standard method: adjusting responses by question type, summing, and multiplying by 2.5 to get a score out of 100. A score above 68 is generally "above average" usability. Our results, however, were that both levels were below this.

The ratings were almost identical in both modes, with only two users rating differently. This was confirmed by a **Wilcoxon Signed-Rank Test**, where the test statistic W = 0 with only 2 non-tied pairs — a statistically significant difference, but one based on very little variation.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/SUSbarChart.png" width="600"/>
  <br/>
  <em>SUS score comparison between easy and hard modes.</em>
</p>
<br><br>

Both levels' SUS score average was still under the 68 threshold. This reflected the need to improve some aspects of the system's usability, which we successfully addressed in the final version. We incorporated numerous interface enhancements, including more descriptive instructions, stronger visual cues, simplified and easier navigation and controls, and less overall complexity to improve the intuitiveness and user-friendliness of the gameplay.
<br>

### How was our code tested?

<br><br>
## Sustainability

### 1. Sustainability Dimentions

In Week 10, our group analyzed **Race for the Cure** through five sustainability dimensions individual, social, technical, economic, and environmental to ensure the game is engaging, accessible, and responsibly designed.

![Sustainability Dimensions Diagram](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/SustainabilityDimention.png)

<div align="center">
  
*Sustainability dimensions.*
</div>
<br><br>

### 2. Chains of Effects → Sustainability Dimensions

We also explored how it supports sustainability through its design. We analyzed each dimension and mapped out the chain of effects to show how our choices impact player well-being, environmental efficiency, technical performance, social value, and economic accessibility.

![Effect Chains GIF](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/sustainability_effect_chains.gif)

<div align="center">
  
*Chains of effects across sustainability dimensions.*
</div>
<br><br>

### 3. Ethics

From an ethical perspective, our game avoids violence, discrimination, and exploitative mechanics.
The narrative centers on a single player controlling two university students who work together to fix a problem they unintentionally caused promoting **accountability, empathy, and learning**.

- The game **does not collect or store personal data**, aligning with **privacy first principles**.
- Character roles (botany and chemistry) are not restricted by gender or cultural stereotypes, supporting inclusive representation for all players.

<br>

### 4. Accessibility

We designed to be accessible to a broad range of players, including those with diverse abilities:

- **Color Accessibility**: Important visual information is conveyed through icons and shapes, not color alone.
- **Clear UI and Fonts**: The interface is clean, using **readable fonts** and minimizing distractions.
- **Input Simplicity**: The game can be played fully with a keyboard, without requiring special equipment or high end devices.
- **Cognitive Accessibility**: Puzzles are structured to be challenging yet fair. The time limit introduces light tension without overwhelming the player, encouraging thoughtful coordination between the two characters.
  
<br>

### 5. Green Software Foundation Patterns → Game Integration

| **Plan to Add to Game**                 | **Relevant Pattern**                         | **Link**                                                                                                 | **Task Description**                                                                                                         |
|----------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Convert PNGs to WebP and use sprite sheets to reduce file size and energy use.           | Minify Web Assets                            | [Minify Web Assets](https://patterns.greensoftware.foundation/catalog/web/minify-web-assets/)            | Removed backgrounds from image assets and used PNG format for sprites and UI elements to reduce file size. This partially follows the Minify Web Assets pattern.                          |
| Replace GIFs with CSS/SVG animations   | Deprecate GIFs for Animated Content          | [Deprecate GIFs](https://patterns.greensoftware.foundation/catalog/web/deprecate-gifs/)                  | Replace GIF based animations (e.g. lift and collectable items) with efficient alternatives.              |

<br><br>
### 6. Sustainability Requirements → User Stories
To ensure **Race for the Cure** meets sustainability goals, we turned our main design priorities into user stories. These stories are supported by acceptance criteria to help guide development and measure success.

![Sustainability Requirements](https://github.com/UoB-COMSM0166/2025-group-9/raw/main/Meetings/Images/SusRequirements.png)

<div align="center">
  
*Sustainability Requirements as User Stories.*
</div>
<br><br>

## Process 
### Collaboration

We worked closely and communicated effectively throughout the entire development process. We met regularly during weekly lab sessions and often stayed behind or arranged extra meetings afterward. As the project progressed, we began scheduling frequent check-ins over WhatsApp and Microsoft Teams, particularly during key stages such as the design and final implementation phases.

From the beginning, we assigned tasks based on individual strengths. For instance, design-related tasks were mainly handled by Maram and Hadeel, while coding responsibilities were led by Vera, Satvika, and Hakeem. This division ensured that each team member could focus on what they felt most confident in, while also learning from others in collaborative settings.

Our meetings typically followed a structure where we’d begin by updating each other on what we had completed that week, and then decide on what we wanted to achieve in the week ahead. We would then split tasks into smaller groups or pairs. We found this structure to be far more efficient, especially after initially trying to do tasks with all five members at once which often slowed things down and led to duplication of effort.

In the early stages, we used the WhatsApp poll feature to shortlist and vote on our top two game ideas. We then held an in-person meeting to discuss the pros and cons of each, eventually deciding on a concept we all felt enthusiastic about. This helped everyone have a say, and we were able to quickly agree on a game idea that we all liked.

When making other decisions about the game, such as design choices and feature implementations, we often used the poll feature or held quick votes during meetings. This ensured that everyone’s opinions were considered throughout the development process and that decisions reflected the whole team’s input.

A major strength of our collaboration was our use of pair programming, a technique supported by Cockburn and Williams (2001), who highlight its effectiveness in improving code quality and reducing defects through continuous code review. Working in pairs allowed us to support one another in real time, troubleshoot more effectively, and share different perspectives, which ultimately improved the quality and readability of our code. An example of when we used pair programming was during the development stage, when we were working on the player class. One person would focus on writing the code while the other helped with debugging or suggesting improvements. This made the process faster and helped us catch issues early on.

<br>

### Tools and Techniques

We incorporated various tools and techniques throughout the development process, many of which were inspired by lectures and labs on Agile software development (Week 2) and Project Management (Week 5).

**Meeting Notes:**

To document our progress, we kept detailed [meeting notes](https://github.com/UoB-COMSM0166/2025-group-9/tree/main/Meetings) on the repository, outlining what was discussed, what was completed, and the upcoming tasks for the next week. These notes helped ensure that no one lost track of our goals, even if they missed a session.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/meetingnotes.png?raw=true" width="55%" />
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/meetingnotes2.png?raw=true" width="35%" />
  <br>
  <em>Left - folders for each week used to store files and notes; Right - Week 4 meeting notes example with goals, stakeholders, and user stories</em>
</p>
<br><br>

**Kanban Board (GitHub Projects):**

We used a Kanban board to effectively visualize and manage our workflow. Tasks were categorised into "To Do," "In Progress," and "Done." We would often move cards during meetings and use labels to indicate coding, design, or report-writing tasks. This was particularly useful during busy periods and ensured that everyone could see the project’s overall progress at a glance.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/kanbanboard.png?raw=true" width="60%" />
  <br>
  <em>Our Kanban board used to track coding, report writing, and task progress across the team</em>
</p>
<br><br>

**Google Docs:**

Our shared [Google Docs](https://docs.google.com/document/d/1KssIKXsxvCF5YswZeRSX5y29ho-IXLtQ1YlvUcqwN8o/edit?tab=t.0) was used for collaboratively writing the final report. We also created a mini to-do lists for each section within the doc so that everyone was reminded of the specific requirements. This made it easier to divide writing tasks and collaborate on edits in real time.

<p align="center">
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/todolist.png?raw=true" width="35%" />
  <img src="https://github.com/UoB-COMSM0166/2025-group-9/blob/main/Meetings/Images/googledoc.png?raw=true" width="55%" />
  <br>
  <em>Sections of our shared Google Doc - Left: built-in to-do list for tracking progress; Right: main report document used for collaborative writing</em>
</p>
<br><br

**Planning Poker:**

When estimating the effort required for larger tasks (like implementing animations or writing evaluation sections), we used planning poker during team discussions. This helped us set realistic expectations and distribute the workload fairly. These estimates also helped us plan our sprints, break the work into smaller, manageable chunks, and keep things moving smoothly throughout the project.

**Sprints:**

We structured our workflow around sprints to help maintain steady progress. Each sprint represented a focused period, typically one to two weeks, during which we planned, assigned, and worked on specific tasks. At the start of each sprint, we held short meetings to discuss priorities, estimate effort using techniques like Planning Poker, and allocate tasks based on availability and skillsets. We also made use of our GoogleDocs Notes and a Kanban board to plan and manage each sprint.

At the end of each sprint, we reviewed our progress, discussed any challenges faced, and planned adjustments for the next sprint. This iterative cycle kept the team aligned, ensured continuous progress, and allowed us to adapt quickly to any changes or new ideas that emerged during development.

**Communication Platforms:**

We mainly used our WhatsApp group chat to stay in touch and ask quick questions throughout the week. For longer discussions or updates, we had regular meetings on Microsoft Teams, especially when we needed to talk through bigger decisions or check in on overall progress

<br>

### Reflection

While our collaboration became strong over time, we did struggle initially. In the early weeks, there were miscommunications around game design and gameplay ideas. Some team members had different understandings of what we had agreed on, especially when it came to how mechanics should work. These bumps helped us realise the importance of clarity after each meeting. We made a group effort to clearly define weekly goals and individual tasks before wrapping up any discussion. If anyone was confused, we’d follow up on the WhatsApp group chat, which became a central hub for clarification.

Having a clearly maintained Kanban board and a detailed to-do list in the Google Doc helped us massively. It meant everyone could double-check responsibilities, even outside of meetings.
We also realised that large group efforts on small tasks weren’t effective. During the first few weeks, all five of us would try to work on the same small feature or decision, which led to confusion and slow progress. Once we switched to working in smaller groups or pairs, we noticed a significant improvement in efficiency. We were able to tackle multiple things at once and make better use of our individual strengths.

Another learning curve came with our meetings. Initially, we didn’t set clear objectives, and as a result, some of our early meetings felt unfocused. Recognising this, we made it a habit to set a clear agenda for each meeting and identify what outcome we wanted. This small change made our sessions much more productive.

Overall, once we got into a good routine, things went a lot more smoothly. We stayed in touch, used the right tools, and worked well together.

<br><br>
## Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

<br><br>
## Contribution Statement

<em>A table to show team member contributions for Race For The Cure</em>

| Name | Contribution |
| ------------- | ------------- |
|  Vera Babasa   | 20 |
|  Satvika Mallela     |20  |
| Abdul-Hakeem Lamptey     | 20  |
| Maram Abdulaziz Alhussain   | 20 |
| Hadeel Ibrahim   | 20  |
 <br>
