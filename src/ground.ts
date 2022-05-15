/* eslint-disable no-useless-constructor */
import MapElem from './mapElem';

export default class Ground extends MapElem {
  protected r: number;

  protected g: number;

  protected b: number;

  constructor(x:number, y:number) {
    super(x, y);
    this.r = 200;
    this.g = 240;
    this.b = 255;
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: this.r, g: this.g, b: this.b };
  }
}
