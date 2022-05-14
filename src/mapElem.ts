import p5 from 'p5';

export default abstract class MapElem {
  private x: number = 0;

  private y: number = 0;

  private size: number = 20;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    // this.r = r;
    // this.g = g;
    // this.b = b;
    this.size = 20;
  }

  show(p:p5) {
    p.fill(this.setColor().r, this.setColor().g, this.setColor().b);
    p.rect(this.x, this.y, this.size);
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

  getSize():number {
    return this.size;
  }
}
