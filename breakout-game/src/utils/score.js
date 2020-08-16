const STORE_KEY = 'breakoutGameBestScore';

function update(data = 0) {
  localStorage.setItem(STORE_KEY, data);
}

function getFromDataStore() {
  return localStorage.getItem(STORE_KEY);
}

function get() {
  return getFromDataStore() || 0;
}

const helpers = {
  get,
  update,
  clear: () => update(),
};

export default helpers;
