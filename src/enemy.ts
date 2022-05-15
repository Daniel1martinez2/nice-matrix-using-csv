/* eslint-disable no-useless-constructor */
import MapElem from './mapElem';

export default class Enemy extends MapElem {
  constructor(x:number, y:number) {
    super(x, y);
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: 255, g: 255, b: 0 };
  }
}
