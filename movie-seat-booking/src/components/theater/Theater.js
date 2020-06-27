import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Theater.css';

const Theater = (props) => {
  const containerRef = useRef(null);
  const countRef = useRef(null);
  const totalRef = useRef(null);

  const updateCount = () => {
    let seats = 0;
    props.theaterSeats.forEach((e) => {
      console.log(e.filter((e1) => e1.status === 'selected'));
      seats += e.filter((e1) => e1.status === 'selected').length;
    });
    countRef.current.innerText = seats;
    totalRef.current.innerText = seats * props.price;
  };

  function selectSeatHandler(e, row, col) {
    if (
      e.target.classList.contains('seat') &&
      !e.target.classList.contains('occupied')
    ) {
      props.theaterSeats[row][col].status = e.target.classList.toggle(
        'selected'
      )
        ? 'selected'
        : '';
    }
    updateCount();
    props.updateMovie(props.theaterSeats);
  }

  useEffect(() => {
    updateCount();
  }, []);

  return (
    <div style={{ backgroundColor: props.backgroundColor }}>
      <div className="container" ref={containerRef}>
        <div className="screen"></div>
        {props.theaterSeats.map((rows, row) => (
          <div className="row" key={row}>
            {rows.map((cols, col) => (
              <div
                className={`seat ${cols.status}`}
                key={`${row - col}`}
                onClick={(e) => selectSeatHandler(e, row, col)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <p className="text">
        You have selected{'  '}
        <span id="count" ref={countRef}>
          0
        </span>{' '}
        seats for a price of $
        <span id="total" ref={totalRef}>
          0
        </span>
      </p>
    </div>
  );
};

Theater.propTypes = {
  seats: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  theaterSeats: PropTypes.array.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  updateMovie: PropTypes.func.isRequired,
};

export default Theater;
