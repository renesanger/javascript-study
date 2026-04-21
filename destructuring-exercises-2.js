/*
  Destructuring exercises
*/
//Destructure name and city in one line.
const user = { name: "R.J.", age: 27, city: "New York City"};
let {name, city} = user;

//Destructure title as songName and bmp as tempo
const track =  { title: "Midnight", bpm: 92, released: 2024 };
const {title:songName, bpm:tempo}

//Destructure theme and fontSize - give fontSize a default of 16
const settings = { theme: "dark" };
const {theme, fontSize=16} = settings;

//Destructure the first score as top and second as second
const scores = [98, 74, 85, 60, 91];
const [top, second] = scores;

//Skip "red", grab "blue" as second, skip "green", and collect the rest as others
const colors = ["red", "blue", "green", "yellow", "purple"];
const [,second,, ...others] = colors;
