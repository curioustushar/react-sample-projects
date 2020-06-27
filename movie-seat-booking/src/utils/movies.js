import moviesData from '../moviesData.json';

const STORE_KEY = 'movies';

const status = ['', 'occupied'];
const geRrandomStatus = () => status[Math.floor(Math.random() * status.length)];

moviesData.forEach((m) => {
  m.theaterSeats = new Array(m.seats.row).fill([]).map((_, i) => {
    const arr = [];
    for (let index = 0; index < m.seats.col; index++) {
      arr.push({ status: geRrandomStatus() });
    }
    return arr;
  });
});

function updateDataStore(items = []) {
  localStorage.setItem(STORE_KEY, JSON.stringify(items));
}

function getFromDataStore() {
  return localStorage.getItem(STORE_KEY);
}

function get() {
  const items = getFromDataStore();
  if (items) return JSON.parse(items);
  updateDataStore(moviesData);
  return moviesData;
}

const helpers = {
  get,
  update: (data) => updateDataStore(data),
  clear: () => updateDataStore(),
};

export default helpers;
