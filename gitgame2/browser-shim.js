import labyrinthos from './lib/labyrinthos.js';
import Tile from './lib/Tile.js';
import TileMap from './lib/TileMap.js';

let mazes = labyrinthos.mazes;
let terrains = labyrinthos.terrains;
let shapes = labyrinthos.shapes;
let utils = labyrinthos.utils;

export {
  labyrinthos,
  TileMap,
  Tile,
  mazes,
  terrains,
  shapes,
  utils
};