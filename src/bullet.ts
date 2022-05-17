import p5 from 'p5';
import MapElem from './mapElem';
import Wall from './wall';
// import Ground from './ground';

export default class Bullet {
  protected x: number = 0;

  protected y: number = 0;

  protected size: number = 10;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.size = 10;
  }

  show(p:p5) {
    p.fill(0);
    p.circle(this.x + 10, this.y + 10, this.size);
  }

  shoot(callBack: Function, game: MapElem[][]) {
    this.x += 1;
    game.forEach((chunk: MapElem[], i: number) => {
      chunk.forEach((obj: MapElem, j: number) => {
        if (obj instanceof Wall) {
          if (obj.getX() === this.x && obj.getY() === this.y) {
            callBack(i, j);
          }
        }
      });
    });
  }

  getX():number {
    return this.x;
  }

  getY():number {
    return this.y;
  }

  getSize():number {
    return this.size;
  }

  setX(newX:number):void {
    this.x = newX;
  }

  setY(newY:number):void {
    this.y = newY;
  }
}
