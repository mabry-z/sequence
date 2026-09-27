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
  }
];
