import React, { useState } from 'react';
import groceryUtils from './utils/grocery';
import GroceryItem from './components/groceryItem/groceryItem';

function App() {
  const generateId = () => new Date().getTime();

  const [groceryList, setGroceryList] = useState(groceryUtils.get());
  const [item, setItem] = useState({ id: generateId(), value: '' });

  const onClickDeleteListItem = (id) => {
    groceryUtils.remove(id);
    setGroceryList(groceryUtils.get());
  };

  const onClickEditListItem = (id) => {
    const currentItem = groceryUtils.getbyId(id);
    if (currentItem.id) {
      setItem({ id: currentItem.id, value: currentItem.value });
    }
  };

  const onclickAddListItem = (e) => {
    e.preventDefault();
    groceryUtils.createOrUpdate(item.id, item.value);
    setItem({ id: generateId(), value: '' });
    setGroceryList(groceryUtils.get());
  };

  const clearList = () => {
    groceryUtils.clear();
    setGroceryList(groceryUtils.get());
  };

  return (
    <div>
      <section className="section-center">
        <form className="grocery-form" onSubmit={onclickAddListItem}>
          <p className="alert"></p>
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input type="text"
              id="grocery"
              placeholder="e.g. bread"
              value={item.value}
              onChange={e => setItem({ id: item.id, value: e.target.value })} />
            <button type="submit" className="submit-btn">
              submit
            </button>
          </div>
        </form>
        <div className={`grocery-container ${groceryList.length ? 'show-container' : ''}`}>
          {groceryList.map((listItem, key) =>
            <GroceryItem
              key={listItem.id}
              id={listItem.id}
              item={listItem.value}
              onClickEditListItem={onClickEditListItem}
              onClickDeleteListItem={onClickDeleteListItem}
            />
          )}
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      </section>
    </div >
  );
}

export default App;
