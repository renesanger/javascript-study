/* 
  Practice on the use of spread
*/

//Create combined with all 6 numbers using spread
const a = [1,2,3];
const b = [4,5,6];

//Build setlist = intro, verse, chorus, outro = in order
const first = ["intro"];
const last = ["outro"];
const middle = ["verse", "chorus"];

//Create config by merging bothe - overrides should win on conflicts
const defaults = { volume:50, muted: false };
const overrides = { volume: 80 };

//creat
