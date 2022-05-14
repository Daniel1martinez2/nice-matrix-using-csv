/* eslint-disable no-useless-constructor */
import MapElem from './mapElem';

export default class Ground extends MapElem {
  constructor(x:number, y:number) {
    super(x, y);
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: 0, g: 255, b: 0 };
  }
}
