## Sustainability, Ethics, and Accessibility

### 1. Sustainability Impact Analysis

| **Dimension**    | **Key Consideration**                                     | **Sustainability Implication**                                                                 |
|------------------|----------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Individual**   | How does it affect physical, mental, or emotional well-being? | Promotes positive interaction, reduces isolation, and builds confidence through cooperative gameplay. |
|                  | How does it enhance player competencies?                 | Strengthens logic, teamwork, and adaptability — especially under pressure due to the time-sensitive virus. |
|                  | Does it increase or reduce exposure to harm?            | Offers a safe, non-violent environment simulating a meaningful scientific challenge.  |
| **Technical**    | What are the system’s vulnerabilities or challenges?     | The multi-floor system and lift logic require careful state management and real-time synchronization. |
|                  | How does OS/runtime diversity affect it?                | Cross-platform testing is essential to ensure consistent gameplay between players using different devices. |
| **Economic**     | How does it affect costs and customer relationships?     | Uses free/open-source tools, accessible on low-spec machines, increasing reach and reducing cost. |
| **Environmental**| What is the impact on resource and energy use?           | Fully digital = no physical waste. But requires devices and energy to run—especially for online sessions. |
| **Social**        | How does it affect group belonging?                       | Strengthens a sense of community and shared purpose through cooperative gameplay.             |
|                   | How does it affect perception of others?                 | Encourages observation and empathy, helping players understand and respond to teammates' needs. |
|                   | How does it affect treatment of others?                  | Promotes knowledge-sharing and mutual support — experienced players guide newer ones.         |
|                   | How does it affect social behaviors?                     | Reinforces communication, teamwork, and collaborative problem-solving in real-time scenarios. |
---

### Chains of Effects – Sustainability Dimensions

| **Dimension / Topic**         | **Chain of Effects**                                                                                  |
|-------------------------------|--------------------------------------------------------------------------------------------------------|
| **Individual: Health**        | Two-player cooperation → Builds trust and communication → Reduces social isolation → Increases confidence and interpersonal skills |
| **Environmental: Materials**  | Fully digital game → No board game production → Reduced use of paper, plastic, and packaging           |
| **Environmental: Energy**     | Game requires digital devices and servers → Energy use increases slightly but optimized with efficient code |
| **Technical: Maintainability**| Modular design and clean code → Easy to scale, adapt, and reuse in educational or training contexts    |
| **Social: Sense of Community**| Co-op structure → Requires collaboration → Fosters connection and sense of shared purpose               |
| **Social: Communication**     | Unique roles per character → Players must guide each other → Boosts expressive, active listening, and clear coordination skills |
| **Economic: Customer Relationship** | Unique concept → Encourages repeat play and word-of-mouth sharing → Potential for educational licensing or content expansions in the future |
---

## 2. Ethics

From an ethical standpoint, our game avoids violence, discrimination, or exploitative mechanics.  
The story revolves around two university students solving a problem they unintentionally created, promoting **accountability, cooperation, and learning**.

- The game **does not collect or store personal data**, aligning with **privacy-first principles**.
- Character roles (botany and chemistry) are **not gender-locked or culturally biased**, ensuring **inclusive representation** for all players.

---

## 3. Accessibility

We designed the game to be accessible to a wide audience, including players with diverse abilities:

- **Color Accessibility**: Visual cues **do not rely on color alone** — icons and shapes help communicate important elements.
- **Clear UI and Fonts**: The interface is clean, using **readable fonts** and minimizing distractions.
- **Input Simplicity**: Playable using only a **keyboard** — no special equipment needed.
- **Cognitive Accessibility**: The game includes a **time limit**. Puzzles are designed to be manageable and focused, encouraging collaboration rather than overwhelming the player. The time constraints are intended to create a sense of tension and engagement.

---
### Green Software Foundation Patterns – Game Integration

| **Plan to Add to Game**                 | **Relevant Pattern**                         | **Link**                                                                                                 | **Task Description**                                                                                                         |
|----------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Optimize sprites and assets            | Minify Web Assets                            | [Minify Web Assets](https://patterns.greensoftware.foundation/catalog/web/minify-web-assets/)            | Compress character sprites, backgrounds, and UI elements to reduce game size and energy consumption                          |
| Replace GIFs with CSS/SVG animations   | Deprecate GIFs for Animated Content          | [Deprecate GIFs](https://patterns.greensoftware.foundation/catalog/web/deprecate-gifs/)                  | Replace GIF-based UI animations (e.g. loading or power switches) with lightweight **CSS** or **SVG** animations              |

---
### Sustainability Requirements → User Stories

| **Epic**                   | **User Story**                                                                                                                                     | **Acceptance Criteria**                                                                                                                                              |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Energy Efficiency**      | As a player, I want the game to run smoothly on low-spec devices, so I can enjoy it without needing powerful hardware.                            | Given the player is using a basic laptop or older machine, when they launch the game, then the game performs reliably without excessive lag.                         |
| **Collaborative Gameplay** | As a player, I want puzzles that require communication and character-specific actions, so that teamwork is essential to progress.                 | Given two players are in a level, when one character activates a switch or retrieves a unique ingredient, then the other must respond or support.                    |
| **Sustainable Asset Design** | As a developer, I want to optimize images and animations, so that the game loads faster and consumes less energy.                                 | Given the game includes multiple visual assets, when the game is built, then all assets are compressed and GIFs are replaced with CSS/SVG.                          |
| **Healthy Play Pacing** | As a player, I want the time limits to be fair and motivating, so I feel challenged without feeling overwhelmed.                          | Given that each level includes a reasonable time limit, when players solve puzzles through communication and cooperation, then they are able to complete the level on time without feeling rushed or overwhelmed.                   
