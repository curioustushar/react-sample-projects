const STORE_KEY = 'expenseTransactions';

function updateDataStore(items = []) {
  localStorage.setItem(STORE_KEY, JSON.stringify(items));
}

function getFromDataStore() {
  return localStorage.getItem(STORE_KEY);
}

function get() {
  const items = getFromDataStore();
  return items ? JSON.parse(items) : [];
}

const helpers = {
  get,
  update: (data) => updateDataStore(data),
  clear: () => updateDataStore(),
};

export default helpers;
