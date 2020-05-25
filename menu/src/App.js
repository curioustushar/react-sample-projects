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
  }, ['all']);


  const [filterdMenuItem, setFilterdMenuItem] = useState(menuItems);

  const filterMenuItems = (category) => {
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
          {categories.map((item, key) =>
            <CategoryButton
              key={key}
              category={item}
              fn={filterMenuItems}
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
