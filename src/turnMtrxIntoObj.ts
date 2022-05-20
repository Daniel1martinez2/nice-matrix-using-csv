import Wall from './wall';
import Ground from './ground';
import Player from './player';

const turnMtrxIntoObj = (data: string) => {
  const splitByLineBreak = data.split(/\r?\n/);
  // then, split up by comma
  const game = splitByLineBreak.map((chunk:string) => chunk.split(',').map((obj:string) => {
    switch (obj) {
      case '1':
        return new Wall(0, 0);
      case '3':
        return new Player(0, 0);
      default:
        return new Ground(0, 0);
    }
  }));
  return game;
};
export default turnMtrxIntoObj;
