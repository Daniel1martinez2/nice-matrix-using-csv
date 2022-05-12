import './style.css';
import p5 from 'p5';
import Enemy from './enemy';
import Player from './player';

const enemys:Enemy[] = [];
const player:Player = new Player();

const sketch = (p:p5) => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(500, 500);
    for (let index = 0; index < 20; index += 1) {
      enemys.push(new Enemy(Math.random() * 500, Math.random() * 500));
    }
  };

  function validateContact(each:Enemy):boolean {
    const minDistance = (each.getSize() + player.getSize()) / 2;
    const isClose = p.dist(each.getX(), each.getY(), player.getX(), player.getY()) < minDistance;
    const isBigger = player.getLevel() > each.getLevel();
    return isClose && isBigger;
  }

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(80);
    p.fill(255, 255, 0);
    p.ellipse(200, 200, 50, 50);
    enemys.forEach((eachEnemy, index) => {
      eachEnemy.show(p);
      if (validateContact(eachEnemy)) {
        enemys.splice(index, 1);
      }
    });
    player.show(p);
  };

  // eslint-disable-next-line no-param-reassign
  p.keyPressed = () => {
    switch (p.key.toLocaleLowerCase()) {
      case 'w':
        player.move('UP');
        break;
      case 's':
        player.move('DOWN');
        break;
      case 'a':
        player.move('LEFT');
        break;
      case 'd':
        player.move('RIGHT');
        break;
      default:
        break;
    }
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
