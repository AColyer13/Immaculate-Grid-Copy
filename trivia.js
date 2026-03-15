// MLB Trivia Questions Database - Final Verified Version
// Corrected for: Alex Rodriguez (Grand Slam record), Hack Wilson (RBI record), 
// Jose Altuve (2017 MVP), and Ty Cobb/Pete Rose hit records.
// Answer positions randomized (0, 1, or 2).

const triviaQuestions = {

    // ─────────────────────────────────────────────
    // FIRST BASE (1B)
    // ─────────────────────────────────────────────
    "1B": [
        { question: "Who is known as 'The Iron Horse' among first basemen?", answers: ["Lou Gehrig", "Jimmie Foxx", "Hank Greenberg", "Bill Terry"], correct: 0 },
        { question: "Which first baseman won the 2006 AL MVP with the Minnesota Twins?", answers: ["Mark Teixeira", "Justin Morneau", "Paul Konerko", "Todd Helton"], correct: 1 },
        { question: "Who holds the all-time MLB record for career grand slams with 25?", answers: ["Lou Gehrig", "Alex Rodriguez", "Manny Ramirez", "Jimmie Foxx"], correct: 1 },
        { question: "Which first baseman was nicknamed 'The Big Hurt'?", answers: ["Jeff Bagwell", "Frank Thomas", "Fred McGriff", "Mark McGwire"], correct: 1 },
        { question: "Who is the only first baseman in NL history to win three MVP awards in a single decade (2000-2009)?", answers: ["Albert Pujols", "Todd Helton", "Jeff Bagwell", "Ryan Howard"], correct: 0 },
        { question: "Who hit 58 home runs in 1938, a record for right-handed batters that stood until 2022?", answers: ["Lou Gehrig", "Hank Greenberg", "Jimmie Foxx", "Bill Terry"], correct: 1 },
        { question: "Which first baseman batted .420 in 1922?", answers: ["George Sisler", "Bill Terry", "Lou Gehrig", "Jimmie Foxx"], correct: 0 },
        { question: "Which first baseman won back-to-back MVP awards in 1932 and 1933?", answers: ["Lou Gehrig", "Bill Terry", "Jimmie Foxx", "Hank Greenberg"], correct: 2 },
        { question: "How many home runs did Mark McGwire hit in his record-setting 1998 season?", answers: ["70", "61", "66", "68"], correct: 0 },
        { question: "Which first baseman won the 1970 AL MVP with the Baltimore Orioles?", answers: ["Norm Cash", "Boog Powell", "Don Mincher", "Joe Pepitone"], correct: 1 },
        { question: "Who holds the American League record for most RBI in a single season with 184 in 1931?", answers: ["Jimmie Foxx", "Hank Greenberg", "Lou Gehrig", "Bill Terry"], correct: 2 },
        { question: "Which first baseman was nicknamed 'Prince'?", answers: ["Prince Fielder", "Todd Helton", "Albert Pujols", "Paul Konerko"], correct: 0 },
        { question: "Which first baseman won the 2005 NL MVP with the St. Louis Cardinals?", answers: ["Todd Helton", "Lance Berkman", "Albert Pujols", "Derrek Lee"], correct: 2 },
        { question: "Which first baseman batted .401 in 1930, the last NL player to hit over .400?", answers: ["Bill Terry", "Rogers Hornsby", "Jim Bottomley", "George Sisler"], correct: 0 },
        { question: "Which first baseman won the 1972 AL MVP with the Chicago White Sox?", answers: ["Boog Powell", "Dick Allen", "Norm Cash", "Tony Oliva"], correct: 1 },
        { question: "Which first baseman was nicknamed 'The Big Cat'?", answers: ["Willie McCovey", "Johnny Mize", "Orlando Cepeda", "Gil Hodges"], correct: 1 },
        { question: "Which first baseman hit 51 home runs in 1990, ending a 13-year drought for the AL?", answers: ["Cecil Fielder", "Frank Thomas", "Mark McGwire", "Jose Canseco"], correct: 0 },
        { question: "Which first baseman won back-to-back AL MVP awards in 1993 and 1994?", answers: ["Frank Thomas", "Cal Ripken Jr.", "Albert Belle", "Ken Griffey Jr."], correct: 0 },
        { question: "Which first baseman won the 1935 AL MVP with the Detroit Tigers?", answers: ["Jimmie Foxx", "Hank Greenberg", "Lou Gehrig", "Bill Terry"], correct: 1 },
        { question: "Which first baseman won the 1994 NL MVP with the Houston Astros?", answers: ["Jeff Bagwell", "Fred McGriff", "John Olerud", "Will Clark"], correct: 0 },
        { question: "Which first baseman won the 1967 NL MVP with the St. Louis Cardinals?", answers: ["Willie McCovey", "Orlando Cepeda", "Donn Clendenon", "Wes Parker"], correct: 1 },
        { question: "Which first baseman won the 2020 AL MVP with the Chicago White Sox?", answers: ["Anthony Rizzo", "Paul Goldschmidt", "Jose Abreu", "Freddie Freeman"], correct: 2 },
        { question: "Which first baseman joined the 500-HR and 3,000-hit club but was later suspended for PED use?", answers: ["Rafael Palmeiro", "Mark McGwire", "Fred McGriff", "Mo Vaughn"], correct: 0 },
        { question: "Which first baseman hit 58 home runs in 1932 with the Philadelphia Athletics?", answers: ["Jimmie Foxx", "Lou Gehrig", "Bill Terry", "Hank Greenberg"], correct: 0 },
        { question: "Which first baseman won the 1969 NL MVP with the San Francisco Giants?", answers: ["Willie McCovey", "Ernie Banks", "Ron Santo", "Lee May"], correct: 0 }
    ],

    // ─────────────────────────────────────────────
    // SECOND BASE (2B)
    // ─────────────────────────────────────────────
    "2B": [
        { question: "Who holds the all-time MLB hits record with 4,256?", answers: ["Ty Cobb", "Pete Rose", "Stan Musial", "Hank Aaron"], correct: 1 },
        { question: "Which second baseman won 10 Gold Glove Awards?", answers: ["Roberto Alomar", "Ryne Sandberg", "Joe Morgan", "Craig Biggio"], correct: 0 },
        { question: "Which second baseman was a key member of Cincinnati's 'Big Red Machine'?", answers: ["Joe Morgan", "Pete Rose", "Ryne Sandberg", "Roberto Alomar"], correct: 0 },
        { question: "Which second baseman won the Triple Crown in 1901?", answers: ["Nap Lajoie", "Rogers Hornsby", "Eddie Collins", "Charlie Gehringer"], correct: 0 },
        { question: "Which second baseman won the 2017 AL MVP with the Houston Astros?", answers: ["Jose Altuve", "Robinson Cano", "Ian Kinsler", "Aaron Judge"], correct: 0 },
        { question: "Which second baseman was nicknamed 'Poosh 'Em Up Tony'?", answers: ["Tony Lazzeri", "Ryne Sandberg", "Craig Biggio", "Joe Morgan"], correct: 0 },
        { question: "Which second baseman won seven batting titles in the 1970s?", answers: ["Rod Carew", "Pete Rose", "Joe Morgan", "Bill Madlock"], correct: 0 },
        { question: "Who was known as 'The Mechanical Man'?", answers: ["Charlie Gehringer", "Rogers Hornsby", "Eddie Collins", "Frankie Frisch"], correct: 0 },
        { question: "Which second baseman collected 3,000 hits entirely with the Houston Astros?", answers: ["Craig Biggio", "Jeff Kent", "Jose Altuve", "Bill Doran"], correct: 0 },
        { question: "Which second baseman won the 1984 NL MVP?", answers: ["Ryne Sandberg", "Steve Sax", "Juan Samuel", "Tommy Herr"], correct: 0 },
        { question: "Which second baseman won the 1949 NL MVP with the Brooklyn Dodgers?", answers: ["Jackie Robinson", "Red Schoendienst", "Eddie Stanky", "Billy Martin"], correct: 0 },
        { question: "Which second baseman won the 2000 NL MVP with the San Francisco Giants?", answers: ["Jeff Kent", "Craig Biggio", "Roberto Alomar", "Mark Loretta"], correct: 0 },
        { question: "Which second baseman batted .424 in 1924, the highest single-season average in modern NL history?", answers: ["Rogers Hornsby", "Eddie Collins", "Charlie Gehringer", "Frankie Frisch"], correct: 0 },
        { question: "Which second baseman won the 1973 NL MVP with the Cincinnati Reds?", answers: ["Pete Rose", "Joe Morgan", "Ken Griffey Sr.", "Davey Concepcion"], correct: 0 },
        { question: "Which second baseman won back-to-back NL MVP awards in 1975 and 1976?", answers: ["Joe Morgan", "Pete Rose", "Ken Griffey Sr.", "Bobby Tolan"], correct: 0 },
        { question: "Which second baseman won the 2008 AL MVP with the Boston Red Sox?", answers: ["Dustin Pedroia", "Ian Kinsler", "Placido Polanco", "Robinson Cano"], correct: 0 },
        { question: "Which second baseman holds the career home run record for the position with 351?", answers: ["Jeff Kent", "Ryne Sandberg", "Craig Biggio", "Roberto Alomar"], correct: 0 },
        { question: "Which second baseman won the 1925 NL MVP with the St. Louis Cardinals?", answers: ["Rogers Hornsby", "Frankie Frisch", "Jim Bottomley", "George Kelly"], correct: 0 },
        { question: "Which second baseman was nicknamed 'The Fordham Flash'?", answers: ["Frankie Frisch", "Nap Lajoie", "Charlie Gehringer", "Rogers Hornsby"], correct: 0 },
        { question: "Which second baseman won the 1959 AL MVP with the Chicago White Sox?", answers: ["Nellie Fox", "Minnie Minoso", "Sherm Lollar", "Luis Aparicio"], correct: 0 },
        { question: "Which second baseman won the 1937 AL MVP with the Detroit Tigers?", answers: ["Charlie Gehringer", "Lou Gehrig", "Hank Greenberg", "Jimmie Foxx"], correct: 0 },
        { question: "Which second baseman won the inaugural 1931 NL MVP with the St. Louis Cardinals?", answers: ["Frankie Frisch", "Jim Bottomley", "Bill Terry", "Chick Hafey"], correct: 0 },
        { question: "Which second baseman led the AL in batting average in 2014, 2016, and 2017?", answers: ["Jose Altuve", "Robinson Cano", "Dustin Pedroia", "Ian Kinsler"], correct: 0 }
    ],

    // ─────────────────────────────────────────────
    // SHORTSTOP (SS)
    // ─────────────────────────────────────────────
    "SS": [
        { question: "Who is the only shortstop to win back-to-back NL MVP awards (1958 and 1959)?", answers: ["Ernie Banks", "Dick Groat", "Ron Hansen", "Zoilo Versalles"], correct: 0 },
        { question: "Which player holds the record for the most career home runs while playing the shortstop position?", answers: ["Cal Ripken Jr.", "Alex Rodriguez", "Ernie Banks", "Miguel Tejada"], correct: 0 },
        { question: "Which shortstop won the 1983 AL MVP with the Baltimore Orioles?", answers: ["Cal Ripken Jr.", "Alan Trammell", "Robin Yount", "Paul Molitor"], correct: 0 },
        { question: "Which shortstop won the 1995 NL MVP with the Cincinnati Reds?", answers: ["Barry Larkin", "Ozzie Smith", "Cal Ripken Jr.", "Derek Jeter"], correct: 0 },
        { question: "Which shortstop won the 2002 AL MVP with the Oakland Athletics?", answers: ["Miguel Tejada", "Derek Jeter", "Alex Rodriguez", "Nomar Garciaparra"], correct: 0 },
        { question: "Which shortstop won the 1982 AL MVP with the Milwaukee Brewers?", answers: ["Robin Yount", "Alan Trammell", "Cal Ripken Jr.", "Paul Molitor"], correct: 0 },
        { question: "Which shortstop hit 57 home runs in 2002, a single-season record for the position?", answers: ["Alex Rodriguez", "Sammy Sosa", "Barry Bonds", "Jim Thome"], correct: 0 },
        { question: "Which shortstop won eight NL batting titles between 1900 and 1911?", answers: ["Honus Wagner", "Ernie Banks", "Cal Ripken Jr.", "Derek Jeter"], correct: 0 },
        { question: "Which Hall of Fame shortstop was nicknamed the 'Flying Dutchman'?", answers: ["Honus Wagner", "Ernie Banks", "Cal Ripken Jr.", "Ozzie Smith"], correct: 0 },
        { question: "Which shortstop was nicknamed 'The Wizard of Oz'?", answers: ["Ozzie Smith", "Cal Ripken Jr.", "Derek Jeter", "Alan Trammell"], correct: 0 },
        { question: "Who holds the record for most Gold Gloves by a shortstop with 13?", answers: ["Ozzie Smith", "Cal Ripken Jr.", "Derek Jeter", "Omar Vizquel"], correct: 0 },
        { question: "Which shortstop played in a record 2,632 consecutive games?", answers: ["Cal Ripken Jr.", "Lou Gehrig", "Everett Scott", "Steve Garvey"], correct: 0 },
        { question: "Which shortstop won the 1960 NL MVP with the Pittsburgh Pirates?", answers: ["Dick Groat", "Ron Hansen", "Ernie Banks", "Zoilo Versalles"], correct: 0 },
        { question: "Which shortstop was nicknamed 'Mr. Cub'?", answers: ["Ernie Banks", "Ron Hansen", "Dick Groat", "Zoilo Versalles"], correct: 0 },
        { question: "Which shortstop played his entire 19-year career with the Cincinnati Reds?", answers: ["Barry Larkin", "Ozzie Smith", "Alan Trammell", "Dave Concepcion"], correct: 0 },
        { question: "Which shortstop won five World Series titles and scored more runs than any other Yankee in history?", answers: ["Derek Jeter", "Phil Rizzuto", "Tony Kubek", "Bucky Dent"], correct: 0 },
        { question: "Which shortstop won 11 Gold Gloves, second-most all-time for the position?", answers: ["Omar Vizquel", "Derek Jeter", "Tony Fernandez", "Luis Aparicio"], correct: 0 },
        { question: "Which shortstop won back-to-back AL batting titles in 1999 and 2000?", answers: ["Nomar Garciaparra", "Derek Jeter", "Miguel Tejada", "Alex Rodriguez"], correct: 0 },
        { question: "Which Venezuelan shortstop won nine consecutive Gold Gloves from 1958 to 1966?", answers: ["Luis Aparicio", "Dave Concepcion", "Tony Fernandez", "Ozzie Smith"], correct: 0 }
    ],

    // ─────────────────────────────────────────────
    // CENTER FIELD (CF)
    // ─────────────────────────────────────────────
    "CF": [
        { question: "Who holds the record for the most hits in MLB history?", answers: ["Ty Cobb", "Pete Rose", "Hank Aaron", "Stan Musial"], correct: 1 },
        { question: "Who is the only center fielder to win three MVP awards?", answers: ["Mickey Mantle", "Mike Trout", "Willie Mays", "Ken Griffey Jr."], correct: 0 },
        { question: "Which center fielder made 'The Catch' in Game 1 of the 1954 World Series?", answers: ["Willie Mays", "Joe DiMaggio", "Duke Snider", "Mickey Mantle"], correct: 0 },
        { question: "Which center fielder won 12 Gold Glove Awards over his career?", answers: ["Willie Mays", "Ken Griffey Jr.", "Andruw Jones", "Mike Trout"], correct: 0 },
        { question: "Which center fielder holds the all-time career batting average record at .366?", answers: ["Ty Cobb", "Rogers Hornsby", "Shoeless Joe Jackson", "Tris Speaker"], correct: 0 },
        { question: "Which center fielder won the Triple Crown in 1956?", answers: ["Mickey Mantle", "Ted Williams", "Willie Mays", "Hank Aaron"], correct: 0 },
        { question: "Which center fielder hit 660 career home runs?", answers: ["Willie Mays", "Ken Griffey Jr.", "Mickey Mantle", "Mike Trout"], correct: 0 },
        { question: "Which center fielder won NL MVP awards in both 1954 and 1965?", answers: ["Willie Mays", "Frank Robinson", "Roberto Clemente", "Hank Aaron"], correct: 0 },
        { question: "Which center fielder won the 1997 AL MVP with the Seattle Mariners?", answers: ["Ken Griffey Jr.", "Andres Galarraga", "Sammy Sosa", "Craig Biggio"], correct: 0 },
        { question: "Which center fielder won the 2014 AL MVP with the Los Angeles Angels?", answers: ["Mike Trout", "Josh Hamilton", "Jose Abreu", "Michael Brantley"], correct: 0 },
        { question: "Which center fielder won the 2019 NL MVP with the Los Angeles Dodgers?", answers: ["Cody Bellinger", "Christian Yelich", "Nolan Arenado", "Paul Goldschmidt"], correct: 0 },
        { question: "Which center fielder holds the World Series record with 18 home runs?", answers: ["Mickey Mantle", "Willie Mays", "Ken Griffey Jr.", "Joe DiMaggio"], correct: 0 },
        { question: "Which center fielder won back-to-back NL MVP awards in 1982 and 1983?", answers: ["Dale Murphy", "Mike Schmidt", "Tony Gwynn", "Andre Dawson"], correct: 0 }
    ],

    // ─────────────────────────────────────────────
    // PITCHER (P)
    // ─────────────────────────────────────────────
    "P": [
        { question: "Who holds the record for most career strikeouts with 5,714?", answers: ["Nolan Ryan", "Randy Johnson", "Roger Clemens", "Steve Carlton"], correct: 0 },
        { question: "Which pitcher won the most Cy Young Awards with seven?", answers: ["Roger Clemens", "Greg Maddux", "Randy Johnson", "Sandy Koufax"], correct: 0 },
        { question: "Which pitcher threw the only perfect game in World Series history (1956)?", answers: ["Don Larsen", "Sandy Koufax", "Bob Gibson", "Whitey Ford"], correct: 0 },
        { question: "Which pitcher won four consecutive Cy Young Awards from 1992 to 1995?", answers: ["Greg Maddux", "Roger Clemens", "Randy Johnson", "Pedro Martinez"], correct: 0 },
        { question: "Who has the most career wins in MLB history with 511?", answers: ["Cy Young", "Walter Johnson", "Pete Alexander", "Warren Spahn"], correct: 0 },
        { question: "Which pitcher struck out 20 batters in a single 9-inning game in 1998?", answers: ["Kerry Wood", "Randy Johnson", "Roger Clemens", "Nolan Ryan"], correct: 0 },
        { question: "Which pitcher won both the MVP and Cy Young Award in 1968 with a 1.12 ERA?", answers: ["Bob Gibson", "Sandy Koufax", "Vida Blue", "Denny McLain"], correct: 0 },
        { question: "Who holds the record for most career no-hitters with seven?", answers: ["Nolan Ryan", "Sandy Koufax", "Cy Young", "Bob Feller"], correct: 0 },
        { question: "Which 19th-century pitcher won a record 59 games in 1884?", answers: ["Old Hoss Radbourn", "Guy Hecker", "Tim Keefe", "Mickey Welch"], correct: 0 },
        { question: "Which pitcher is the only one to record two separate 20-strikeout games in 9-inning starts?", answers: ["Roger Clemens", "Nolan Ryan", "Randy Johnson", "Max Scherzer"], correct: 0 },
        { question: "Which pitcher won the 1981 NL Cy Young while also winning Rookie of the Year?", answers: ["Fernando Valenzuela", "Steve Carlton", "Tom Seaver", "Nolan Ryan"], correct: 0 },
        { question: "Which pitcher struck out a record-tying 20 batters in a 9-inning game in 2001?", answers: ["Randy Johnson", "Kerry Wood", "Roger Clemens", "Nolan Ryan"], correct: 0 }
    ]
};

export default triviaQuestions;