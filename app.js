const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  
  //Exercise 1:
  //How can I find the starters Pokemons?
  //loop it through the pokemon length
  for (let i = 0; i < pokemon.length; i++) { 
    if (pokemon[i].starter === true) {
        //console.log(pokemon[i]);
    }};

//1- Log JUST the name of the Pokemon with the number 59 using the index of the Pokemon in the array.
//console.log(pokemon[58].name);

//Exercise 2:
//console.log(game);

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here:
*/
game.difficulty = "Easy"
//console.log(game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/
for ( let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter === true){
        //console.log(pokemon[i]); //Bulbasaur, Charmander, Squirtle, Pikachu
    }}
//push it to the party array:
game.party.push(pokemon[24]); //Pikachu
//console.log(game);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/
game.party.push(pokemon[39], pokemon[142], pokemon[149]); //Wigglytuff, Snorlax and Mewtwo.
//console.log(game);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
Solve Exercise 6 here:
*/
for ( let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].difficulty < 3) {
        game.gyms[i].completed = true;
    }};
//console.log(game);





