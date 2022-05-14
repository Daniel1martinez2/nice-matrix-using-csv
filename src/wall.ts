/* eslint-disable no-useless-constructor */
import MapElem from './mapElem';

export default class Wall extends MapElem {
  constructor(x:number, y:number) {
    super(x, y);
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: 255, g: 0, b: 255 };
  }
}
