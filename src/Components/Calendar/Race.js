import React, { useContext } from 'react';
import './Calendar.scss';
import { RaceContext } from '../../Context/RaceContext';

function Race(props) {
  let raceID = +props.match.params.raceID;

  const { findRace } = useContext(RaceContext);
  const race = findRace(raceID);

  if (race) {
    return (
      <main className="main-race">
        <section className="race-banner">
          <div className="race-bannerdiv">
            <h1>{race.raceGrandPrix}</h1>
            <img
              src={race.raceBannerImg}
              alt={race.raceName}
              className="race-bannerimg"
            />
          </div>
        </section>

        <section className="raceevent-info">
          <section className="raceevent-infotext">
            <div className="raceevent-teext">
              <div className="teext-end">
                <h2>{race.raceNrDate}</h2>
                <h4>{race.raceMonth}</h4>
              </div>
              <h4>
                {race.raceCircuit} - {race.raceCountry}
              </h4>
            </div>

            <div className="raceevent-racetimes">
              <div className="raceevent-clock">
                <div>
                  <p>{race.racePractice1FullDay}</p>
                  <p>{race.racePractice1Time}</p>
                </div>
                <div>
                  <p>{race.racePractice2FullDay}</p>
                  <p>{race.racePractice2Time}</p>
                </div>
                <div>
                  <p>{race.racePractice3FullDay}</p>
                  <p>{race.racePractice3Time}</p>
                </div>
                <div>
                  <p>{race.raceQualFullDay}</p>
                  <p>{race.raceQualTime}</p>
                </div>
                <div>
                  <p>{race.raceRaceFullDay}</p>
                  <p>{race.raceRaceTime}</p>
                </div>
              </div>

              <div className="raceevent-what">
                <div>
                  <p>Pracice 1</p>
                </div>
                <hr />
                <div>
                  <p>Pracice 2</p>
                </div>
                <hr />
                <div>
                  <p>Pracice 3</p>
                </div>
                <hr />
                <div>
                  <p>Qualification</p>
                </div>
                <hr />
                <div>
                  <p>Race</p>
                </div>
              </div>
            </div>
          </section>

          <figure className="raceevent-infoimg">
            <img src={race.raceInfoImg} alt={race.raceName} />
          </figure>
        </section>

        <section className="raceevent-facts">
          <figure className="raceevent-factsimg">
            <img src={race.raceDetailTrackImg} alt={race.raceName} />
          </figure>

          <section className="raceevent-factsallinfo">
            <h2>{race.raceName}</h2>

            <div className="raceevent-factsinfo">
              <div className="raceevent-factsinfoinfo">
                <div>
                  <h5>First Grand Prix</h5>
                </div>
                <div>
                  <p>{race.raceFirstGP}</p>
                </div>
              </div>
              <hr />
              <div className="raceevent-factsinfoinfo">
                <div>
                  <h5>Circuit length</h5>
                </div>
                <div>
                  <p>{race.raceLength}</p>
                </div>
              </div>
              <hr />
              <div className="raceevent-factsinfoinfo">
                <div>
                  <h5>Number of laps</h5>
                </div>
                <div>
                  <p>{race.raceLaps}</p>
                </div>
              </div>
              <hr />
              <div className="raceevent-factsinfoinfo">
                <div>
                  <h5>Race distance</h5>
                </div>
                <div>
                  <p>{race.raceDistance}</p>
                </div>
              </div>
              <hr />
              <div className="raceevent-factsinfoinfo">
                <div>
                  <h5>Lap record</h5>
                </div>
                <div>
                  <p>{race.raceLapRecord}</p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="raceevent-bio">
          <div className="raceevent-biosection">
            <div>
              <h2>When was the track built?</h2>
              <hr />
              <p>{race.raceBuilt}</p>
            </div>
            <figure className="raceevent-bioimg">
              <img src={race.raceBuiltImg} alt={race.raceName} />
            </figure>
          </div>

          <div className="raceevent-biosection">
            <figure className="raceevent-bioimg">
              <img src={race.raceFirstGrandPrixImg} alt={race.raceName} />
            </figure>
            <div>
              <h2>When was its first Grand Prix?</h2>
              <hr />
              <p>{race.raceFirstGrandPrix}</p>
            </div>
          </div>

          <div className="raceevent-biosection">
            <div>
              <h2>What's the circuit like?</h2>
              <hr />
              <p>{race.raceCircuitLike}</p>
            </div>
            <figure className="raceevent-bioimg">
              <img src={race.raceCircuitLikeImg} alt={race.raceName} />
            </figure>
          </div>

          <div className="raceevent-biosection">
            <figure className="raceevent-bioimg">
              <img src={race.raceWhyGoImg} alt={race.raceName} />
            </figure>
            <div>
              <h2>Why go?</h2>
              <hr />
              <p>{race.raceWhyGo}</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return <div />;
}

export default Race;
