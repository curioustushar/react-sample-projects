import React, { useState } from 'react';
import moment from 'moment'
import useInterval from './hooks/useInterval';

function App() {
  const [giveawayDate] = useState(moment().add(30, 'days'));

  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  const format = (item) => (item < 10) ? `0${item}` : item;

  const setTimer = () => {
    const diff = giveawayDate.valueOf() - moment().valueOf();
    const days = format(Math.floor(diff / oneDay));
    const hours = format(Math.floor((diff % oneDay) / oneHour));
    const minutes = format(Math.floor((diff % oneHour) / oneMinute));
    const seconds = format(Math.floor((diff % oneMinute) / 1000));
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(setTimer());

  useInterval(() => setTimeLeft(setTimer()), 1000);

  return (
    <div className="App">
      <section className="section-center">
        <article className="gift-img">
          <img src="./gift.jpeg" alt="gift" />
        </article>
        <article className="gift-info">
          <h3>old iphone giveaway</h3>
          <h4 className="giveaway">
            giveaway ends on {moment(giveawayDate).format('LLLL')}
          </h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit molestiae cum libero atque ut voluptate qui consectetur
            aliquid incidunt voluptatem quos, dolore, non commodi quaerat aliquam
            eligendi, quisquam totam blanditiis.
        </p>
          <div className="deadline">
            <div className="deadline-format">
              <div>
                <h4 className="days">{timeLeft.days}</h4>
                <span>days</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="hours">{timeLeft.hours}</h4>
                <span>hours</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="minutes">{timeLeft.minutes}</h4>
                <span>mins</span>
              </div>
            </div>
            <div className="deadline-format">
              <div>
                <h4 className="seconds">{timeLeft.seconds}</h4>
                <span>secs</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
