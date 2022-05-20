/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import MapElem from './mapElem';
import Ground from './ground';
import Player from './player';
import Bullet from './bullet';
import getMatrixData from './getMatrixData';
import turnMtrxIntoObj from './turnMtrxIntoObj';
import getPlayerReference from './getPlayerReference';
import updateVisualMtrx from './updateVisualMtrx';

let game: MapElem[][];
const sketch = (p:p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    getMatrixData()
      .then((data: string) => {
        game = turnMtrxIntoObj(data);
      });
  };

  p.draw = () => {
    p.background(80);
    const { player } = getPlayerReference(game);
    updateVisualMtrx(game, p);
    if (player instanceof Player) {
      player.getBullets().forEach((bullet: Bullet, bulletIndex: number) => {
        bullet.show(p);
        if (bullet.getX() > game[0].length * MapElem.size) {
          player.spliceBullet(bulletIndex);
        }
        const callBack = (row:number, col: number) => {
          game[row][col] = new Ground(0, 0);
          player.spliceBullet(bulletIndex);
        };
        bullet.shoot(callBack, game);
      });
    }
  };
  p.keyPressed = () => {
    const { playerRow, playerIndex, player } = getPlayerReference(game);
    if (player instanceof Player) {
      switch (p.key.toLocaleLowerCase()) {
        case 'w':
          game = player.move('UP', playerRow, playerIndex, game);
          break;
        case 's':
          game = player.move('DOWN', playerRow, playerIndex, game);
          break;
        case 'a':
          game = player.move('LEFT', playerRow, playerIndex, game);
          break;
        case 'd':
          game = player.move('RIGHT', playerRow, playerIndex, game);
          break;
        case 'r':
          player.shoot();
          break;
        default:
          break;
      }
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
