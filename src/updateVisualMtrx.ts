import p5 from 'p5';
import MapElem from './mapElem';

const updateVisualMtrx = (game: MapElem[][], p: p5) => {
  for (let i = 0; i < game.length; i += 1) {
    for (let j = 0; j < game[i].length; j += 1) {
      game[i][j].setX(j * 20);
      game[i][j].setY(i * 20);
      game[i][j].show(p);
    }
  }
};
export default updateVisualMtrx;
