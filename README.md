# Immaculate Draft - Baseball Team Builder

A web-based baseball trivia game where users draft their perfect MLB lineup.

https://acolyer13.github.io/Immaculate-Grid-Copy/

## Features

- **Interactive Baseball Field Layout**: Click on any position to select a player
- **Player Database**: Pre-populated with MLB players and their ratings
- **Dynamic Team Rating**: Overall team rating calculated based on selected players
- **Rarity System**: Players have different rarity levels (Legendary, Epic, Rare, Common)
- **Responsive Design**: Works on desktop and mobile devices
- **Search Functionality**: Find players by name, team, or position

## How to Play

1. Open `index.html` in your web browser
2. Click on any `+` icon to select a player for that position
3. Search for players by name, team, or position
4. Build your dream team and maximize your overall rating!

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and layout
- `script.js` - Game logic and interactivity

## Customization

You can add more players to the database by editing the `mlbPlayers` array in `script.js`.

### Player Object Structure:
```javascript
{
    name: "Player Name",
    rating: 90,        // 0-100
    position: "SS",    // Position code
    team: "Team Name",
    rarity: "legendary" // legendary, epic, rare, common
}
```

## Optional Enhancements

To enhance the game, you could add:
- Background images for a more realistic baseball field
- Real player photos (requires image assets)
- Save/load team functionality
- Daily challenges
- Multiplayer leaderboards

## Note

This is a recreation of the Immaculate Draft concept. Add your own images for `outfield.png`, `field.png`, `info.png`, and `leaders.png` to match the original design, or the site will use fallback SVG graphics and gradients.
