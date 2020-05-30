const STORE_KEY = 'groceryList';

function updateDataStore(items = []) {
    localStorage.setItem(STORE_KEY, JSON.stringify(items));
}

function getFromDataStore() {
    return localStorage.getItem(STORE_KEY);
}

function get() {
    const items = getFromDataStore();
    return items ? JSON.parse(items) : []
};

function getbyId(id) {
    const item = get().filter(i => i.id === id);
    return (item && item.length) ? item[0] : {};
};

function edit(id, value) {
    let items = get();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    updateDataStore(items);
}

const helpers = {
    get,
    getbyId,
    createOrUpdate: (id, value) => {
        const item = getbyId(id);
        if (item && item.id) {
            return edit(id, value);
        }
        const grocery = { id, value };
        const items = get();
        items.push(grocery);
        updateDataStore(items);
    },
    remove: (id) => {
        let items = get();
        items = items.filter((item) => (item.id !== id));
        updateDataStore(items);
    },
    clear: () => updateDataStore(),
};

export default helpers;