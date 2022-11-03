export function getFilteredMovies(data, query, short) {
  const str = query.toLowerCase();

  if (!short) data = data.filter((item) => {
    return item.duration > 40;
  });

  return data.filter((item) => {
    return (
        item.nameRU.toLowerCase().includes(str) ||
        item.nameEN.toLowerCase().includes(str) ||
        item.director.toLowerCase().includes(str) ||
        item.country.toLowerCase().includes(str) ||
        item.description.toLowerCase().includes(str)
    );
  })
}

export function getTime(time) {
  const hours = Math.floor(time/60);
  const minutes = time - hours*60;

  return `${hours}ч ${String(minutes).padStart(2, '0')}м`;
}
