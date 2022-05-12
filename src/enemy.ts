import p5 from 'p5';

export default class Enemy {
  private x: number = 0;

  private y: number = 0;

  private level: number = 0;

  private r:number = 0;

  private g:number = 0;

  private b:number = 0;

  private size: number = 20;

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.level = Math.floor(1 + Math.random() * 5);
    this.r = Math.random() * 255;
    this.g = Math.random() * 255;
    this.b = Math.random() * 255;
    this.size = 20 + (this.level * 2);
  }

  show(p:p5) {
    p.fill(this.r, this.g, this.b);
    p.circle(this.x, this.y, this.size);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(`${this.level}`, this.x, this.y);
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

  getLevel():number {
    return this.level;
  }
}
