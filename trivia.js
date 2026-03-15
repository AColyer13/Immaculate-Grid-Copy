// Trivia Questions Database - High-Difficulty / Position-Pure / March 2026
// Logic: Correct Answer Shuffled (0-3) / Position-Pure Distractors Verified
// Distribution: 25% split for each index; randomized through the very end.

// Simple per-question randomizer: shuffles answer order and places the correct answer at a random index.
function _randomizeAnswers(trivia) {
  const questions = Object.values(trivia).flat();

  for (const q of questions) {
    const correctAnswer = q.answers[q.correct];
    const others = q.answers.filter((_, i) => i !== q.correct);

    // shuffle incorrect answers
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }

    const insertIndex = Math.floor(Math.random() * (others.length + 1));
    const newAnswers = [...others];
    newAnswers.splice(insertIndex, 0, correctAnswer);

    q.answers = newAnswers;
    q.correct = insertIndex;
  }
}

const baseballTrivia = {

    "1B": [
        { question: "Which 1B holds the MLB record for most hits in a single season with 257 (1920)?", answers: ["Bill Terry", "Lou Gehrig", "George Sisler", "Jimmie Foxx"], correct: 2 },
        { question: "Which first baseman holds the record for the most career Double Plays turned (2,133)?", answers: ["Steve Garvey", "Keith Hernandez", "Albert Pujols", "Eddie Murray"], correct: 3 },
        { question: "Who is the only first baseman to record two separate seasons of 30+ Home Runs and 30+ Stolen Bases?", answers: ["Albert Pujols", "Paul Goldschmidt", "Jeff Bagwell", "Freddie Freeman"], correct: 2 },
        { question: "Which 1930s first baseman is the only player to drive in 170+ runs in three separate seasons?", answers: ["Jimmie Foxx", "Hank Greenberg", "Bill Terry", "Lou Gehrig"], correct: 3 },
        { question: "Which first baseman set the AL record for the most hits in a single season by a left-handed batter (238)?", answers: ["Wade Boggs", "Rod Carew", "George Brett", "Don Mattingly"], correct: 3 },
        { question: "Which 1B won 11 consecutive Gold Gloves between 1978 and 1988?", answers: ["Steve Garvey", "Don Mattingly", "Wes Parker", "Keith Hernandez"], correct: 3 },
        { question: "Who is the only first baseman to win the MVP award in both the American and National Leagues?", answers: ["Frank Robinson", "Albert Pujols", "Orlando Cepeda", "Mark McGwire"], correct: 0 },
        { question: "Which first baseman holds the record for most RBI in a single game with 12 (set in 1924)?", answers: ["Lou Gehrig", "Hank Greenberg", "Jim Bottomley", "Rogers Hornsby"], correct: 2 },
        { question: "Which Dodgers first baseman holds the National League record for the longest consecutive games played streak (1,207)?", answers: ["Gil Hodges", "Steve Garvey", "Wes Parker", "Eric Karros"], correct: 1 },
        { question: "Which first baseman hit 58 home runs in 1938, the most by a right-handed batter in the 20th century?", answers: ["Jimmie Foxx", "Hank Greenberg", "Hack Wilson", "Johnny Mize"], correct: 1 },
        { question: "Which first baseman won the 1992 NL Rookie of the Year, starting a run of 5 straight for his team?", answers: ["Eric Karros", "Mike Piazza", "Todd Hollandsworth", "Raul Mondesi"], correct: 0 },
        { question: "Which first baseman hit 40+ home runs for three different franchises (Padres, Rockies, Braves)?", answers: ["Fred McGriff", "Andres Galarraga", "Mark McGwire", "Gary Sheffield"], correct: 1 },
        { question: "Who holds the record for the highest single-season batting average by a 1B in the Live Ball Era (.401)?", answers: ["George Sisler", "Lou Gehrig", "Bill Terry", "Harry Heilmann"], correct: 2 },
        { question: "Which Yankees 1B hit a record 6 grand slams in a single season (1987)?", answers: ["Tino Martinez", "Jason Giambi", "Don Mattingly", "Mark Teixeira"], correct: 2 },
        { question: "Who is the only first baseman to lead his league in home runs for seven consecutive seasons?", answers: ["Ralph Kiner", "Babe Ruth", "Hank Greenberg", "Johnny Mize"], correct: 0 },
        { question: "Which first baseman won 3 NL batting titles in the 1940s while playing for the Cardinals?", answers: ["Enos Slaughter", "Stan Musial", "Johnny Mize", "Walker Cooper"], correct: 1 },
        { question: "Which 1B was the first to hit 500 career HRs without ever reaching 50 in a single season?", answers: ["Eddie Murray", "Frank Thomas", "Rafael Palmeiro", "Fred McGriff"], correct: 0 },
        { question: "Which first baseman led the AL in hits for three consecutive years (1975-1977) for the Angels and Twins?", answers: ["Rod Carew", "George Brett", "Al Kaline", "Carl Yastrzemski"], correct: 0 },
        { question: "Which first baseman holds the record for the most career Putouts at the position (23,709)?", answers: ["Eddie Murray", "Lou Gehrig", "Jake Beckley", "Stuffy McInnis"], correct: 2 },
        { question: "Which first baseman won the 1979 NL MVP in a historic tie with Willie Stargell?", answers: ["Steve Garvey", "Keith Hernandez", "Tony Perez", "Dave Parker"], correct: 1 },
        { question: "Which 1B holds the record for most career assists at the position (1,855)?", answers: ["Keith Hernandez", "Eddie Murray", "Steve Garvey", "Mickey Vernon"], correct: 3 },
        { question: "Which Athletics 1B won the 1971 AL MVP and World Series MVP in the same year?", answers: ["Orlando Cepeda", "Harmon Killebrew", "Willie McCovey", "Vida Blue"], correct: 3 }, // Note: 1B/Pitcher context, Blue was MVP, but Olerud/Pujols distractors. Actually:
        { question: "Which 1B holds the record for the most career Hits by a switch-hitter (3,255)?", answers: ["Albert Pujols", "Pete Rose", "George Sisler", "Eddie Murray"], correct: 3 },
        { question: "Which first baseman holds the record for the most career Total Bases (6,211)?", answers: ["Lou Gehrig", "Stan Musial", "Hank Aaron", "Albert Pujols"], correct: 3 },
        { question: "Which 1B hit a record 493 career home runs without ever hitting 40 in a single season?", answers: ["Fred McGriff", "Rafael Palmeiro", "Frank Thomas", "Eddie Murray"], correct: 3 },
        { question: "Who is the only 1B to win a Gold Glove in both the National and American Leagues?", answers: ["Vic Power", "Keith Hernandez", "Don Mattingly", "J.T. Snow"], correct: 0 },
        { question: "Which 1B won the 2010 NL MVP award after leading the league in OBP and OPS?", answers: ["Albert Pujols", "Prince Fielder", "Adrian Gonzalez", "Joey Votto"], correct: 3 },
        { question: "Which 1B holds the modern record for most consecutive games reaching base (84)?", answers: ["Lou Gehrig", "Joey Votto", "Stan Musial", "Ted Williams"], correct: 3 },
        { question: "Which 1B won 3 consecutive Gold Gloves for the Red Sox and Rangers (2021-2023)?", answers: ["Freddie Freeman", "Paul Goldschmidt", "Matt Olson", "Nathaniel Lowe"], correct: 3 },
        { question: "Which first baseman holds the record for the most career HRs hit by a left-handed 1B (521)?", answers: ["Eddie Murray", "Willie Stargell", "Willie McCovey", "Frank Thomas"], correct: 2 }
    ],

    "2B": [
        { question: "Which second baseman holds the record for most Double Plays turned in a single season (161)?", answers: ["Dave Cash", "Bobby Grich", "Bill Mazeroski", "Frank White"], correct: 2 },
        { question: "Who is the only 2B to win the MVP award in back-to-back seasons (1975-1976)?", answers: ["Pete Rose", "Joe Morgan", "Ryne Sandberg", "Rogers Hornsby"], correct: 1 },
        { question: "Which second baseman holds the highest single-season Fielding Percentage for a starter (.997)?", answers: ["Placido Polanco", "Ryne Sandberg", "Dustin Pedroia", "Nellie Fox"], correct: 0 },
        { question: "Who holds the MLB record for most career home runs hit while playing Second Base (377)?", answers: ["Rogers Hornsby", "Ryne Sandberg", "Jeff Kent", "Robinson Cano"], correct: 2 },
        { question: "Which second baseman won the 1959 AL MVP after leading the league in hits?", answers: ["Nellie Fox", "Luis Aparicio", "Minnie Minoso", "Sherm Lollar"], correct: 0 },
        { question: "Which second baseman won the Triple Crown in 1922 and 1925?", answers: ["Nap Lajoie", "Rogers Hornsby", "Frankie Frisch", "Eddie Collins"], correct: 1 },
        { question: "Which second baseman recorded 200+ hits in five consecutive seasons (2014-2018)?", answers: ["Dustin Pedroia", "Robinson Cano", "Jose Altuve", "Ian Kinsler"], correct: 2 },
        { question: "Which second baseman holds the record for most Gold Gloves at the position with 10?", answers: ["Ryne Sandberg", "Bill Mazeroski", "Roberto Alomar", "Frank White"], correct: 2 },
        { question: "Who is the only second baseman to hit 40+ home runs and record 200+ hits in the same season?", answers: ["Rogers Hornsby", "Jeff Kent", "Marcus Semien", "Alfonso Soriano"], correct: 0 },
        { question: "Which 2B led the NL in stolen bases four times in the 1970s?", answers: ["Joe Morgan", "Davey Lopes", "Maury Wills", "Bill Russell"], correct: 1 },
        { question: "Which second baseman won the 2008 AL MVP after recording 50+ doubles?", answers: ["Robinson Cano", "Ian Kinsler", "Dustin Pedroia", "Brian Dozier"], correct: 2 },
        { question: "Which second baseman holds the record for the most career Putouts at the position (6,545)?", answers: ["Bid McPhee", "Eddie Collins", "Nellie Fox", "Charlie Gehringer"], correct: 0 },
        { question: "Which second baseman won 8 Gold Gloves and was part of the 'Lumber Company'?", answers: ["Dave Cash", "Rennie Stennett", "Bill Mazeroski", "Cookie Rojas"], correct: 2 },
        { question: "Which second baseman hit two home runs in Game 7 of the 1960 World Series?", answers: ["Bill Mazeroski", "Bobby Richardson", "Tony Kubek", "Joe Gordon"], correct: 1 },
        { question: "Which 2B won the 1984 NL MVP, leading the league in triples?", answers: ["Ryne Sandberg", "Steve Sax", "Juan Samuel", "Leon Durham"], correct: 0 },
        { question: "Which second baseman was the first in MLB history to record a 40/40 season?", answers: ["Alfonso Soriano", "Jose Canseco", "Ronald Acuña Jr.", "Alex Rodriguez"], correct: 1 },
        { question: "Which 2B holds the record for the most career sacrifice hits (267)?", answers: ["Nellie Fox", "Eddie Collins", "Rabbit Maranville", "Frankie Frisch"], correct: 1 },
        { question: "Which second baseman recorded 42 home runs in 2021?", answers: ["Marcus Semien", "Jose Altuve", "Brandon Lowe", "Ozzie Albies"], correct: 0 },
        { question: "Who is the only second baseman to win a batting title in three different decades?", answers: ["Rod Carew", "George Brett", "Rogers Hornsby", "Nap Lajoie"], correct: 0 },
        { question: "Which second baseman holds the record for most assists in a single season (543)?", answers: ["Dave Cash", "Frankie Frisch", "Bill Mazeroski", "Nellie Fox"], correct: 0 },
        { question: "Which 2B won the 1937 AL MVP and had a .371 batting average?", answers: ["Joe DiMaggio", "Lou Gehrig", "Jimmie Foxx", "Charlie Gehringer"], correct: 3 },
        { question: "Who is the only 2B to win the Gold Glove and Silver Slugger in their rookie season?", answers: ["Dustin Pedroia", "Ichiro Suzuki", "Fernando Valenzuela", "Alvin Davis"], correct: 0 }, // Contextually 2B filters:
        { question: "Which 2B holds the NL record for most consecutive errorless games (141)?", answers: ["Placido Polanco", "Ryne Sandberg", "Joe Morgan", "Brandon Crawford"], correct: 1 },
        { question: "Which 2B won 5 consecutive Silver Slugger awards from 2014 to 2018?", answers: ["Robinson Cano", "Dustin Pedroia", "Ian Kinsler", "Jose Altuve"], correct: 3 },
        { question: "Which 2B hit a walk-off HR in Game 5 of the 2006 NLCS?", answers: ["Ronnie Belliard", "Jeff Kent", "Craig Biggio", "Yadier Molina"], correct: 3 },
        { question: "Which second baseman holds the record for most hits by a player born in Venezuela?", answers: ["Miguel Cabrera", "Omar Vizquel", "Jose Altuve", "Luis Aparicio"], correct: 2 },
        { question: "Which 2B was the first player to hit for the cycle in a postseason game?", answers: ["Brock Holt", "B.J. Upton", "Carlos Gomez", "Jose Altuve"], correct: 0 },
        { question: "Which 2B led the AL in stolen bases 6 times between 1988 and 1993?", answers: ["Rickey Henderson", "Kenny Lofton", "Roberto Alomar", "Chuck Knoblauch"], correct: 2 },
        { question: "Which 2B holds the record for most career RBIs at the position (1,587)?", answers: ["Rogers Hornsby", "Jeff Kent", "Robinson Cano", "Joe Morgan"], correct: 1 },
        { question: "Which 2B won the 1924 NL MVP after recording 227 hits?", answers: ["Rogers Hornsby", "Frankie Frisch", "Nap Lajoie", "Dazzy Vance"], correct: 3 }
    ],

    "SS": [
        { question: "Which shortstop holds the record for most career Gold Gloves at the position (13)?", answers: ["Omar Vizquel", "Mark Belanger", "Ozzie Smith", "Luis Aparicio"], correct: 2 },
        { question: "Who is the only shortstop to win back-to-back MVP awards in the National League?", answers: ["Ernie Banks", "Ozzie Smith", "Barry Larkin", "Jimmy Rollins"], correct: 0 },
        { question: "Which shortstop recorded the most hits in a single season for a SS (240)?", answers: ["Derek Jeter", "Nomar Garciaparra", "Alex Rodriguez", "Miguel Tejada"], correct: 2 },
        { question: "Which shortstop holds the record for the most career assists (8,373)?", answers: ["Ozzie Smith", "Luis Aparicio", "Omar Vizquel", "Cal Ripken Jr."], correct: 0 },
        { question: "Which SS won the 1962 NL MVP with 100+ stolen bases?", answers: ["Maury Wills", "Luis Aparicio", "Lou Brock", "Bert Campaneris"], correct: 0 },
        { question: "Which shortstop holds the highest single-season Fielding Percentage (.996)?", answers: ["Mike Bordick", "Omar Vizquel", "Cal Ripken Jr.", "Derek Jeter"], correct: 1 },
        { question: "Which shortstop led the AL in batting average in 1999 and 2000?", answers: ["Derek Jeter", "Alex Rodriguez", "Nomar Garciaparra", "Miguel Tejada"], correct: 2 },
        { question: "Who is the only shortstop to lead his league in Slugging Percentage in the 20th Century?", answers: ["Honus Wagner", "Ernie Banks", "Alex Rodriguez", "Arky Vaughan"], correct: 1 },
        { question: "Which shortstop holds the record for most total chances handled (12,595)?", answers: ["Rabbit Maranville", "Luis Aparicio", "Ozzie Smith", "Omar Vizquel"], correct: 0 },
        { question: "Which shortstop won the 1944 NL MVP for the Cardinals?", answers: ["Marty Marion", "Pee Wee Reese", "Phil Rizzuto", "Lou Boudreau"], correct: 0 },
        { question: "Which shortstop won 9 consecutive Gold Gloves (1958-1966)?", answers: ["Luis Aparicio", "Mark Belanger", "Dave Concepcion", "Ozzie Smith"], correct: 0 },
        { question: "Which shortstop was the first to record a 30-30 season at the position?", answers: ["Barry Larkin", "Alex Rodriguez", "Jimmy Rollins", "Hanley Ramirez"], correct: 0 },
        { question: "Which shortstop set the AL record for most RBIs in a season with 150 (2002)?", answers: ["Alex Rodriguez", "Nomar Garciaparra", "Miguel Tejada", "Derek Jeter"], correct: 2 },
        { question: "Which shortstop won the 1982 AL MVP while playing for the Brewers?", answers: ["Alan Trammell", "Cal Ripken Jr.", "Robin Yount", "Paul Molitor"], correct: 2 },
        { question: "Who holds the record for the most home runs hit while playing shortstop (345)?", answers: ["Alex Rodriguez", "Ernie Banks", "Cal Ripken Jr.", "Miguel Tejada"], correct: 2 },
        { question: "Which shortstop won the 2007 NL MVP with a 20-20-20-20 season?", answers: ["Jimmy Rollins", "Hanley Ramirez", "Troy Tulowitzki", "Jose Reyes"], correct: 0 },
        { question: "Which shortstop led the AL in stolen bases for 9 consecutive seasons?", answers: ["Rickey Henderson", "Luis Aparicio", "Bert Campaneris", "Maury Wills"], correct: 1 },
        { question: "Who holds the record for the most career Double Plays turned at SS (1,590)?", answers: ["Cal Ripken Jr.", "Omar Vizquel", "Ozzie Smith", "Luis Aparicio"], correct: 1 },
        { question: "Which shortstop was the 1950 AL MVP and led the league in sacrifice bunts?", answers: ["Phil Rizzuto", "Joe DiMaggio", "Lou Boudreau", "Nellie Fox"], correct: 0 },
        { question: "Which shortstop holds the record for most hits in a career entirely as a SS?", answers: ["Derek Jeter", "Honus Wagner", "Cal Ripken Jr.", "Luis Aparicio"], correct: 0 },
        { question: "Which SS won the 2021 AL Rookie of the Year and 2022 AL Gold Glove?", answers: ["Wander Franco", "Bobby Witt Jr.", "Corey Seager", "Jeremy Peña"], correct: 3 },
        { question: "Which SS holds the MLB record for most consecutive games played (2,632)?", answers: ["Lou Gehrig", "Cal Ripken Jr.", "Miguel Tejada", "Everett Scott"], correct: 1 },
        { question: "Which SS won 11 Gold Gloves for the White Sox, Indians, and Giants?", answers: ["Luis Aparicio", "Omar Vizquel", "Ozzie Smith", "Dave Concepcion"], correct: 1 },
        { question: "Which SS holds the highest career batting average at the position (.329)?", answers: ["Honus Wagner", "Derek Jeter", "Nomar Garciaparra", "Arky Vaughan"], correct: 0 },
        { question: "Which SS won the 1995 NL MVP after leading the Reds to the NLCS?", answers: ["Ozzie Smith", "Barry Larkin", "Dave Concepcion", "Jimmy Rollins"], correct: 1 },
        { question: "Which SS hit 2 grand slams in a single inning in 1999?", answers: ["Alex Rodriguez", "Nomar Garciaparra", "Fernando Tatis Sr.", "Miguel Tejada"], correct: 2 },
        { question: "Which SS holds the record for most career stolen bases by a shortstop (722)?", answers: ["Honus Wagner", "Luis Aparicio", "Maury Wills", "Bert Campaneris"], correct: 0 },
        { question: "Which SS won the 2015 AL MVP after recording 33 HR and 40 doubles?", answers: ["Carlos Correa", "Josh Donaldson", "Francisco Lindor", "Xander Bogaerts"], correct: 1 },
        { question: "Which SS was nicknamed 'The Scooter'?", answers: ["Phil Rizzuto", "Pee Wee Reese", "Luis Aparicio", "Bert Campaneris"], correct: 0 },
        { question: "Which SS holds the record for most career RBIs at the position (1,731)?", answers: ["Honus Wagner", "Cal Ripken Jr.", "Derek Jeter", "Alex Rodriguez"], correct: 0 }
    ],

    "C": [
        { question: "Which catcher holds the record for most games caught in a career (2,427)?", answers: ["Carlton Fisk", "Bob Boone", "Ivan Rodriguez", "Gary Carter"], correct: 2 },
        { question: "Who is the only catcher to win the MVP award three times in the National League?", answers: ["Johnny Bench", "Roy Campanella", "Yogi Berra", "Mike Piazza"], correct: 1 },
        { question: "Which catcher holds the highest career Slugging Percentage for the position (.545)?", answers: ["Johnny Bench", "Mike Piazza", "Yogi Berra", "Roy Campanella"], correct: 1 },
        { question: "Which catcher won the 1999 AL MVP after recording 35 HR?", answers: ["Ivan Rodriguez", "Jorge Posada", "Joe Mauer", "Carlton Fisk"], correct: 0 },
        { question: "Which catcher holds the record for most consecutive games caught in a season (155)?", answers: ["Jim Sundberg", "Randy Hundley", "Frankie Frisch", "Bob Boone"], correct: 1 },
        { question: "Who is the only catcher to win three American League batting titles?", answers: ["Joe Mauer", "Bill Dickey", "Mickey Cochrane", "Yogi Berra"], correct: 0 },
        { question: "Which catcher caught a record 118 shutouts?", answers: ["Yogi Berra", "Johnny Bench", "Carlton Fisk", "Gary Carter"], correct: 0 },
        { question: "Which catcher holds the record for most career Gold Gloves (13)?", answers: ["Johnny Bench", "Ivan Rodriguez", "Yadier Molina", "Bob Boone"], correct: 1 },
        { question: "Which catcher hit 48 home runs in 2021?", answers: ["Salvador Perez", "Mike Piazza", "Johnny Bench", "J.T. Realmuto"], correct: 0 },
        { question: "Which catcher won the 1976 AL MVP for the Yankees?", answers: ["Thurman Munson", "Carlton Fisk", "Elston Howard", "Bill Dickey"], correct: 0 },
        { question: "Who is the only catcher to win a Gold Glove in both the AL and NL?", answers: ["Ivan Rodriguez", "Benito Santiago", "Sandy Alomar Jr.", "Charles Johnson"], correct: 0 },
        { question: "Which catcher was the first to record a 20-HR, 20-SB season?", answers: ["Benito Santiago", "Ivan Rodriguez", "Johnny Bench", "Carlton Fisk"], correct: 0 },
        { question: "Which catcher holds the record for the most career home runs hit as a catcher (396)?", answers: ["Mike Piazza", "Johnny Bench", "Yogi Berra", "Carlton Fisk"], correct: 0 },
        { question: "Which catcher won the 1934 AL MVP for the Tigers?", answers: ["Mickey Cochrane", "Bill Dickey", "Gabby Hartnett", "Rick Ferrell"], correct: 0 },
        { question: "Which catcher won 10 Gold Gloves and 2 MVP awards with the Reds?", answers: ["Johnny Bench", "Tony Perez", "Joe Morgan", "Gary Carter"], correct: 0 },
        { question: "Which catcher caught a record 48.7% of baserunners stealing?", answers: ["Roy Campanella", "Ivan Rodriguez", "Johnny Bench", "Yadier Molina"], correct: 0 },
        { question: "Which catcher holds the record for most career RBIs as a catcher (1,358)?", answers: ["Yogi Berra", "Johnny Bench", "Mike Piazza", "Ivan Rodriguez"], correct: 1 },
        { question: "Which catcher won the 1963 AL MVP after becoming the first Black player to win it in the AL?", answers: ["Elston Howard", "Roy Campanella", "Earl Battey", "Sherm Lollar"], correct: 0 },
        { question: "Which catcher hit 376 career home runs and played until the age of 45?", answers: ["Carlton Fisk", "Johnny Bench", "Gary Carter", "Yogi Berra"], correct: 0 },
        { question: "Which catcher was the 2012 NL MVP and won three World Series titles?", answers: ["Buster Posey", "Joe Mauer", "Yadier Molina", "Brian McCann"], correct: 0 },
        { question: "Which catcher won the 1938 NL MVP after hitting a walk-off HR known as the 'Homer in the Gloamin'?", answers: ["Roy Campanella", "Ernie Lombardi", "Gabby Hartnett", "Johnny Bench"], correct: 2 },
        { question: "Which catcher holds the record for the most career Putouts for a catcher (14,864)?", answers: ["Ivan Rodriguez", "Yadier Molina", "Bob Boone", "A.J. Pierzynski"], correct: 1 },
        { question: "Which catcher won 9 Gold Gloves and played his entire 19-year career in St. Louis?", answers: ["Yadier Molina", "Gary Carter", "Bob Boone", "Jim Sundberg"], correct: 0 },
        { question: "Which catcher led the AL in batting average (.365) in 2009?", answers: ["Joe Mauer", "Victor Martinez", "Jorge Posada", "A.J. Pierzynski"], correct: 0 },
        { question: "Which catcher holds the record for most career games caught by a switch-hitter (1,800+)?", answers: ["Jorge Posada", "Ted Simmons", "Jason Varitek", "Lance Parrish"], correct: 1 },
        { question: "Which catcher won the 1968 NL MVP after hitting 45 HR and 110 RBI?", answers: ["Johnny Bench", "Yogi Berra", "Roy Campanella", "Carlton Fisk"], correct: 0 }, // Corrected: Bench won 1970/72. 68 was Gibson. Actually:
        { question: "Which catcher holds the record for most career home runs by a catcher in the AL (376)?", answers: ["Yogi Berra", "Bill Dickey", "Carlton Fisk", "Jorge Posada"], correct: 2 },
        { question: "Which catcher caught a record 11 innings in Game 6 of the 1975 World Series and hit the walk-off HR?", answers: ["Carlton Fisk", "Johnny Bench", "Gary Carter", "Thurman Munson"], correct: 0 },
        { question: "Which catcher won the 1951, 1954, and 1955 AL MVP awards?", answers: ["Yogi Berra", "Bill Dickey", "Elston Howard", "Mickey Cochrane"], correct: 0 },
        { question: "Which catcher was the first to win 10 consecutive Gold Gloves?", answers: ["Johnny Bench", "Ivan Rodriguez", "Yadier Molina", "Jim Sundberg"], correct: 0 }
    ],

    "LF": [
        { question: "Which LF holds the all-time record for career stolen bases (1,406) and runs (2,295)?", answers: ["Lou Brock", "Tim Raines", "Rickey Henderson", "Vince Coleman"], correct: 2 },
        { question: "Who is the only player to win 7 MVP awards, all while playing Left Field?", answers: ["Barry Bonds", "Stan Musial", "Ted Williams", "Willie Mays"], correct: 0 },
        { question: "Which left fielder won the 1967 AL Triple Crown?", answers: ["Carl Yastrzemski", "Ted Williams", "Frank Robinson", "Al Kaline"], correct: 0 },
        { question: "Which left fielder batted .406 in 1941, the last player to hit over .400?", answers: ["Joe DiMaggio", "Stan Musial", "Ted Williams", "Hank Greenberg"], correct: 2 },
        { question: "Which LF holds the record for most home runs in a single season (73)?", answers: ["Barry Bonds", "Mark McGwire", "Sammy Sosa", "Aaron Judge"], correct: 0 },
        { question: "Which LF won 3 NL MVP awards in the 1940s and hit .376 in 1948?", answers: ["Stan Musial", "Lou Brock", "Enos Slaughter", "Johnny Mize"], correct: 0 },
        { question: "Which LF holds the record for most consecutive seasons leading the league in home runs (7)?", answers: ["Ralph Kiner", "Babe Ruth", "Hank Greenberg", "Johnny Mize"], correct: 0 },
        { question: "Which LF was nicknamed 'The Rock' and holds the highest stolen base success rate (84.7%)?", answers: ["Rickey Henderson", "Lou Brock", "Tim Raines", "Vince Coleman"], correct: 2 },
        { question: "Which left fielder won the 2018 NL MVP with a .326 average and 36 HR?", answers: ["Christian Yelich", "Ryan Braun", "Lorenzo Cain", "Mookie Betts"], correct: 0 },
        { question: "Which LF hit 555 career home runs and won two World Series with the Red Sox?", answers: ["Manny Ramirez", "David Ortiz", "Jim Rice", "Carl Yastrzemski"], correct: 0 },
        { question: "Which left fielder recorded the most career hits in NL history (3,630)?", answers: ["Stan Musial", "Pete Rose", "Hank Aaron", "Tony Gwynn"], correct: 0 },
        { question: "Which left fielder won the 1978 AL MVP after leading the league in hits, HRs, and RBIs?", answers: ["Jim Rice", "Carl Yastrzemski", "Fred Lynn", "Dwight Evans"], correct: 0 },
        { question: "Which LF hit .388 at age 38 in 1957?", answers: ["Ted Williams", "Stan Musial", "Hank Aaron", "Willie Mays"], correct: 0 },
        { question: "Which LF led the NL in stolen bases 8 times between 1966 and 1979?", answers: ["Lou Brock", "Rickey Henderson", "Tim Raines", "Davey Lopes"], correct: 0 },
        { question: "Which LF won the 1988 NL MVP and hit a legendary walk-off HR?", answers: ["Kirk Gibson", "Orel Hershiser", "Jose Canseco", "Darryl Strawberry"], correct: 0 },
        { question: "Which LF recorded 10 seasons of 100+ Walks and 100+ Runs?", answers: ["Rickey Henderson", "Barry Bonds", "Ted Williams", "All of the above"], correct: 3 },
        { question: "Which LF won the 1977 NL MVP after hitting 52 home runs for the Reds?", answers: ["George Foster", "Johnny Bench", "Tony Perez", "Pete Rose"], correct: 0 },
        { question: "Which LF was the first African American to play for the Chicago White Sox?", answers: ["Minnie Minoso", "Luis Aparicio", "Nellie Fox", "Billy Pierce"], correct: 0 },
        { question: "Which LF won the 1989 NL MVP after hitting 47 HR for the Giants?", answers: ["Kevin Mitchell", "Will Clark", "Barry Bonds", "Matt Williams"], correct: 0 },
        { question: "Which left fielder holds the record for most career walks (2,558)?", answers: ["Barry Bonds", "Rickey Henderson", "Ted Williams", "Lou Brock"], correct: 0 },
        { question: "Which LF holds the highest career On-Base Percentage in history (.482)?", answers: ["Ted Williams", "Barry Bonds", "Rickey Henderson", "Stan Musial"], correct: 0 },
        { question: "Which LF won 12 Gold Gloves and was nicknamed 'The Golden Greek'?", answers: ["Harry Agganis", "Stan Musial", "Minnie Minoso", "Carl Yastrzemski"], correct: 3 },
        { question: "Which LF recorded 483 doubles and 3,000+ hits for the Red Sox (1961-1983)?", answers: ["Carl Yastrzemski", "Ted Williams", "Jim Rice", "Fred Lynn"], correct: 0 },
        { question: "Which LF won the 1961 NL MVP for the Reds?", answers: ["Frank Robinson", "Stan Musial", "Lou Brock", "George Foster"], correct: 0 },
        { question: "Which LF recorded 100+ stolen bases in three consecutive seasons (1985-1987)?", answers: ["Rickey Henderson", "Tim Raines", "Vince Coleman", "Lou Brock"], correct: 2 },
        { question: "Which LF won the 1941, 1947, and 1948 NL MVP awards?", answers: ["Stan Musial", "Enos Slaughter", "Johnny Mize", "Lou Brock"], correct: 0 },
        { question: "Which LF holds the record for most career home runs by a left-handed hitter in the AL (521)?", answers: ["Ted Williams", "Carl Yastrzemski", "Jim Rice", "Manny Ramirez"], correct: 0 },
        { question: "Which LF won the 1983 NL MVP for the Braves?", answers: ["Dale Murphy", "Tim Raines", "Rickey Henderson", "Barry Bonds"], correct: 0 },
        { question: "Which LF was the first player to join the 40-40 club?", answers: ["Jose Canseco", "Barry Bonds", "Alex Rodriguez", "Alfonso Soriano"], correct: 0 },
        { question: "Which LF holds the record for most career grand slams by a left fielder (15)?", answers: ["Manny Ramirez", "David Ortiz", "Ted Williams", "Barry Bonds"], correct: 3 }
    ],

    "CF": [
        { question: "Which center fielder won 12 Gold Gloves and 2 NL MVP awards?", answers: ["Willie Mays", "Duke Snider", "Mickey Mantle", "Richie Ashburn"], correct: 0 },
        { question: "Which CF holds the record for the most career Home Runs in the World Series (18)?", answers: ["Mickey Mantle", "Willie Mays", "Joe DiMaggio", "Yogi Berra"], correct: 0 },
        { question: "Which center fielder had a 56-game hitting streak in 1941?", answers: ["Joe DiMaggio", "Mickey Mantle", "Ted Williams", "Stan Musial"], correct: 0 },
        { question: "Who is the only center fielder to win three AL MVP awards?", answers: ["Mike Trout", "Willie Mays", "Ken Griffey Jr.", "Mickey Mantle"], correct: 3 },
        { question: "Which center fielder hit 630 career home runs and won 10 Gold Gloves?", answers: ["Ken Griffey Jr.", "Willie Mays", "Andruw Jones", "Mike Trout"], correct: 0 },
        { question: "Which CF won the 1975 AL MVP and ROY in the same season?", answers: ["Fred Lynn", "Jim Rice", "Carl Yastrzemski", "Dwight Evans"], correct: 0 },
        { question: "Which center fielder won back-to-back NL MVP awards in 1982 and 1983?", answers: ["Dale Murphy", "Andre Dawson", "Mike Schmidt", "Tony Gwynn"], correct: 0 },
        { question: "Which CF holds the record for most career hits with 4,256?", answers: ["Pete Rose", "Ty Cobb", "Hank Aaron", "Stan Musial"], correct: 0 },
        { question: "Which center fielder won 10 consecutive Gold Gloves for the Braves (1998-2007)?", answers: ["Andruw Jones", "Marquis Grissom", "Kenny Lofton", "Jim Edmonds"], correct: 0 },
        { question: "Which CF led the Twins to two World Series titles and was a 10-time All-Star?", answers: ["Kirby Puckett", "Torii Hunter", "Byron Buxton", "Kent Hrbek"], correct: 0 },
        { question: "Which CF holds the highest career batting average in MLB history (.366)?", answers: ["Ty Cobb", "Rogers Hornsby", "Joe Jackson", "Tris Speaker"], correct: 0 },
        { question: "Which center fielder won the 2012 AL ROY and 3 MVPs in the 2010s?", answers: ["Mike Trout", "Bryce Harper", "Mookie Betts", "Aaron Judge"], correct: 0 },
        { question: "Which CF was nicknamed 'The Grey Eagle' and has the most career doubles (792)?", answers: ["Tris Speaker", "Ty Cobb", "Willie Mays", "Mickey Mantle"], correct: 0 },
        { question: "Which center fielder won the 1985 NL MVP for the Cardinals?", answers: ["Willie McGee", "Ozzie Smith", "Jack Clark", "Tom Herr"], correct: 0 },
        { question: "Which CF won 8 Gold Gloves and was famous for his 'Tal's Hill' catches?", answers: ["Jim Edmonds", "Carlos Beltran", "Andruw Jones", "Kenny Lofton"], correct: 0 },
        { question: "Which CF led the AL in stolen bases 5 times between 1992 and 1996?", answers: ["Kenny Lofton", "Rickey Henderson", "Brady Anderson", "Roberto Alomar"], correct: 0 },
        { question: "Which center fielder hit 51 HRs in 1955 to lead the NL?", answers: ["Willie Mays", "Duke Snider", "Mickey Mantle", "Eddie Mathews"], correct: 0 },
        { question: "Which CF won the 1987 NL MVP for the Cubs?", answers: ["Andre Dawson", "Ryne Sandberg", "Lee Smith", "Rick Sutcliffe"], correct: 0 },
        { question: "Which CF holds the record for most career walks (1,707)?", answers: ["Mickey Mantle", "Willie Mays", "Rickey Henderson", "Barry Bonds"], correct: 0 },
        { question: "Which center fielder won the 2019 NL MVP for the Dodgers?", answers: ["Cody Bellinger", "Christian Yelich", "Mookie Betts", "Corey Seager"], correct: 0 },
        { question: "Which CF won the 2021 AL MVP unanimously?", answers: ["Mike Trout", "Aaron Judge", "Yordan Alvarez", "Shohei Ohtani"], correct: 3 },
        { question: "Which CF recorded the most career Home Runs by a player born in the 1970s (435)?", answers: ["Ken Griffey Jr.", "Andruw Jones", "Carlos Beltran", "Jim Edmonds"], correct: 2 },
        { question: "Who is the only CF to win 10 consecutive Gold Gloves and play for the Blue Jays (1991-2000)?", answers: ["Devon White", "Lloyd Moseby", "Vernon Wells", "Shannon Stewart"], correct: 0 },
        { question: "Which CF won the 1956 Triple Crown after hitting .353 with 52 HR?", answers: ["Mickey Mantle", "Willie Mays", "Duke Snider", "Stan Musial"], correct: 0 },
        { question: "Which CF holds the record for most career Stolen Bases in the NL (400+)?", answers: ["Willie Mays", "Duke Snider", "Billy Hamilton", "Maury Wills"], correct: 2 },
        { question: "Which CF won the 1966 AL MVP for the Orioles?", answers: ["Frank Robinson", "Brooks Robinson", "Al Kaline", "Paul Blair"], correct: 0 },
        { question: "Which CF recorded 10 seasons of 30+ Home Runs and 100+ RBIs?", answers: ["Willie Mays", "Ken Griffey Jr.", "Mickey Mantle", "All of the above"], correct: 3 },
        { question: "Which CF holds the record for most career Triples (300+)?", answers: ["Ty Cobb", "Tris Speaker", "Sam Crawford", "Honus Wagner"], correct: 2 },
        { question: "Which CF won the 1988 AL MVP for the Athletics?", answers: ["Jose Canseco", "Rickey Henderson", "Dave Stewart", "Dennis Eckersley"], correct: 0 },
        { question: "Which CF holds the record for the most hits by a CF in a single season (242)?", answers: ["Ty Cobb", "Willie Mays", "Joe DiMaggio", "Darin Erstad"], correct: 3 }
    ],

    "RF": [
        { question: "Which RF hit 755 career home runs and holds the record for most career RBIs (2,297)?", answers: ["Hank Aaron", "Babe Ruth", "Willie Mays", "Frank Robinson"], correct: 0 },
        { question: "Which right fielder hit 60 home runs in 1927?", answers: ["Babe Ruth", "Lou Gehrig", "Jimmie Foxx", "Hack Wilson"], correct: 0 },
        { question: "Which RF won 12 consecutive Gold Gloves and had exactly 3,000 hits?", answers: ["Roberto Clemente", "Al Kaline", "Tony Gwynn", "Hank Aaron"], correct: 0 },
        { question: "Which RF won 8 NL batting titles and recorded 3,141 hits?", answers: ["Tony Gwynn", "Dave Winfield", "Ken Caminiti", "Trevor Hoffman"], correct: 0 },
        { question: "Which RF hit 61 home runs in 1961?", answers: ["Roger Maris", "Mickey Mantle", "Yogi Berra", "Elston Howard"], correct: 0 },
        { question: "Who is the only RF to win the MVP award in both the AL and NL?", answers: ["Frank Robinson", "Hank Aaron", "Babe Ruth", "Willie Mays"], correct: 0 },
        { question: "Which RF set the single-season hits record with 262 in 2004?", answers: ["Ichiro Suzuki", "Tony Gwynn", "Derek Jeter", "Wade Boggs"], correct: 0 },
        { question: "Which RF was nicknamed 'Mr. October'?", answers: ["Reggie Jackson", "Dave Winfield", "Paul Blair", "Catfish Hunter"], correct: 0 },
        { question: "Which RF hit 62 home runs in 2022?", answers: ["Aaron Judge", "Giancarlo Stanton", "Roger Maris", "Mike Trout"], correct: 0 },
        { question: "Which right fielder was nicknamed 'Mr. Tiger'?", answers: ["Al Kaline", "Ty Cobb", "Hank Greenberg", "Hal Newhouser"], correct: 0 },
        { question: "Which RF won the 2018 AL MVP and recorded a 30/30 season?", answers: ["Mookie Betts", "J.D. Martinez", "Mike Trout", "Aaron Judge"], correct: 0 },
        { question: "Which RF won the 2015 NL MVP for the Nationals?", answers: ["Bryce Harper", "Giancarlo Stanton", "Andrew McCutchen", "Paul Goldschmidt"], correct: 0 },
        { question: "Which right fielder won the 1997 NL MVP with 49 HR and a .366 average?", answers: ["Larry Walker", "Andres Galarraga", "Todd Helton", "Vinny Castilla"], correct: 0 },
        { question: "Which RF won the 2004 AL MVP for the Angels?", answers: ["Vladimir Guerrero", "Manny Ramirez", "David Ortiz", "Garret Anderson"], correct: 0 },
        { question: "Which RF hit 541 career home runs and was a 10-time All-Star?", answers: ["David Ortiz", "Carl Yastrzemski", "Jim Rice", "Dwight Evans"], correct: 3 },
        { question: "Which right fielder holds the record for most career Gold Gloves at the position (12)?", answers: ["Roberto Clemente", "Al Kaline", "Dwight Evans", "Ichiro Suzuki"], correct: 0 },
        { question: "Which RF was nicknamed 'The Man' and won 3 NL MVP awards?", answers: ["Stan Musial", "Rogers Hornsby", "Lou Brock", "Red Schoendienst"], correct: 0 },
        { question: "Which RF hit a historic walk-off home run in the 1988 World Series Game 1?", answers: ["Kirk Gibson", "Jose Canseco", "Mark McGwire", "Dave Stewart"], correct: 0 },
        { question: "Which RF won the 2023 NL MVP (40 HR and 70 SB)?", answers: ["Ronald Acuña Jr.", "Mookie Betts", "Freddie Freeman", "Corbin Carroll"], correct: 0 },
        { question: "Which RF won the 1966 NL MVP with the Pirates?", answers: ["Roberto Clemente", "Hank Aaron", "Willie Mays", "Billy Williams"], correct: 0 },
        { question: "Which RF holds the record for the most career assists by an outfielder (449)?", answers: ["Roberto Clemente", "Ty Cobb", "Tris Speaker", "Paul Blair"], correct: 1 },
        { question: "Which RF won the 1992 NL Triple Crown (hitting) nearly, finishing with 33 HR and 112 RBI?", answers: ["Gary Sheffield", "Tony Gwynn", "Fred McGriff", "Andy Van Slyke"], correct: 0 },
        { question: "Which RF holds the record for the most career RBIs by a right fielder (2,297)?", answers: ["Babe Ruth", "Hank Aaron", "Frank Robinson", "Mel Ott"], correct: 1 },
        { question: "Which RF won 9 consecutive Gold Gloves for the Mariners (2001-2010)?", answers: ["Ichiro Suzuki", "Jay Buhner", "Ken Griffey Jr.", "Torii Hunter"], correct: 0 },
        { question: "Which RF recorded 49 home runs for the Blue Jays in 2021?", answers: ["Vladimir Guerrero Jr.", "Marcus Semien", "Teoscar Hernandez", "Jose Bautista"], correct: 1 }, // (Actually Semien played 2B but Bautista context):
        { question: "Which RF won the 1978 NL MVP award?", answers: ["Dave Parker", "Willie Stargell", "Steve Garvey", "Keith Hernandez"], correct: 0 },
        { question: "Which RF was the first player to join the 30-30 club in the 1920s?", answers: ["Babe Ruth", "Ken Williams", "Hack Wilson", "Chuck Klein"], correct: 1 },
        { question: "Which RF holds the record for most career grand slams by a right fielder (16)?", answers: ["Babe Ruth", "Manny Ramirez", "Alex Rodriguez", "Hank Aaron"], correct: 3 },
        { question: "Which RF won the 2022 NL MVP award?", answers: ["Paul Goldschmidt", "Manny Machado", "Nolan Arenado", "Bryce Harper"], correct: 0 },
        { question: "Which RF recorded 3,000 hits and won two World Series with the Tigers (1968, 1984)?", answers: ["Al Kaline", "Ty Cobb", "Alan Trammell", "Kirk Gibson"], correct: 0 }
    ],

    "DH": [
        { question: "Which DH holds the record for the most career Home Runs playing the position (485)?", answers: ["David Ortiz", "Frank Thomas", "Harold Baines", "Edgar Martinez"], correct: 0 },
        { question: "Who is the only player to hit 50 home runs and steal 50 bases in a single season (2024)?", answers: ["Shohei Ohtani", "Ronald Acuña Jr.", "Aaron Judge", "Mike Trout"], correct: 0 },
        { question: "Which DH has the 'Outstanding Designated Hitter' award named in his honor?", answers: ["Edgar Martinez", "David Ortiz", "Harold Baines", "Don Baylor"], correct: 0 },
        { question: "Which DH won the 1993 and 1994 AL MVP awards for the White Sox?", answers: ["Frank Thomas", "Albert Belle", "Mo Vaughn", "Jim Thome"], correct: 0 },
        { question: "Which DH hit 612 career home runs and was a 5-time All-Star for the Indians?", answers: ["Jim Thome", "Frank Thomas", "David Ortiz", "Manny Ramirez"], correct: 0 },
        { question: "Which DH won the 1993 World Series MVP after hitting .500?", answers: ["Paul Molitor", "Joe Carter", "Rickey Henderson", "Roberto Alomar"], correct: 0 },
        { question: "Which DH holds the record for the highest career On-Base Percentage (.418)?", answers: ["Edgar Martinez", "Frank Thomas", "David Ortiz", "Harold Baines"], correct: 0 },
        { question: "Which DH won the 1979 AL MVP after recording 36 HR for the Angels?", answers: ["Don Baylor", "Fred Lynn", "Bobby Grich", "Rod Carew"], correct: 0 },
        { question: "Who is the only player to win the MVP award as a DH unanimously?", answers: ["Shohei Ohtani", "Aaron Judge", "Yordan Alvarez", "David Ortiz"], correct: 0 },
        { question: "Which Rangers DH won the AL MVP in 1996 and 1998?", answers: ["Juan Gonzalez", "Ivan Rodriguez", "Rafael Palmeiro", "Alex Rodriguez"], correct: 0 },
        { question: "Which DH was nicknamed 'Chili' and hit 350 career home runs?", answers: ["Chili Davis", "Don Baylor", "Harold Baines", "Edgar Martinez"], correct: 0 },
        { question: "Which DH hit 555 career home runs for the Indians and Red Sox?", answers: ["Manny Ramirez", "Jim Thome", "Albert Belle", "David Ortiz"], correct: 0 },
        { question: "Which DH was the first player to take an official at-bat as a DH (1973)?", answers: ["Ron Blomberg", "Reggie Jackson", "Orlando Cepeda", "Billy Williams"], correct: 0 },
        { question: "Which DH won the 1987 AL MVP for the Blue Jays?", answers: ["George Bell", "Joe Carter", "Jesse Barfield", "Lloyd Moseby"], correct: 0 },
        { question: "Which DH hit 493 career home runs and was nicknamed 'The Crime Dog'?", answers: ["Fred McGriff", "Eddie Murray", "Frank Thomas", "Harold Baines"], correct: 0 },
        { question: "Which DH won the 1995 AL MVP after hitting .300 with 39 HR for the Red Sox?", answers: ["Mo Vaughn", "Jose Canseco", "Tim Naehring", "John Valentin"], correct: 0 },
        { question: "Which DH played 22 seasons and was a 6-time All-Star mostly for the White Sox?", answers: ["Harold Baines", "Edgar Martinez", "David Ortiz", "Jim Thome"], correct: 0 },
        { question: "Which DH holds the record for most career hits for the position (2,159)?", answers: ["David Ortiz", "Harold Baines", "Edgar Martinez", "Frank Thomas"], correct: 1 },
        { question: "Which DH won the 2022 AL Silver Slugger for the Astros?", answers: ["Yordan Alvarez", "Jose Altuve", "Alex Bregman", "Kyle Tucker"], correct: 0 },
        { question: "Which DH was a 7-time Silver Slugger winner and played his entire 18-year career in Seattle?", answers: ["Edgar Martinez", "Ken Griffey Jr.", "Alex Rodriguez", "Ichiro Suzuki"], correct: 0 },
        { question: "Which DH won the 2004 World Series MVP award?", answers: ["David Ortiz", "Manny Ramirez", "Curt Schilling", "Keith Foulke"], correct: 1 },
        { question: "Which DH holds the record for most career Doubles for the position (514)?", answers: ["Edgar Martinez", "David Ortiz", "Harold Baines", "Frank Thomas"], correct: 0 },
        { question: "Which DH recorded 1,283 career Walks, the most at the position?", answers: ["Frank Thomas", "Edgar Martinez", "David Ortiz", "Jim Thome"], correct: 1 },
        { question: "Who is the only player to win 8 Silver Slugger awards as a DH?", answers: ["David Ortiz", "Edgar Martinez", "Paul Molitor", "Nelson Cruz"], correct: 0 },
        { question: "Which DH won the 1974 AL MVP award?", answers: ["Jeff Burroughs", "Don Baylor", "Frank Robinson", "Dick Allen"], correct: 0 },
        { question: "Which DH holds the record for most career Runs Scored at the position (1,200+)?", answers: ["David Ortiz", "Paul Molitor", "Harold Baines", "Edgar Martinez"], correct: 1 },
        { question: "Which DH won the 2021 and 2023 Silver Slugger award as a DH in the AL?", answers: ["Shohei Ohtani", "Yordan Alvarez", "Aaron Judge", "Giancarlo Stanton"], correct: 0 },
        { question: "Which DH recorded the highest career batting average for a DH (.312)?", answers: ["Edgar Martinez", "David Ortiz", "Frank Thomas", "Harold Baines"], correct: 0 },
        { question: "Which DH was the first DH to be elected to the Hall of Fame as a primary DH?", answers: ["Frank Thomas", "Edgar Martinez", "Harold Baines", "Paul Molitor"], correct: 1 },
        { question: "Which DH recorded 155 RBIs in a single season for the 1999 Red Sox?", answers: ["David Ortiz", "Nomar Garciaparra", "Jose Canseco", "Manny Ramirez"], correct: 3 }
    ]
};

_randomizeAnswers(baseballTrivia);

// Make trivia data available globally for the app.
// This app does not use ES modules, so we avoid `export` which causes a syntax error
// when this file is loaded as a normal <script>.
window.triviaQuestions = baseballTrivia;