/* 
  Practice on the use of spread
*/

//Create combined with all 6 numbers using spread
const a = [1,2,3];
const b = [4,5,6];
const combined = [...a, ...b];

//Build setlist = intro, verse, chorus, outro = in order
const first = ["intro"];
const last = ["outro"];
const middle = ["verse", "chorus"];
const setlist = [...first, ...middle, ...last];

//Create config by merging both - overrides should win on conflicts
const defaults = { volume:50, muted: false };
const overrides = { volume: 80 };
const config = [...defaults, ...overrides];

//create updatedArtist - same fields, but add verified: true
const artist = { name: "R.J.", genre: "hip-hop" };
const updatedArtists = { ...artist, verified: true };

//Use Math.max() with spread to get the largest number. Store it in biggest.
const nums = [3 ,7, 2, 9, 1];
const biggest = Math.max(...nums);



/*
  Without spread:
    const setlist = [first, middle, last];
    // → [ ["intro"], ["verse", "chorus"], ["outro"] ]
    
    You get an array of arrays — 3 nested elements, each still wrapped in their own [].
  With spread:
    const setlist = [...first, ...middle, ...last];
    // → ["intro", "verse", "chorus", "outro"]
    
    The ... unpacks each array, pouring its individual items into the new one — a single flat array of 4 strings
*/

