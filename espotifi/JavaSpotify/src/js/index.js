import Player from './Player.js';

import songs from '../assets/songs/*.mp3';

const map = {};

let aux = 1;
for (var key of Object.keys(songs)) {
    map[`.item-${aux}`] = songs[key];
    aux++;
}
let player = new Player(map);