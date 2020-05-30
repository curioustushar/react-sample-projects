import React, { useState } from 'react';
import MenuItem from './components/menuItem/menuItem';
import menuItems from './menuItems';
import CategoryButton from './components/categoryButton/categoryButton';

function App() {
  const categories = menuItems.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']).map((i) => {
    if (i === 'all') return { category: i, active: true };
    return { category: i, active: false };
  });

  const [filterdMenuItem, setFilterdMenuItem] = useState(menuItems);
  const [allCategories, setAllCategories] = useState(categories);

  const filterMenuItems = (category) => {
    categories.forEach((i) => {
      i.active = (i.category === category);
    });
    setAllCategories(categories);
    if (category === 'all') return setFilterdMenuItem(menuItems);
    const newMenus = menuItems.filter(menuItem => menuItem.category === category);
    return setFilterdMenuItem(newMenus);
  };

  return (
    <div className="App">
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {allCategories.map((item, key) =>
            <CategoryButton
              key={key}
              category={item.category}
              onClickFilter={filterMenuItems}
              active={item.active}
            />
          )}
        </div>
        <div className="section-center">
          {filterdMenuItem.map((item) =>
            <MenuItem
              key={item.id}
              title={item.title}
              img={item.img}
              desc={item.desc}
              price={item.price}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
