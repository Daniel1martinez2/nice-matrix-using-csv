import p5 from 'p5';

export default class Ball {
  public posX: number;

  constructor(posX: number) {
    this.posX = posX;
  }

  show(p:p5) {
    p.fill(255, 0, 0);
    p.circle(this.posX, 250, 50);
  }
}
