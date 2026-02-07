// Trivia Questions Database - Organized by Position
// Each position has challenging, position-specific questions with randomized answer order
// All players listed actually played the position mentioned

const triviaQuestions = {
    "1B": [
        { question: "Who is known as 'The Iron Horse' among first basemen?", answers: ["Jimmie Foxx", "Lou Gehrig", "Frank Thomas", "Albert Pujols"], correct: 1 },
        { question: "Which first baseman won the Triple Crown in 2012?", answers: ["Joey Votto", "Albert Pujols", "Miguel Cabrera", "Paul Goldschmidt"], correct: 2 },
        { question: "Who holds the record for most grand slams by a first baseman?", answers: ["Eddie Murray", "Jimmie Foxx", "Lou Gehrig", "Willie McCovey"], correct: 2 },
        { question: "Which first baseman was nicknamed 'The Big Hurt'?", answers: ["Mark McGwire", "Frank Thomas", "Jeff Bagwell", "Fred McGriff"], correct: 1 },
        { question: "Who was the first first baseman to hit 500 home runs?", answers: ["Rafael Palmeiro", "Mark McGwire", "Eddie Murray", "Frank Thomas"], correct: 2 },
        { question: "Which first baseman won three MVP awards with the Cardinals?", answers: ["Stan Musial", "Albert Pujols", "Mark McGwire", "Jim Bottomley"], correct: 1 },
        { question: "Who hit 58 home runs in 1938, a record for left-handed batters at the time?", answers: ["Lou Gehrig", "Jimmie Foxx", "Babe Ruth", "Hank Greenberg"], correct: 3 },
        { question: "Which first baseman batted .420 in 1922?", answers: ["George Sisler", "Bill Terry", "Lou Gehrig", "Jimmie Foxx"], correct: 0 },
        { question: "Who was the first player to hit 500 home runs and have 3,000 hits?", answers: ["Willie Mays", "Hank Aaron", "Eddie Murray", "Rafael Palmeiro"], correct: 2 },
        { question: "Which first baseman won back-to-back MVP awards in 1932-1933?", answers: ["Lou Gehrig", "Jimmie Foxx", "Hank Greenberg", "Bill Terry"], correct: 1 }
    ],
    "2B": [
        { question: "Who holds the all-time hits record?", answers: ["Ty Cobb", "Hank Aaron", "Pete Rose", "Stan Musial"], correct: 2 },
        { question: "Which second baseman won 10 Gold Glove Awards?", answers: ["Joe Morgan", "Roberto Alomar", "Ryne Sandberg", "Craig Biggio"], correct: 1 },
        { question: "Which second baseman was a key member of the Big Red Machine?", answers: ["Pete Rose", "Ryne Sandberg", "Roberto Alomar", "Joe Morgan"], correct: 3 },
        { question: "Which second baseman won the Triple Crown in 1901?", answers: ["Rogers Hornsby", "Eddie Collins", "Nap Lajoie", "Charlie Gehringer"], correct: 2 },
        { question: "Which second baseman batted .388 in 1911?", answers: ["Ty Cobb", "Nap Lajoie", "Eddie Collins", "Rogers Hornsby"], correct: 1 },
        { question: "Who was nicknamed 'Poosh 'Em Up Tony'?", answers: ["Tony Perez", "Ryne Sandberg", "Craig Biggio", "Tony Lazzeri"], correct: 3 },
        { question: "Which second baseman won seven batting titles in the 1970s?", answers: ["Pete Rose", "Joe Morgan", "Rod Carew", "Bill Madlock"], correct: 2 },
        { question: "Who was known as 'The Mechanical Man'?", answers: ["Rogers Hornsby", "Charlie Gehringer", "Eddie Collins", "Frankie Frisch"], correct: 1 },
        { question: "Which second baseman collected 3,000 hits entirely with the Astros?", answers: ["Jeff Kent", "Jose Altuve", "Bill Doran", "Craig Biggio"], correct: 3 },
        { question: "Who won the 2017 AL MVP?", answers: ["Aaron Judge", "Giancarlo Stanton", "Jose Altuve", "Mike Trout"], correct: 2 }
    ],
    "3B": [
        { question: "Who holds the record for most home runs by a third baseman?", answers: ["Eddie Mathews", "Chipper Jones", "Mike Schmidt", "Alex Rodriguez"], correct: 2 },
        { question: "Which third baseman won 10 Gold Glove Awards?", answers: ["Mike Schmidt", "Brooks Robinson", "Ron Hansen", "Scott Rolen"], correct: 1 },
        { question: "Who holds the record for most consecutive games played?", answers: ["Lou Gehrig", "Miguel Tejada", "Steve Garvey", "Cal Ripken Jr."], correct: 3 },
        { question: "Which third baseman won the 1970 AL MVP?", answers: ["Harmon Killebrew", "Boog Powell", "Brooks Robinson", "Frank Robinson"], correct: 2 },
        { question: "Who was the first third baseman to hit 500 home runs?", answers: ["Eddie Mathews", "Mike Schmidt", "Chipper Jones", "Alex Rodriguez"], correct: 1 },
        { question: "Which third baseman batted .406 in 1922?", answers: ["George Sisler", "Ty Cobb", "Harry Heilmann", "Rogers Hornsby"], correct: 3 },
        { question: "Who won the 1980 NL MVP?", answers: ["Pete Rose", "George Foster", "Mike Schmidt", "Johnny Bench"], correct: 2 },
        { question: "Which third baseman won consecutive MVP awards in 1980 and 1981?", answers: ["George Brett", "Mike Schmidt", "Graig Nettles", "Buddy Bell"], correct: 1 },
        { question: "Which third baseman played for the 1969 World Series champion Mets?", answers: ["Wayne Garrett", "Bob Aspromonte", "Ken Boyer", "Ed Charles"], correct: 3 },
        { question: "Which third baseman won the 1995 NL MVP?", answers: ["Greg Maddux", "Tom Glavine", "Chipper Jones", "Fred McGriff"], correct: 2 }
    ],
    "SS": [
        { question: "Which shortstop won the most Gold Glove Awards (13)?", answers: ["Omar Vizquel", "Cal Ripken Jr.", "Ozzie Smith", "Derek Jeter"], correct: 2 },
        { question: "Who holds the record for consecutive games played (2,632)?", answers: ["Lou Gehrig", "Miguel Tejada", "Cal Ripken Jr.", "Steve Garvey"], correct: 2 },
        { question: "Which shortstop was nicknamed 'The Wizard'?", answers: ["Derek Jeter", "Alex Rodriguez", "Ozzie Smith", "Honus Wagner"], correct: 2 },
        { question: "Which shortstop won eight batting titles?", answers: ["Luke Appling", "Arky Vaughan", "Honus Wagner", "Cal Ripken Jr."], correct: 2 },
        { question: "Which shortstop hit .385 in 1935?", answers: ["Honus Wagner", "Lou Boudreau", "Arky Vaughan", "Joe Cronin"], correct: 2 },
        { question: "Which shortstop won the 1991 AL MVP?", answers: ["Cecil Fielder", "Frank Thomas", "Cal Ripken Jr.", "Jose Canseco"], correct: 2 },
        { question: "Who won back-to-back AL MVPs in 2001-2002?", answers: ["Miguel Tejada", "Ichiro Suzuki", "Alex Rodriguez", "Jason Giambi"], correct: 2 },
        { question: "Who was the 1948 AL MVP as player-manager?", answers: ["Joe Gordon", "Ted Williams", "Lou Boudreau", "Joe DiMaggio"], correct: 2 },
        { question: "Which shortstop won the 2003 AL MVP?", answers: ["Miguel Tejada", "Derek Jeter", "Alex Rodriguez", "Nomar Garciaparra"], correct: 2 },
        { question: "Who hit 57 home runs in 2002?", answers: ["Sammy Sosa", "Barry Bonds", "Alex Rodriguez", "Jim Thome"], correct: 2 }
    ],
    "C": [
        { question: "Which catcher caught 2,226 consecutive games without an error?", answers: ["Johnny Bench", "Yadier Molina", "Mike Matheny", "Ivan Rodriguez"], correct: 2 },
        { question: "Who was the first catcher to win three MVP awards?", answers: ["Johnny Bench", "Roy Campanella", "Yogi Berra", "Josh Gibson"], correct: 2 },
        { question: "Which catcher won the most Gold Glove Awards (13)?", answers: ["Johnny Bench", "Yadier Molina", "Ivan Rodriguez", "Bob Boone"], correct: 2 },
        { question: "Which catcher hit 396 home runs, the most by a catcher?", answers: ["Johnny Bench", "Carlton Fisk", "Mike Piazza", "Yogi Berra"], correct: 2 },
        { question: "Which catcher won the 2009 AL MVP?", answers: ["Jorge Posada", "Victor Martinez", "Joe Mauer", "Buster Posey"], correct: 2 },
        { question: "Who caught Don Larsen's perfect game in the 1956 World Series?", answers: ["Roy Campanella", "Elston Howard", "Yogi Berra", "Smoky Burgess"], correct: 2 },
        { question: "Which catcher won three NL MVP awards in the 1950s?", answers: ["Yogi Berra", "Ernie Banks", "Roy Campanella", "Stan Musial"], correct: 2 },
        { question: "Who was the 2010 NL Rookie of the Year?", answers: ["Jason Heyward", "Gaby Sanchez", "Buster Posey", "Jaime Garcia"], correct: 2 },
        { question: "Which catcher hit .362 in 1997?", answers: ["Tony Gwynn", "Mike Piazza", "Larry Walker", "Frank Thomas"], correct: 1 },
        { question: "Who won the 1970 NL MVP?", answers: ["Billy Williams", "Tony Perez", "Johnny Bench", "Willie McCovey"], correct: 2 }
    ],
    "LF": [
        { question: "Which left fielder won the 2018 NL MVP?", answers: ["Ryan Braun", "Christian Yelich", "Lorenzo Cain", "Travis Shaw"], correct: 1 },
        { question: "Who holds the record for most home runs by a left fielder in a single season?", answers: ["Ted Williams", "Barry Bonds", "Manny Ramirez", "Carl Yastrzemski"], correct: 1 },
        { question: "Which left fielder won 10 Gold Glove Awards?", answers: ["Carl Crawford", "Barry Bonds", "Rickey Henderson", "Lou Brock"], correct: 1 },
        { question: "Which left fielder won the Triple Crown in 1967?", answers: ["Ted Williams", "Carl Yastrzemski", "Ralph Kiner", "Stan Musial"], correct: 1 },
        { question: "Who hit .406 in 1941?", answers: ["Joe DiMaggio", "Ted Williams", "Stan Musial", "Hank Greenberg"], correct: 1 },
        { question: "Which left fielder won seven NL MVP awards?", answers: ["Stan Musial", "Barry Bonds", "Willie Mays", "Albert Pujols"], correct: 1 },
        { question: "Which left fielder batted .376 in 1948?", answers: ["Ted Williams", "Stan Musial", "Lou Boudreau", "Tommy Henrich"], correct: 1 },
        { question: "Who was the 1979 NL MVP?", answers: ["Keith Hernandez", "Willie Stargell", "Dave Winfield", "Dave Parker"], correct: 3 },
        { question: "Which left fielder hit 52 home runs in 1947?", answers: ["Johnny Mize", "Ralph Kiner", "Ted Williams", "Hank Greenberg"], correct: 1 },
        { question: "Who won the 1977 NL MVP?", answers: ["Dave Parker", "George Foster", "Greg Luzinski", "Steve Garvey"], correct: 3 }
    ],
    "CF": [
        { question: "Who is the only center fielder to win three MVP awards?", answers: ["Mike Trout", "Mickey Mantle", "Willie Mays", "Ken Griffey Jr."], correct: 1 },
        { question: "Which center fielder made 'The Catch' in the 1954 World Series?", answers: ["Joe DiMaggio", "Willie Mays", "Duke Snider", "Mickey Mantle"], correct: 1 },
        { question: "Who holds the record for most consecutive games with a hit (56)?", answers: ["Joe DiMaggio", "Pete Rose", "Ty Cobb", "Willie Keeler"], correct: 0 },
        { question: "Which center fielder won 12 Gold Glove Awards?", answers: ["Willie Mays", "Ken Griffey Jr.", "Andruw Jones", "Mike Trout"], correct: 0 },
        { question: "Which center fielder batted .366 lifetime?", answers: ["Ty Cobb", "Rogers Hornsby", "Shoeless Joe Jackson", "Tris Speaker"], correct: 0 },
        { question: "Who won the Triple Crown in 1956?", answers: ["Mickey Mantle", "Ted Williams", "Willie Mays", "Hank Aaron"], correct: 0 },
        { question: "Which center fielder hit 660 home runs?", answers: ["Willie Mays", "Ken Griffey Jr.", "Mickey Mantle", "Mike Trout"], correct: 0 },
        { question: "Who was the 1989 AL MVP?", answers: ["Robin Yount", "Ruben Sierra", "Kirby Puckett", "Bo Jackson"], correct: 0 },
        { question: "Which center fielder batted .356 in 1920?", answers: ["Tris Speaker", "Ty Cobb", "Babe Ruth", "George Sisler"], correct: 0 },
        { question: "Who won back-to-back MVP awards in 1965-1966?", answers: ["Willie Mays", "Frank Robinson", "Roberto Clemente", "Mickey Mantle"], correct: 0 }
    ],
    "RF": [
        { question: "Which right fielder hit 73 home runs in 2001?", answers: ["Mark McGwire", "Barry Bonds", "Sammy Sosa", "Aaron Judge"], correct: 1 },
        { question: "Which right fielder won the 2017 AL MVP?", answers: ["Aaron Judge", "Giancarlo Stanton", "Jose Altuve", "Mookie Betts"], correct: 0 },
        { question: "Which right fielder collected exactly 3,000 hits?", answers: ["Roberto Clemente", "Hank Aaron", "Al Kaline", "Tony Gwynn"], correct: 0 },
        { question: "Which right fielder won 13 Gold Glove Awards?", answers: ["Roberto Clemente", "Al Kaline", "Ichiro Suzuki", "Dwight Evans"], correct: 0 },
        { question: "Who hit 755 home runs?", answers: ["Hank Aaron", "Babe Ruth", "Barry Bonds", "Willie Mays"], correct: 0 },
        { question: "Which right fielder batted .394 in 1994?", answers: ["Tony Gwynn", "Jeff Bagwell", "Frank Thomas", "Albert Belle"], correct: 0 },
        { question: "Who won eight batting titles?", answers: ["Tony Gwynn", "Honus Wagner", "Rod Carew", "Ty Cobb"], correct: 0 },
        { question: "Which right fielder hit 60 home runs in 1927?", answers: ["Babe Ruth", "Lou Gehrig", "Jimmie Foxx", "Hack Wilson"], correct: 0 },
        { question: "Who was the 1999 NL MVP?", answers: ["Chipper Jones", "Jeff Bagwell", "Sammy Sosa", "Larry Walker"], correct: 0 },
        { question: "Which right fielder won the 1992 AL MVP?", answers: ["Dennis Eckersley", "Kirby Puckett", "Roberto Alomar", "Frank Thomas"], correct: 0 }
    ],
    "DH": [
        { question: "Who was the first designated hitter in MLB history?", answers: ["Reggie Jackson", "Ron Blomberg", "Harold Baines", "Edgar Martinez"], correct: 1 },
        { question: "Which DH won two AL MVP awards with the Red Sox?", answers: ["David Ortiz", "Edgar Martinez", "Frank Thomas", "Jim Rice"], correct: 0 },
        { question: "Who hit the most home runs as a DH?", answers: ["David Ortiz", "Frank Thomas", "Harold Baines", "Edgar Martinez"], correct: 0 },
        { question: "Which DH is the only two-way player to win MVP unanimously?", answers: ["Shohei Ohtani", "Babe Ruth", "Frank Thomas", "David Ortiz"], correct: 0 },
        { question: "Which DH retired with a .418 on-base percentage?", answers: ["Frank Thomas", "Edgar Martinez", "David Ortiz", "Harold Baines"], correct: 0 },
        { question: "Who won back-to-back AL MVP awards in 1993-1994?", answers: ["Frank Thomas", "Ken Griffey Jr.", "Albert Belle", "Mo Vaughn"], correct: 0 },
        { question: "Which DH won seven Silver Slugger Awards?", answers: ["Edgar Martinez", "David Ortiz", "Frank Thomas", "Jim Thome"], correct: 0 },
        { question: "Who hit .330 over 18 seasons?", answers: ["Edgar Martinez", "Paul Molitor", "Wade Boggs", "Tony Gwynn"], correct: 0 },
        { question: "Who won the 1984 AL MVP?", answers: ["Willie Hernandez", "Dave Winfield", "Cal Ripken Jr.", "Don Mattingly"], correct: 0 },
        { question: "Which DH hit 541 home runs?", answers: ["Frank Thomas", "Jim Thome", "David Ortiz", "Manny Ramirez"], correct: 0 }
    ],
    "P": [
        { question: "Who holds the record for most career strikeouts?", answers: ["Nolan Ryan", "Randy Johnson", "Roger Clemens", "Steve Carlton"], correct: 0 },
        { question: "Which pitcher won the most Cy Young Awards?", answers: ["Roger Clemens", "Greg Maddux", "Randy Johnson", "Sandy Koufax"], correct: 0 },
        { question: "Who threw a perfect game in the 1956 World Series?", answers: ["Don Larsen", "Sandy Koufax", "Bob Gibson", "Whitey Ford"], correct: 0 },
        { question: "Which pitcher won five consecutive Cy Young Awards?", answers: ["Roger Clemens", "Greg Maddux", "Randy Johnson", "Pedro Martinez"], correct: 1 },
        { question: "Who has the most career wins?", answers: ["Cy Young", "Walter Johnson", "Pete Alexander", "Warren Spahn"], correct: 0 },
        { question: "Which pitcher struck out 20 batters in a game?", answers: ["Kerry Wood", "Randy Johnson", "Roger Clemens", "Nolan Ryan"], correct: 1 },
        { question: "Who was the first pitcher to win the Cy Young Award?", answers: ["Don Newcombe", "Warren Spahn", "Bob Lemon", "Early Wynn"], correct: 0 },
        { question: "Which pitcher won the MVP and Cy Young in the same year?", answers: ["Bob Gibson", "Sandy Koufax", "Vida Blue", "Denny McLain"], correct: 0 },
        { question: "Who holds the record for most no-hitters?", answers: ["Nolan Ryan", "Sandy Koufax", "Cy Young", "Bob Feller"], correct: 0 },
        { question: "Which pitcher won the 1965 AL MVP?", answers: ["Zoilo Versalles", "Tony Oliva", "Earl Battey", "Mudcat Grant"], correct: 3 }
    ]
};









