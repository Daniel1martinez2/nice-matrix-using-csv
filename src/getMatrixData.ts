const getMatrixData = async () => {
  const raw = await fetch('../data/map.csv', {
    headers: { 'content-type': 'text/csv;charset=UTF-8' },
  });
  const data = await raw.text();
  return data;
};
export default getMatrixData;
