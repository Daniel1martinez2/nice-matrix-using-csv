/* eslint-disable no-useless-constructor */
import MapElem from './mapElem';

export default class Wall extends MapElem {
  protected r: number;

  protected g: number;

  protected b: number;

  constructor(x:number, y:number) {
    super(x, y);
    this.r = 255;
    this.g = 0;
    this.b = 255;
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: this.r, g: this.g, b: this.b };
  }
}
