import React, { useState, useRef } from 'react';
import Item from './Item';
import SearchInput from './SearchInput';
import StoreFilters from './StoreFilters';
import Lightbox from './../Lightbox/Lightbox';
import './store.css';

const itemList = [
  {
    src: './img/sweets-1.jpeg',
    name: 'Sweet Item',
    price: 5,
    type: 'sweets',
    id: 101,
  },
  {
    src: './img/cupcake-1.jpeg',
    name: 'Cupcake Item',
    price: 5,
    type: 'cupcakes',
    id: 102,
  },
  {
    src: './img/cake-1.jpeg',
    name: 'Cake Item',
    price: 5,
    type: 'cakes',
    id: 103,
  },
  {
    src: './img/doughnut-1.jpeg',
    name: 'Dougnut Item',
    price: 5,
    type: 'dougnuts',
    id: 104,
  },
  {
    src: './img/sweets-2.jpeg',
    name: 'Sweet Item',
    price: 10,
    type: 'sweets',
    id: 105,
  },
  {
    src: './img/cupcake-2.jpeg',
    name: 'Cupcake Item',
    price: 10,
    type: 'cupcakes',
    id: 106,
  },
  {
    src: './img/cake-2.jpeg',
    name: 'Cake Item',
    price: 10,
    type: 'cakes',
    id: 107,
  },
  {
    src: './img/doughnut-2.jpeg',
    name: 'Dougnut Item',
    price: 10,
    type: 'dougnuts',
    id: 108,
  },
  {
    src: './img/sweets-3.jpeg',
    name: 'Sweet Item',
    price: 15,
    type: 'sweets',
    id: 109,
  },
  {
    src: './img/cupcake-3.jpeg',
    name: 'Cupcake Item',
    price: 15,
    type: 'cupcakes',
    id: 110,
  },
  {
    src: './img/cake-3.jpeg',
    name: 'Cake Item',
    price: 15,
    type: 'cakes',
    id: 111,
  },
  {
    src: './img/doughnut-3.jpeg',
    name: 'Dougnut Item',
    price: 15,
    type: 'dougnuts',
    id: 112,
  },
];
const filters = Array.from(new Set(['all', ...itemList.map((i) => i.type)]));

const Store = () => {
  const [storeItems, setStoreItems] = useState(itemList);
  const [filter, setFilter] = useState('all');
  const itemref = useRef(null);

  const [isShowLightbox, toggleLightBox] = useState(false);

  const showLightBox = (e, item) => {
    e.preventDefault();
    toggleLightBox(!isShowLightbox);
    itemref.current = item;
  };
  const onClose = () => {
    toggleLightBox(!isShowLightbox);
    itemref.current = null;
  };
  const handelSearch = (text) => {
    const items = itemList.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setStoreItems(items);
  };

  const handelFilters = (type) => {
    setFilter(type);
    if (type && type.toLowerCase() === 'all') {
      setStoreItems(itemList);
      return;
    }
    const items = itemList.filter((i) => i.type === type);
    setStoreItems(items);
  };

  return (
    <div className="store" id="store">
      <div className="container">
        <h1 className="store-header">
          our <strong className="banner-title ">store</strong>
        </h1>
        <StoreFilters
          filters={filters}
          activeFilter={filter}
          handelFilters={handelFilters}
        />
        <SearchInput handelSearch={handelSearch} />
        <div className="store-items">
          {storeItems.map((item, i) => (
            <Item key={i} item={item} onClick={(e) => showLightBox(e, item)} />
          ))}
        </div>
      </div>
      {isShowLightbox ? (
        <Lightbox item={itemref.current} onClose={onClose} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Store;
