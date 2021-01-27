import React, { useState, useEffect } from "react";
import LocationCarousel from "./LocationCarousel.js";
import { Button } from "react-bootstrap";
import LocationMap from "./LocationMap";
import ApiLocations from "../ApiLocations.json";

function LocationDetails(props) {
  const [moreTextA, setMoreTextA] = useState(false);
  const [moreTextB, setMoreTextB] = useState(false);
  const [moreTextC, setMoreTextC] = useState(false);
  const [moreTextD, setMoreTextD] = useState(false);
  const [moreTextE, setMoreTextE] = useState(false);
  const [location, setLocation] = useState({});

  const readMoreA = () => {
    setMoreTextA(!moreTextA);
  };
  const readMoreB = () => {
    setMoreTextB(!moreTextB);
  };
  const readMoreC = () => {
    setMoreTextC(!moreTextC);
  };
  const readMoreD = () => {
    setMoreTextD(!moreTextD);
  };
  const readMoreE = () => {
    setMoreTextE(!moreTextE);
  };
  useEffect(() => {
    ApiLocations.map((apiLocation) => {
      if (apiLocation.id == props.match.params.id) {
        setLocation(apiLocation);
      }
    });
  }, []);

  return (
    <div>
      <div>
        <LocationCarousel />
      </div>
      <div
        style={{
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          backgroundColor: "#ece6c7",
          paddingTop: "30px",
          paddingLeft: "30px",
        }}
      >
        <a href={`/locations/`}>Back</a>
        <div>
          <h1>{location.name}</h1>
          <p>1 miembro aqui</p>
          <p>icon + opening times</p>
          <p>Icon + Location</p>
          <div> * * * * 4.9</div>

          <div>
            <h2>Description</h2>
            <p>???</p>
            <button onClick={readMoreA}>Ler mais</button>
            {moreTextA ? <p>{location.description}</p> : null}
            <div>
              <h2>Facilidades</h2>
              <button onClick={readMoreB}>more</button>
              {moreTextB ? <p>{location.facilidades} </p> : null}
            </div>
            <div>
              <h2>Informacoes Importantes</h2>
              <button onClick={readMoreC}>more</button>
              {moreTextC ? <p>{location.information} </p> : null}
            </div>
            <div>
              <h2>Beneficios Exclusivos</h2>
              <button onClick={readMoreD}>more</button>
              {moreTextD ? <p>{location.beneficios} </p> : null}
            </div>
            <div>
              <h2>Horarios</h2>
              <button onClick={readMoreE}>more</button>
              {moreTextE ? <p>{location.horarios}</p> : null}
            </div>

            <div>
              <h1>Sobre esta localizacao</h1>
              <button>+4876557755</button>
              <a href="https://google.com">Visitar Website</a>
              <div>
                <LocationMap />
              </div>
              <button onClick={location.checkIn}>Check In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;
