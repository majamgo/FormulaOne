import React, {createContext, useState} from 'react';

import AusTrack from '../img/AustraliaGPtrack.png';
import AusBanner from '../img/bannerAustraliaGP.jpg';
import AusInfo from '../img/Event-infoimgAustraliaGP.jpg';
import AusDetailTrack from '../img/AustraliaGPdetailTrack.png';
import AusBuilt from '../img/builtAustraliaGP.jpg';
import AusFirstGP from '../img/firstgpAustraliaGP.jpg';
import AusCircuit from '../img/circuitAustraliaGP.jpg';
import AusWhyGo from '../img/whygoAustraliaGP.jpg';

export const RaceContext = createContext();

const RaceContextProvider = (props) => {

    const [races, setRaces] = useState([
        {
            raceID: 1,
            raceKey: 171,
            raceGrandPrix: "Australian Grand Prix 2020",
            raceName: "Melbourne Grand Prix Circuit",
            raceTrackImg: AusTrack,
            raceBannerImg: AusBanner,
            raceInfoImg: AusInfo,
            raceDetailTrackImg: AusDetailTrack,
            raceCircuit: "Albert Park",
            raceCountry: "Melbourne, Australia",
            raceDate: "March 15th",
            raceNrDate: "15th - 17th",
            raceMonth: "March",
            raceCountdown: "2020-08-05",
            raceInfo: "As a temporary facility, Albert Park can be quite bumpy, while the circuit at the start of the weekend is often slippery, rubbering in as the sessions progress.",
            racePractice1Day: "fri",
            racePractice2Day: "fri",
            racePractice3Day: "sat",
            raceQualDay: "sat",
            raceRaceDay: "sun",
            racePractice1FullDay: "friday",
            racePractice2FullDay: "friday",
            racePractice3FullDay: "saturday",
            raceQualFullDay: "saturday",
            raceRaceFullDay: "sunday",
            racePractice1Time: "11:00",
            racePractice2Time: "15:00",
            racePractice3Time: "12:00",
            raceQualTime: "15:00",
            raceRaceTime: "15:10",
            raceFirstGP: "1996",
            raceLength: "5.303 km",
            raceLaps: "58",
            raceDistance: "307.574 km",
            raceLapRecord: "1:24.125 - Michael Schumacher (2004)",
            raceBuilt: "The deal to host Formula 1 in Melbourne was done in 1993, with the decision taken to create a circuit using a mixture of the existing roads around the city’s Albert Park – mainly Aughtie Drive and Lakeside Drive if you fancy driving it yourself – with a little detour through the Lakeside Stadium’s car park.",
            raceBuiltImg: AusBuilt,
            raceFirstGrandPrix: "Just four months after Adelaide held its last Australian Grand Prix at the end of 1995, the Formula 1 teams were back in Australia for Melbourne's first Grand Prix at the start of 1996. That race is most often remembered for Martin Brundle’s infamous Jordan crash at Turn 3 after he launched himself off the back of Johnny Herbert’s Sauber.",
            raceFirstGrandPrixImg: AusFirstGP,
            raceCircuitLike: "As a temporary facility, Albert Park can be quite bumpy, while the circuit at the start of the weekend is often slippery, rubbering in as the sessions progress. It’s also a circuit that  a well-sorted chassis, with several spots on the track where the drivers require a reactive front end to allow them to chuck it into a corner – the main one being the rapid Turn 11-12 chicane. Melbourne is also one of the faster tracks on the calendar, with Lewis Hamilton’s 2018 pole lap set at an average of 235km/h.",
            raceCircuitLikeImg: AusCircuit,
            raceWhyGo: "Often found on lists of the world’s best cities, Melbourne is a blast all year round – and it only gets better when Formula 1 rolls into town. There are bars and restaurants aplenty, you’re right by the beach, while the race’s appearance at the start of Australia’s autumn means the temperatures should be peachy.",
            raceWhyGoImg: AusWhyGo
        },
        {
            raceID: 2,
            raceGrandPrix: "",
            raceName: "",
            raceTrackImg: "",
            raceBannerImg: "",
            raceInfoImg: "",
            raceDetailTrackImg: "",
            raceCircuit: "",
            raceCountry: "",
            raceDate: "",
            raceNrDate: "",
            raceMonth: "",
            raceCountdown: "",
            RaceInfo: "",
            racePractice1Day: "",
            racePractice2Day: "",
            racePractice3Day: "",
            raceQualDay: "",
            raceRaceDay: "",
            racePractice1FullDay: "",
            racePractice2FullDay: "",
            racePractice3FullDay: "",
            raceQualFullDay: "",
            raceRaceFullDay: "",
            racePractice1Time: "",
            racePractice2Time: "",
            racePractice3Time: "",
            raceQualTime: "",
            raceRaceTime: "",
            raceFirstGP: "",
            raceLength: "",
            raceLaps: "",
            raceDistance: "",
            raceLapRecord: "",
            raceBuilt: "",
            raceBuiltImg: "",
            raceFirstGrandPrix: "",
            raceFirstGrandPrixImg: "",
            raceCircuitLike: "",
            raceCircuitLikeImg: "",
            raceWhyGo: "",
            raceWhyGoImg: ""
        }
    ]);

    const findRace = (id) => {
        return races.find(r => r.raceID === id);
    }

    return ( 

        <RaceContext.Provider value={{races, findRace}}>
            {props.children}
        </RaceContext.Provider>

     );
}
 
export default RaceContextProvider;