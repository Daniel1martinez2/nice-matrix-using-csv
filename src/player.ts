/* eslint-disable class-methods-use-this */
import MapElem from './mapElem';
import Wall from './wall';

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
/* eslint-disable no-useless-constructor */

export default class Player extends MapElem {
  protected r: number;

  protected g: number;

  protected b: number;

  constructor(x:number, y:number) {
    super(x, y);
    this.r = 0;
    this.g = 0;
    this.b = 255;
  }

  // eslint-disable-next-line class-methods-use-this
  setColor() {
    return { r: this.r, g: this.g, b: this.b };
  }

  public move(directionMove:Direction, row: number, col: number, matrix: MapElem[][]) {
    const copyCat = [...matrix];
    const player = copyCat[row][col];
    switch (directionMove) {
      case 'UP':
        if (!(copyCat[row - 1][col] instanceof Wall)) {
          copyCat[row][col] = copyCat[row - 1][col];
          copyCat[row - 1][col] = player;
        }
        break;
      case 'DOWN':
        if (!(copyCat[row + 1][col] instanceof Wall)) {
          copyCat[row][col] = copyCat[row + 1][col];
          copyCat[row + 1][col] = player;
        }
        break;
      case 'LEFT':
        if (!(copyCat[row][col - 1] instanceof Wall)) {
          copyCat[row][col] = copyCat[row][col - 1];
          copyCat[row][col - 1] = player;
        }
        break;
      case 'RIGHT':
        if (!(copyCat[row][col + 1] instanceof Wall)) {
          copyCat[row][col] = copyCat[row][col + 1];
          copyCat[row][col + 1] = player;
        }
        break;
      default:
        break;
    }
    return copyCat;
  }
}
