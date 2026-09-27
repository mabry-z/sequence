// One puzzle per day, starting on the launch date set in index.html (LAUNCH).
// List items in the CORRECT order, top to bottom. The game shuffles them.
// "value" is revealed when an item locks in or the game ends.
window.PUZZLES = [
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
