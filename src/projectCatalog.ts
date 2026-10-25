import data from './projects.json';

export const shortlist = ['BinWatch', 'LibroSmart', 'BakeTrack', 'DOSEVIA', 'RentEase', 'CollabTrack'];
const projects = [...data].sort((a, b) => {
  const rankA = shortlist.indexOf(a.name);
  const rankB = shortlist.indexOf(b.name);
  return (rankA < 0 ? 100 : rankA) - (rankB < 0 ? 100 : rankB) || a.name.localeCompare(b.name);
});
export default projects;
