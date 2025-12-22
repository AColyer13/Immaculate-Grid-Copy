# Immaculate Draft - Baseball Trivia Draft Game

A web-based baseball trivia game where users answer position-specific questions to draft their perfect MLB lineup.

## Features

- **Trivia-Based Drafting**: Answer challenging, position-specific trivia questions to unlock players
- **Persistent Trivia Results**: Questions can only be answered once - choose wisely!
- **Interactive Baseball Field Layout**: Click on any position to start the draft process
- **Comprehensive Player Database**: 450+ MLB players across all 9 positions with ratings from 50-99
- **Rarity System**: Players divided into Legendary and Common tiers with random selection
- **Team Logos**: Real MLB team logos displayed on player cards
- **Dynamic Team Rating**: Overall team rating calculated based on selected players
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Reset Functionality**: Start over anytime with the reset button

## How to Play

1. Open `index.html` in your web browser
2. Click on any position on the baseball field
3. Answer the trivia question for that position (you only get one chance!)
4. If correct, randomly select from 3 available players for that position
5. Build your complete 9-player lineup
6. Maximize your overall team rating!

## Files

- `index.html` - Main HTML structure with baseball field layout
- `styles.css` - Desktop styling and layout
- `mobile.css` - Mobile-specific responsive styles
- `script.js` - Game logic, trivia system, and interactivity
- `players2025.js` - Player database with 450+ MLB players
- `trivia.js` - Position-specific trivia questions (50+ per position)
- `teamLogos.js` - MLB team logo URLs for player cards

## Trivia System

Each position has 50+ challenging, position-specific questions including:
- Historical achievements and records
- World Series performances
- MVP awards and statistics
- Career milestones
- Position-specific accomplishments

Questions are randomized and answers are shuffled so the correct answer isn't always first.

## Player Database

Players are organized by position with two rarity tiers:
- **Legendary**: Top-tier players with ratings 85-99
- **Common**: Quality players with ratings 50-84

Each position has 25 legendary and 25 common players, randomly selected from pools of 3.

### Player Object Structure:
```javascript
{ "name": "Player Name", "rating": 95, "team": "Team Name", "rarity": "legendary" }
```

## Customization

### Adding Players
Edit `players2025.js` to add more players to the database. Each position object contains `legendary` and `common` arrays.

### Adding Trivia Questions
Edit `trivia.js` to add more position-specific questions. Each question object includes the question, 4 answer choices, and the correct answer index.

### Team Logos
Edit `teamLogos.js` to add or update team logo URLs.

## Technical Details

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Responsive Design**: Separate mobile CSS with touch-friendly interactions
- **Data Persistence**: Trivia results stored in browser session
- **Randomization**: Shuffled answer order and player selection
- **Validation**: Position accuracy and temporal consistency in all trivia questions

## Browser Compatibility

Works in all modern browsers with JavaScript enabled. No external dependencies required.

## Development

To run locally:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Note

This is a comprehensive recreation of the Immaculate Draft concept with added trivia challenges. The game uses CSS-generated baseball diamonds and gradient backgrounds for the field visualization.
