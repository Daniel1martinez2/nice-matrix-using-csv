import MapElem from './mapElem';
import Player from './player';

const getPlayerReference = (_game: MapElem[][]) => {
  const playerRow = _game.findIndex((l: MapElem[]) => l.find((j: MapElem) => j instanceof Player));
  const playerIndex = _game[playerRow].findIndex((j: MapElem) => j instanceof Player);
  const player = _game[playerRow][playerIndex];
  return { playerRow, playerIndex, player };
};
export default getPlayerReference;
