import React, { useContext } from 'react';
import './Calendar.scss';
import { RaceContext } from '../../Context/RaceContext';
import { Link } from 'react-router-dom';

function Calendar() {
  const { races } = useContext(RaceContext);

  return (
    <main className="main-calendar">
      <section className="calendar-banner">
        <h1>F1 Calendar 2020</h1>
      </section>

      <article className="thewholecalender">

<section className="calendar-month">
        <h3>March</h3>
        <hr className="calender-hr"/>

        <div className="calendar-allevents">

          <Link to={'/race/' + races[0].raceID} className="calendar-event">
            <h2>{races[0].raceNrDate}</h2>
              <h4 className="h4calendarmargin" >{races[0].raceCircuit}</h4>
              <h4>{races[0].raceCountry}</h4>

            <div className="calendar-racetimes">
                <div className="racetimes-clock">
                    <div>
                        <p>{races[0].racePractice1Day}</p>
                    <p>{races[0].racePractice1Time}</p>
                    </div>
                    <div><p>{races[0].racePractice2Day}</p>
                    <p>{races[0].racePractice2Time}</p></div>
                    <div><p>{races[0].racePractice3Day}</p>
                    <p>{races[0].racePractice3Time}</p></div>
                    <div><p>{races[0].raceQualDay}</p>
                    <p>{races[0].raceQualTime}</p></div>
                    <div><p>{races[0].raceRaceDay}</p>
                    <p>{races[0].raceRaceTime}</p></div>
                </div>

                <div className="racetimes-what">
                <div><p>Pracice 1</p></div>
                <hr/>
                    <div><p>Pracice 2</p></div>
                    <hr/>
                    <div><p>Pracice 3</p></div>
                    <hr/>
                    <div><p>Qualification</p></div>
                    <hr/>
                    <div><p>Race</p></div>
                </div>
            </div>
          </Link>

          <Link to={'/race/' + races[0].raceID} className="calendar-event">
            <h2>{races[0].raceNrDate}</h2>
              <h4 className="h4calendarmargin" >{races[0].raceCircuit}</h4>
              <h4>{races[0].raceCountry}</h4>

            <div className="calendar-racetimes">
                <div className="racetimes-clock">
                    <div>
                        <p>{races[0].racePractice1Day}</p>
                    <p>{races[0].racePractice1Time}</p>
                    </div>
                    <div><p>{races[0].racePractice2Day}</p>
                    <p>{races[0].racePractice2Time}</p></div>
                    <div><p>{races[0].racePractice3Day}</p>
                    <p>{races[0].racePractice3Time}</p></div>
                    <div><p>{races[0].raceQualDay}</p>
                    <p>{races[0].raceQualTime}</p></div>
                    <div><p>{races[0].raceRaceDay}</p>
                    <p>{races[0].raceRaceTime}</p></div>
                </div>

                <div className="racetimes-what">
                <div><p>Pracice 1</p></div>
                <hr/>
                    <div><p>Pracice 2</p></div>
                    <hr/>
                    <div><p>Pracice 3</p></div>
                    <hr/>
                    <div><p>Qualification</p></div>
                    <hr/>
                    <div><p>Race</p></div>
                </div>
            </div>
          </Link>

</div>
</section>

      </article>
    </main>
  );
}

export default Calendar;
