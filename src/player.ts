import p5 from 'p5';

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export default class Player {
  private x: number = 0;

  private y: number = 0;

  private level: number = 0;

  private r:number = 0;

  private g:number = 0;

  private b:number = 0;

  private size: number = 20;

  constructor() {
    this.x = 250;
    this.y = 250;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.level = 2;
    this.size = 20 + (this.level * 2);
  }

  show(p:p5) {
    p.stroke(255);
    p.strokeWeight(3);
    p.fill(this.r, this.g, this.b);
    p.circle(this.x, this.y, this.size);
    p.stroke(0);
    p.strokeWeight(1);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(`${this.level}`, this.x, this.y);
  }

  move(directionMove:Direction) {
    switch (directionMove) {
      case 'UP':
        this.y -= 3;
        break;
      case 'DOWN':
        this.y += 3;
        break;
      case 'LEFT':
        this.x -= 3;
        break;
      case 'RIGHT':
        this.x += 3;
        break;
      default:
        break;
    }
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
