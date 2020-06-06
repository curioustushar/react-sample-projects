import React, { useState } from 'react';
const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
];
const createList = () =>
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => ({ name: a.value, answer: '' }));

function App() {
  const [people, setPeople] = useState(createList());
  const [dragStartIndex, setDragStartIndex] = useState(false);

  const checkOrder = (e) => {
    e.stopPropagation();
    const list = [...people];
    richestPeople.forEach((person, index) => {
      list[index].answer = person === list[index].name ? 'right' : 'wrong';
    });
    setPeople(list);
  };

  const resethandler = () => {
    setPeople(createList());
  };

  const dragStart = (idx) => {
    setDragStartIndex(idx);
  };

  const dragDrop = (idx) => {
    const list = [...people];
    // swap with destructaring
    [list[idx], list[dragStartIndex]] = [list[dragStartIndex], list[idx]];
    setPeople(list);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnter = (e) => {};
  const dragLeave = (e) => {};

  return (
    <>
      <h1>10 Richest People</h1>
      <p>Drag and drop the items into their corresponding spots</p>
      <ul className="draggable-list" id="draggable-list">
        {people.map((p, index) => (
          <li
            className={p.answer}
            onDragOver={dragOver}
            onDrop={(e) => dragDrop(index)}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            key={p.name}
          >
            <span className="number">{index + 1}</span>
            <div
              className="draggable"
              draggable
              onDragStart={(e) => dragStart(index)}
            >
              <p className="person-name">{p.name}</p>
              <i className="fas fa-grip-lines"></i>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button className="rest-btn" onClick={resethandler}>
          Reset &nbsp;
          <i className="fas fa-redo-alt"></i>
        </button>
        <button className="check-btn" onClick={checkOrder}>
          Check Order &nbsp;
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </>
  );
}

export default App;
