const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // Create players using for loop
    // Type your code here
    var playersData = [];
    for (let i = 0; i < players.length; i++) {
        if (i % 2 == 0) {
            var obj = {
                name: players[i],
                strength: 100,
                image: "./images/super-" + (i + 1) + ".png",
                type: "hero"
            };
            playersData.push(obj);
        }
        else {
            var obj = {

                name: players[i],
                strength: 100,
                image: "./images/super-" + (i + 1) + ".png",
                type: "villain"
            };
            playersData.push(obj);
        }
    }


    return playersData;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.random(1, 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    //console.log(type);
    for (let i = 0; i < players.length; i++) {

        //if (players[i].type == type) {

        //console.log(players[i].type);
        fragment += `<div class="player">
             <img src="${players[i].image}" alt="">
             <div class="name">${players[i].name}</div>
             <div class="strength">${players[i].strength}</div>
             </div>`
        //}
    }
    console.log("fucntion call and ended");
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}