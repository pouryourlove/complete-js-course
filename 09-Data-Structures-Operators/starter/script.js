'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({starterIndex =1, mainIndex=0,time='20:00',address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient , ...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
}

//real world exmaple
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// console.log(ingredients);
 
// restaurant.orderPasta(...ingredients);//seperate by commas

//objects

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe'
}
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex:2
})

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex:1
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories)

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

//default values
// const { menu = [], starterMenu: starters = [] } = restaurant
// console.log(menu, starters)

//mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); //js expects a code block
// console.log(a,b);

// //nested objects

// const { fri: {open,close} } = openingHours
// console.log(open, close);

// const {
//   fri: { open: o, close:c },
// } = openingHours;
// console.log(o, c);



// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x,y,z);
// console.log(arr); //doesn't destory the original array

// const [first, second] = restaurant.categories;
// console.log(first,second)

// let [main, , secondary] = restaurant.categories;
// console.log(main,secondary);

//switching varaibles
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

// [main, secondary] = [secondary, main]//reassign the value
// console.log(main, secondary)

// console.log(restaurant.order(2,0)) //['Garlic Bread', 'Pizza']

// //receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse)

// //nested destructring
// const nested = [2,4,[5,6]];
// // const [i, ,j] = nested;
// // console.log(i,j)//2,[5,6]

// const [i, ,[j,k]] = nested;
// console.log(i,j,k)//2 5 6

// //default values
// const [p=1,q=1,r=1] = [8,9]
// console.log(p,q,r); //8,9,undefined

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

// const [firstBook, secondBook] = books

// const [ , ,thirdBook] = books

// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

// const [[, rating], [, ratingsCount]] = ratings
// console.log(rating)
// console.log(ratingsCount)

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr)

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// //takes all the elements from the array. and it doesn't create new variable

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //iterables: things like all arrays,strings,maps,sets but not object
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.']
// console.log(letters);
// console.log(...str);
// console.log('j', 'o');
// // console.log(`${...str}`); //doesn't work
// //multiple values separated by a comma are usually only expected
// //when we pass arguments into a function or when we build a new array

//1)destructuring

//spread: unpack array into elements
//rest: pack elements into array

//spread, because on RIGHT side of =
// const arr = [1,2,...[3,4]]


// //rest, because on LEFT side of =
// const [a,b, ...others] = [1,2,3,4,5]
// console.log(a,b,others)// 1,2,[3,4,5]


// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu
// ]

// console.log(pizza, risotto, otherFood)
// //pizza, risotto, ['Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// //Objects
// const {sat,...weekdays} = restaurant.openingHours;
// console.log(weekdays)
// //fri: {open: 11, close: 23}thu: {open: 12, close: 22}

// // 2) functions

// const add = function(...numbers){
//   let sum = 0;
//   for(let i=0; i<numbers.length; i++){
//     sum += numbers[i]
//   }
//   console.log(sum)
// }

// add(2,3)
// add (5,3,7,2)
// add(8,2,5,3,2,1,4)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('mushrooms','onion','olives','spinach')
// restaurant.orderPizza('mushrooms')

// //use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Lingling')//3
// //if the first value is truthy value, it will immidately return the first value

// console.log(''|| 'Lingling')//lingling
// console.log(true|| 0)//true
// console.log(undefined|| null)//null

// console.log(undefined || 0 || '' || 'hello'||null)//hello
// //first truthy vlaue

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log('0일때>>>>>',guests)

// //Nullish: null and undefined (not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log('??>>>>',guestCorrect)


// const guests1 = restaurant.numGuests? restaurant.numGuests : 10;
// console.log(guests1)//10 

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)

// //if the numGuests is 0, the result is 10 so we need to fix it

// console.log('----and---')

// console.log(0 && 'Lingling') //0
// console.log(7 && 'Lingling') //Lingling 

// //if the first value is truthy then we get the last one.
// //if the first value is falsy then we get the first one.

