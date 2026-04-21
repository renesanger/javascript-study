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

