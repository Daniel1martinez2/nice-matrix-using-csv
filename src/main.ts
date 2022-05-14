/* eslint-disable no-param-reassign */
import './style.css';
import p5 from 'p5';
import MapElem from './mapElem';
// import Enemy from './enemy';
import Wall from './wall';
import Ground from './ground';

const game: MapElem[][] = [];
const sketch = (p:p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    fetch('../data/map.csv', {
      headers: { 'content-type': 'text/csv;charset=UTF-8' },
    })
      .then((raw:any) => raw.text())
      .then((data:string) => {
        // Transform the string into a matrix
        const numberMatrix = data.split(/\r?\n/).map((chunk:string) => chunk.split(','));
        // Now, Transform the matrix string into a object based matrix
        for (let i = 0; i < numberMatrix.length; i += 1) {
          const currentRow: MapElem[] = [];
          for (let j = 0; j < numberMatrix[i].length; j += 1) {
            const current = numberMatrix[i][j];
            switch (current) {
              case '1':
                currentRow.push(new Wall(j * 22, i * 22));
                break;
              default:
                currentRow.push(new Ground(j * 22, i * 22));
                break;
            }
          }
          game.push(currentRow);
        }
        console.log(game);
      });
  };

  p.draw = () => {
    p.background(80);
    game.forEach((chunk: MapElem[]) => {
      chunk.forEach((n:MapElem) => {
        n.show(p);
      });
    });
  };
};
// eslint-disable-next-line new-cap
export default new p5(sketch);
