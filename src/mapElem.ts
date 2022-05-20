import p5 from 'p5';

export default abstract class MapElem {
  protected x: number = 0;

  protected y: number = 0;

  static size: number = 20;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    MapElem.size = 20;
  }

  show(p:p5) {
    p.fill(this.setColor().r, this.setColor().g, this.setColor().b);
    p.rect(this.x, this.y, MapElem.size);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
  }

  abstract setColor():{r:number, g: number, b:number}

  getX():number {
    return this.x;
  }

  getY():number {
    return this.y;
  }

  setX(newX:number):void {
    this.x = newX;
  }

  setY(newY:number):void {
    this.y = newY;
  }
}
