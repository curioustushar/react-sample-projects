function get() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
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
    localStorage.setItem("list", JSON.stringify(items));
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
        localStorage.setItem("list", JSON.stringify(items));
    },
    remove: (id) => {
        let items = get();
        items = items.filter((item) => (item.id !== id));
        localStorage.setItem("list", JSON.stringify(items));
    },
    edit,
    clear: () => {
        localStorage.setItem("list", '');
    }
};

export default helpers;