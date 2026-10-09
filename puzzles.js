// One puzzle per day, starting on the launch date set in index.html (LAUNCH).
// List items in the CORRECT order, top to bottom. The game shuffles them.
// "value" is revealed when an item locks in or the game ends.
window.PUZZLES = [
  // Week 1
  {
    prompt: "Order by year",
    top: "Earliest", bottom: "Latest",
    items: [
      ["Declaration of Independence signed", "1776"],
      ["Titanic sinks", "1912"],
      ["First Moon landing", "1969"],
      ["Berlin Wall falls", "1989"],
      ["First iPhone released", "2007"]
    ],
    note: "The first iPhone arrived 38 years after the first Moon landing."
  },
  {
    prompt: "Order by typical adult weight",
    top: "Lightest", bottom: "Heaviest",
    items: [
      ["House cat", "8\u201311 lb"],
      ["Gray wolf", "60\u2013120 lb"],
      ["Grizzly bear", "300\u2013800 lb"],
      ["Giraffe", "1,500\u20133,000 lb"],
      ["African elephant", "6,000\u201314,000 lb"]
    ],
    note: "A big African elephant can outweigh a thousand house cats."
  },
  {
    prompt: "Order by length",
    top: "Shortest", bottom: "Longest",
    items: [
      ["Tennis court", "78 ft"],
      ["NBA basketball court", "94 ft"],
      ["Olympic swimming pool", "164 ft"],
      ["Football field, with end zones", "360 ft"],
      ["Titanic", "882 ft"]
    ],
    note: "The Titanic was longer than two football fields laid end to end."
  },
  {
    prompt: "Order by year published",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Pride and Prejudice", "1813"],
      ["Moby-Dick", "1851"],
      ["The Great Gatsby", "1925"],
      ["The Hobbit", "1937"],
      ["To Kill a Mockingbird", "1960"]
    ],
    note: "Pride and Prejudice is 147 years older than To Kill a Mockingbird."
  },
  {
    prompt: "Order by year founded",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Baseball's National League", "1876"],
      ["NHL", "1917"],
      ["NFL", "1920"],
      ["NBA", "1946"],
      ["MLS", "1993"]
    ],
    note: "The NHL is three years older than the NFL."
  },
  {
    prompt: "Order by year took office",
    top: "Earliest", bottom: "Latest",
    items: [
      ["Woodrow Wilson", "1913"],
      ["Herbert Hoover", "1929"],
      ["Harry Truman", "1945"],
      ["Dwight Eisenhower", "1953"],
      ["Lyndon Johnson", "1963"]
    ],
    note: "Truman became president in April 1945, less than a month before the war in Europe ended."
  },
  {
    prompt: "Order by atomic number",
    top: "Lowest", bottom: "Highest",
    items: [
      ["Carbon", "6"],
      ["Oxygen", "8"],
      ["Aluminum", "13"],
      ["Iron", "26"],
      ["Silver", "47"]
    ],
    note: "Silver's symbol, Ag, comes from its Latin name, argentum."
  },
  // Week 2 (the original preview set)
  {
    prompt: "Order by year completed",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Brooklyn Bridge", "1883"],
      ["Statue of Liberty", "1886"],
      ["Empire State Building", "1931"],
      ["Golden Gate Bridge", "1937"],
      ["Gateway Arch", "1965"]
    ],
    note: "The Gateway Arch was finished 82 years after the Brooklyn Bridge."
  },
  {
    prompt: "Order by diameter",
    top: "Smallest", bottom: "Largest",
    items: [
      ["Mercury", "3,032 mi"],
      ["Mars", "4,212 mi"],
      ["Earth", "7,918 mi"],
      ["Uranus", "31,518 mi"],
      ["Jupiter", "86,881 mi"]
    ],
    note: "About 11 Earths would fit side by side across Jupiter."
  },
  {
    prompt: "Order by year invented",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Printing press", "c. 1440"],
      ["Telescope", "1608"],
      ["Telephone", "1876"],
      ["Airplane", "1903"],
      ["Electronic television", "1927"]
    ],
    note: "Gutenberg's press came almost five centuries before electronic TV."
  },
  {
    prompt: "Order by height",
    top: "Shortest", bottom: "Tallest",
    items: [
      ["Statue of Liberty", "305 ft"],
      ["Big Ben's Elizabeth Tower", "316 ft"],
      ["Great Pyramid of Giza", "454 ft"],
      ["Eiffel Tower", "1,083 ft"],
      ["Burj Khalifa", "2,717 ft"]
    ],
    note: "The Burj Khalifa is about two and a half Eiffel Towers tall."
  },
  {
    prompt: "Order by US release year",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Nintendo Entertainment System", "1985"],
      ["Game Boy", "1989"],
      ["PlayStation", "1995"],
      ["Nintendo 64", "1996"],
      ["Xbox", "2001"]
    ],
    note: "PlayStation and Nintendo 64 reached US stores about a year apart."
  },
  {
    prompt: "Order by date of statehood",
    top: "Earliest", bottom: "Latest",
    items: [
      ["Delaware", "Dec 1787"],
      ["Texas", "Dec 1845"],
      ["California", "Sep 1850"],
      ["Alaska", "Jan 1959"],
      ["Hawaii", "Aug 1959"]
    ],
    note: "Alaska and Hawaii both joined in 1959, about seven months apart."
  },
  {
    prompt: "Order by year founded",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Harvard", "1636"],
      ["Yale", "1701"],
      ["Princeton", "1746"],
      ["Columbia", "1754"],
      ["Brown", "1764"]
    ],
    note: "Harvard is 65 years older than Yale."
  },
  // Week 3 (Mon Oct 12 – Sun Oct 18)
  {
    prompt: "Order by number of legs",
    top: "Fewest", bottom: "Most",
    items: [
      ["Chicken", "2"],
      ["Horse", "4"],
      ["Ant", "6"],
      ["Spider", "8"],
      ["Lobster", "10"]
    ],
    note: "A lobster's two big claws count as two of its ten legs."
  },
  {
    prompt: "Order by year released",
    top: "Oldest", bottom: "Newest",
    items: [
      ["The Wizard of Oz", "1939"],
      ["Star Wars", "1977"],
      ["E.T. the Extra-Terrestrial", "1982"],
      ["Jurassic Park", "1993"],
      ["Toy Story", "1995"]
    ],
    note: "Toy Story was the first feature film made entirely with computer animation."
  },
  {
    prompt: "Order by total area",
    top: "Smallest", bottom: "Largest",
    items: [
      ["Rhode Island", "1,545 sq mi"],
      ["Florida", "65,758 sq mi"],
      ["California", "163,695 sq mi"],
      ["Texas", "268,596 sq mi"],
      ["Alaska", "665,384 sq mi"]
    ],
    note: "Alaska is more than twice the size of Texas."
  },
  {
    prompt: "Order by top running speed",
    top: "Slowest", bottom: "Fastest",
    items: [
      ["Usain Bolt", "about 28 mph"],
      ["Grizzly bear", "about 35 mph"],
      ["Greyhound", "about 45 mph"],
      ["Pronghorn", "about 55 mph"],
      ["Cheetah", "about 70 mph"]
    ],
    note: "A cheetah is faster, but a pronghorn can hold its top speed for much longer."
  },
  {
    prompt: "Order by year first held",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Kentucky Derby", "1875"],
      ["Wimbledon", "1877"],
      ["Modern Olympic Games", "1896"],
      ["Tour de France", "1903"],
      ["FIFA World Cup", "1930"]
    ],
    note: "The Kentucky Derby is two years older than Wimbledon."
  },
  {
    prompt: "Order by river length",
    top: "Shortest", bottom: "Longest",
    items: [
      ["Thames", "215 mi"],
      ["Rhine", "765 mi"],
      ["Danube", "1,770 mi"],
      ["Mississippi", "2,340 mi"],
      ["Yangtze", "3,915 mi"]
    ],
    note: "The Danube flows through ten countries, more than any other river."
  },
  {
    prompt: "Order by year",
    top: "Earliest", bottom: "Latest",
    items: [
      ["Magna Carta sealed", "1215"],
      ["Fall of Constantinople", "1453"],
      ["Columbus reaches the Americas", "1492"],
      ["Luther posts his 95 Theses", "1517"],
      ["Shakespeare is born", "1564"]
    ],
    note: "Columbus sailed 39 years after Constantinople fell."
  },
  // Week 4 (Mon Oct 19 – Sun Oct 25)
  {
    prompt: "Order by number of sides",
    top: "Fewest", bottom: "Most",
    items: [
      ["Yield sign", "3"],
      ["Chessboard square", "4"],
      ["Baseball home plate", "5"],
      ["Honeycomb cell", "6"],
      ["Stop sign", "8"]
    ],
    note: "Home plate is a pentagon: a square with two corners cut off into a point."
  },
  {
    prompt: "Order by year founded",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Nintendo", "1889"],
      ["Ford", "1903"],
      ["Disney", "1923"],
      ["Apple", "1976"],
      ["Google", "1998"]
    ],
    note: "Nintendo started out making playing cards."
  },
  {
    prompt: "Order by maximum depth",
    top: "Shallowest", bottom: "Deepest",
    items: [
      ["Lake Superior", "1,332 ft"],
      ["Lake Tahoe", "1,645 ft"],
      ["Crater Lake", "1,943 ft"],
      ["Lake Baikal", "5,387 ft"],
      ["Mariana Trench", "about 36,000 ft"]
    ],
    note: "Crater Lake, in Oregon, is the deepest lake in the United States."
  },
  {
    prompt: "Order by year first aired",
    top: "Oldest", bottom: "Newest",
    items: [
      ["I Love Lucy", "1951"],
      ["Star Trek", "1966"],
      ["Cheers", "1982"],
      ["The Simpsons", "1989"],
      ["Friends", "1994"]
    ],
    note: "The Simpsons is the longest-running scripted primetime series in American TV history."
  },
  {
    prompt: "Order by players on the field per team",
    top: "Fewest", bottom: "Most",
    items: [
      ["Basketball", "5"],
      ["Ice hockey", "6"],
      ["Baseball", "9"],
      ["Soccer", "11"],
      ["Rugby union", "15"]
    ],
    note: "Rugby league plays with 13 per side, two fewer than rugby union."
  },
  {
    prompt: "Order by year discovered",
    top: "Earliest", bottom: "Latest",
    items: [
      ["Uranus", "1781"],
      ["Ceres", "1801"],
      ["Neptune", "1846"],
      ["Pluto", "1930"],
      ["Pluto's moon Charon", "1978"]
    ],
    note: "Neptune was found with math first: astronomers predicted where it would be before anyone saw it."
  },
  {
    prompt: "Order by when completed",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Great Pyramid of Giza", "c. 2560 BC"],
      ["Parthenon", "432 BC"],
      ["Colosseum", "AD 80"],
      ["Hagia Sophia", "AD 537"],
      ["Taj Mahal", "c. 1653"]
    ],
    note: "The Great Pyramid was already over 2,000 years old when the Parthenon was finished."
  },
  // Week 5 (Mon Oct 26 – Sun Nov 1)
  {
    prompt: "Order by diameter",
    top: "Smallest", bottom: "Largest",
    items: [
      ["Dime", "0.705 in"],
      ["Penny", "0.750 in"],
      ["Nickel", "0.835 in"],
      ["Quarter", "0.955 in"],
      ["Half dollar", "1.205 in"]
    ],
    note: "The dime is the smallest US coin, even though it's worth more than a penny or a nickel."
  },
  {
    prompt: "Order by year released",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Abbey Road, The Beatles", "1969"],
      ["Rumours, Fleetwood Mac", "1977"],
      ["Thriller, Michael Jackson", "1982"],
      ["Nevermind, Nirvana", "1991"],
      ["21, Adele", "2011"]
    ],
    note: "Thriller is widely cited as the best-selling album of all time."
  },
  {
    prompt: "Order by number of strings",
    top: "Fewest", bottom: "Most",
    items: [
      ["Ukulele", "4"],
      ["Banjo", "5"],
      ["Guitar", "6"],
      ["Concert harp", "47"],
      ["Grand piano", "about 230"]
    ],
    note: "A piano has 88 keys but about 230 strings. Most notes use two or three strings."
  },
  {
    prompt: "Order by year launched",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Amazon.com", "1995"],
      ["Wikipedia", "2001"],
      ["Facebook", "2004"],
      ["YouTube", "2005"],
      ["Instagram", "2010"]
    ],
    note: "YouTube's first video, “Me at the zoo,” was uploaded in April 2005."
  },
  {
    prompt: "Order by length of pregnancy",
    top: "Shortest", bottom: "Longest",
    items: [
      ["Mouse", "about 20 days"],
      ["Dog", "about 63 days"],
      ["Human", "about 9 months"],
      ["Horse", "about 11 months"],
      ["African elephant", "about 22 months"]
    ],
    note: "Elephants carry their calves for nearly two years, longer than any other land mammal."
  },
  {
    prompt: "Halloween: order by year released",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Psycho", "1960"],
      ["Night of the Living Dead", "1968"],
      ["The Exorcist", "1973"],
      ["Halloween", "1978"],
      ["A Nightmare on Elm Street", "1984"]
    ],
    note: "Halloween was made for about $300,000 and became one of the most profitable independent films ever."
  },
  {
    prompt: "Order by year women won the national vote",
    top: "Earliest", bottom: "Latest",
    items: [
      ["New Zealand", "1893"],
      ["Finland", "1906"],
      ["United States", "1920"],
      ["France", "1944"],
      ["Switzerland", "1971"]
    ],
    note: "One Swiss canton didn't let women vote in local elections until 1990."
  },
  // Week 6 (Mon Nov 2 – Sun Nov 8)
  {
    prompt: "Order by ball diameter",
    top: "Smallest", bottom: "Largest",
    items: [
      ["Golf ball", "1.68 in"],
      ["Tennis ball", "about 2.6 in"],
      ["Baseball", "about 2.9 in"],
      ["Soccer ball", "about 8.7 in"],
      ["Basketball", "about 9.4 in"]
    ],
    note: "A regulation NBA basketball is 29.5 inches around."
  },
  {
    prompt: "Order by year opened",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Disneyland", "1955"],
      ["Magic Kingdom", "1971"],
      ["Epcot", "1982"],
      ["Tokyo Disneyland", "1983"],
      ["Disneyland Paris", "1992"]
    ],
    note: "Tokyo Disneyland was the first Disney park outside the United States."
  },
  {
    prompt: "Order by temperature",
    top: "Coldest", bottom: "Hottest",
    items: [
      ["Dry ice", "−109°F"],
      ["Water freezes", "32°F"],
      ["Normal body temperature", "98.6°F"],
      ["Water boils at sea level", "212°F"],
      ["Lead melts", "621°F"]
    ],
    note: "Dry ice skips the liquid stage and turns straight into gas."
  },
  {
    prompt: "Order by Broadway opening year",
    top: "Oldest", bottom: "Newest",
    items: [
      ["Oklahoma!", "1943"],
      ["West Side Story", "1957"],
      ["Cats", "1982"],
      ["The Phantom of the Opera", "1988"],
      ["Hamilton", "2015"]
    ],
    note: "The Phantom of the Opera ran 35 years on Broadway, the longest run in its history."
  },
  {
    prompt: "Order by wingspan",
    top: "Narrowest", bottom: "Widest",
    items: [
      ["American robin", "about 1.3 ft"],
      ["Barn owl", "about 3.3 ft"],
      ["Bald eagle", "about 7 ft"],
      ["Andean condor", "about 10 ft"],
      ["Wandering albatross", "about 11 ft"]
    ],
    note: "The wandering albatross has the widest wingspan of any living bird."
  },
  {
    prompt: "Order by date",
    top: "Earliest", bottom: "Latest",
    items: [
      ["JFK assassinated", "Nov 1963"],
      ["The Beatles on Ed Sullivan", "Feb 1964"],
      ["First Super Bowl", "Jan 1967"],
      ["Woodstock", "Aug 1969"],
      ["Nixon resigns", "Aug 1974"]
    ],
    note: "The Beatles played Ed Sullivan less than three months after JFK's assassination."
  },
  {
    prompt: "Order by latitude",
    top: "Farthest north", bottom: "Farthest south",
    items: [
      ["London", "51.5° N"],
      ["Paris", "48.9° N"],
      ["Seattle", "47.6° N"],
      ["Rome", "41.9° N"],
      ["New York City", "40.7° N"]
    ],
    note: "Paris is farther north than Seattle, and Rome is farther north than New York."
  }
];
