/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import MapElem from './mapElem';
// import Enemy from './enemy';
import Wall from './wall';
import Ground from './ground';
import Player from './player';
import Bullet from './bullet';

let game: MapElem[][];
const sketch = (p:p5) => {
  const getPlayerReference = (_game: MapElem[][]) => {
    const playerRow = _game.findIndex((l: MapElem[]) => l.find((j: MapElem) => j instanceof Player));
    const playerIndex = _game[playerRow].findIndex((j: MapElem | Player) => j instanceof Player);
    const player = _game[playerRow][playerIndex];
    return { playerRow, playerIndex, player };
  };
  p.setup = () => {
    p.createCanvas(500, 500);
    fetch('../data/map.csv', {
      headers: { 'content-type': 'text/csv;charset=UTF-8' },
    })
      .then((raw:any) => raw.text())
      .then((data:string) => {
        // Transform the string into a matrix
        game = data.split(/\r?\n/).map((chunk:string) => chunk.split(',').map((obj:string) => {
          switch (obj) {
            case '1':
              return new Wall(0, 0);
            case '3':
              return new Player(0, 0);
            default:
              return new Ground(0, 0);
          }
        }));
      });
  };

  p.draw = () => {
    p.background(80);
    const { player } = getPlayerReference(game);
    for (let i = 0; i < game.length; i += 1) {
      for (let j = 0; j < game[i].length; j += 1) {
        game[i][j].setX(j * 20);
        game[i][j].setY(i * 20);
        game[i][j].show(p);
      }
    }
    if (player instanceof Player) {
      player.getBullets().forEach((bullet: Bullet, bulletIndex: number) => {
        bullet.show(p);
        if (bullet.getX() > 500) {
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
