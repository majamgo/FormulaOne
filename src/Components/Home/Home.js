import React, { useContext, useState, useEffect } from 'react';
import './Home.scss';
import { RaceContext } from '../../Context/RaceContext';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import DefaultSlides from '../Slider/DefaultSlides';

function Home() {
  const { races } = useContext(RaceContext);

  const calculateTimeLeft = () => {
    const difference = +new Date(races[0].raceCountdown) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <h4>
        {timeLeft[interval]} {interval}{' '}
      </h4>
    );
  });

  return (
    <main className="home-main">
      <Slider slides={DefaultSlides} />

      <section className="nextrace-section">
        <div className="nextrace-info" key={races[0].raceID}>
          <h2>Next race</h2>
          <h4>{races[0].raceCircuit}</h4>
          <h4 className="h4homemargin">{races[0].raceCountry}</h4>
          <span className="nextrace-date">
            <h4>{races[0].raceDate}</h4>
            {timerComponents.length ? timerComponents : <h4>In game</h4>}
          </span>
          <hr className="main-hr hrhomemargin" />
          <p>{races[0].raceInfo}</p>

          <Link to={'/race/' + races[0].raceID}>
            <button className="main-btn btnhomemargin">Watch the event</button>
          </Link>
        </div>

        <figure className="nextrace-track" key={races[0].raceKey}>
          <img
            src={races[0].raceTrackImg}
            alt={races[0].raceName}
            className="nextrace-trackimg"
          />
        </figure>
      </section>

    </main>
  );
}

export default Home;