// console.log('hello' && 23 && null && 'Lingling')

// // practical example
// if(restaurant.orderPizza){
//   restaurant.orderPizza('mushrooms','spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach')

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi'
// }

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest2.owner = rest1.owner && '<ANONYMOUS>'; //undefined
// // rest2.owner = rest2.owner && '<ANONYMOUS>';//<ANONYMOUS>
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1) //{name: 'Capri', numGuests: 20}
// console.log(rest2) //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}


//coding challenge 1

///////////////////////////////////////
// Coding Challenge #1
 
/*
We're building a football betting app (soccer for my American friends 😅)!
 
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
 





TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 
GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1. Create one player array for each team (variables 'players1' and 'players2')

// const [players1, players2] = game.players
// console.log(players1, players2)

// //2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk,...fieldPlayers] = players1;
// console.log(gk,fieldPlayers)

// //3. Create an array 'allPlayers' containing all players of both teams (22 players)

// const allPlayers = [...players1,...players2];

// //4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1,'Thiago','Coutinho','Perisic']
// console.log(players1Final)

// //5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// // const {odd:{team1, x:draw, team2}} = game;

// const {team1, x:draw, team2} = game.odds
// console.log(team1,draw,team2)

// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// function printGoals(...players){
//     console.log(`${players.length} goals were scored`)
// }

// printGoals(...game.scored)


// //7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// team1 < team2 && console.log('team1 is more likely to win')
// team1 > team2 && console.log('team2 is more likely to win')


// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

// for(const item of menu) console.log(item);

// // for(const item of menu.entries()){
// //   console.log(item)
// //   console.log(`${item[0] + 1}: ${item[1]}`)
// // }

// for(const [i,el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`)
// }

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

//with optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

//only if mon is there then open will be read. otherwise return undefined immidately

//example
const days = ['mon','tue','wed','thu','fri','sat','sun']

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`on ${day}, we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0,1)?? 'method does not exist')
console.log(restaurant.orderResotto?.(0,1)?? 'method does not exist')

//arrays
const users = [
  {name: 'Lingling',
    email: 'hello@lingling.io'
  }
]

console.log(users[0]?.name ?? 'User array empty ')

// Property names
const properties = Object.keys(openingHours)
console.log(properties)// ['thu', 'fri', 'sat']

let openStr = `we are open on ${properties.length} days:`
for(const day of properties){
  openStr += `${day},`
}
console.log(openStr)

//property values
const values = Object.values(openingHours)
console.log(values)

//Entire object
const entries = Object.entries(openingHours)
console.log(entries)

//[key,value]
for(const [day, {open, close}] of entries){
  console.log(`On ${day} we open at ${open} and close at ${close}`)
}

// for(const day of Object.keys(openingHours)){
//   console.log(day);//thu,fri,sat
// }

//coding challenge 2

/*
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:




GOOD LUCK 😀

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.  Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [i,player] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${player}`)
}

//2.  Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

//loop the object

const objectValues = Object.values(game.odds)
console.log(objectValues)
let sum = 0
for(const value of objectValues){
  sum += value
}

console.log(sum / objectValues.length);

/*3.  Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉*/

for(const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw':`victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}

/*
4.  Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2
} 
*/

const scorers = {};
for (const player of game.scored) scorers[player] = scorers[player] + 1 || 1;

const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pasta','Pizza'])

console.log(ordersSet)

console.log(new Set('Lingling'))

console.log(ordersSet.size) //3
console.log(ordersSet.has('Pizza'))//true
console.log(ordersSet.has('Bread'))//false
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
ordersSet.delete('Risotto')
// ordersSet.clear()
console.log(ordersSet);

for(const order of ordersSet) console.log(order)

//remove duplicate values of array

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique)
//converse set into array
console.log(new Set(staff).size)

console.log(new Set('Lingling').size)


//in sets, there is no index. there is no way to getting data out of the sets
