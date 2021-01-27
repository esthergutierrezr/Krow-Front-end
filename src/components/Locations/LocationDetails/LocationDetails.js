import React from "react";
import LocationCarousel from "./LocationCarousel.js";
import { Button } from "react-bootstrap";
import LocationMap from "./LocationMap";
import { LocationContext } from "../../../contexts/LocationContext.js";

function LocationDetails() {
  const { location } = React.useContext(LocationContext);
  const [moreTextA, setMoreTextA] = React.useState(false);
  const [moreTextB, setMoreTextB] = React.useState(false);
  const [moreTextC, setMoreTextC] = React.useState(false);
  const [moreTextD, setMoreTextD] = React.useState(false);
  const [moreTextE, setMoreTextE] = React.useState(false);

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
          <h1>{location.selectedPlace.name}</h1>
          <p>1 miembro aqui</p>
          <p>icon + opening times</p>
          <p>Icon + Location</p>
          <div> * * * * 4.9</div>

          <div>
            <h2>Description</h2>
            <p>{location.selectedPlace.overview}</p>
            <button onClick={readMoreA}>Ler mais</button>
            {moreTextA ? <p>Here is more info about the place</p> : null}
            <div>
              <h2>Facilidades</h2>
              <button onClick={readMoreB}>more</button>
              {moreTextB ? <p>Here is the important info </p> : null}
            </div>
            <div>
              <h2>Informacoes Importantes</h2>
              <button onClick={readMoreC}>more</button>
              {moreTextC ? <p>Here is the important info </p> : null}
            </div>
            <div>
              <h2>Beneficios Exclusivos</h2>
              <button onClick={readMoreD}>more</button>
              {moreTextD ? <p>Here is the important info </p> : null}
            </div>
            <div>
              <h2>Horarios</h2>
              <button onClick={readMoreE}>more</button>
              {moreTextE ? (
                <div>
                  {" "}
                  <p>Segunda </p>
                  <p>Terca </p>
                  <p>Quarta </p>
                  <p>Quinta </p>
                  <p>Sexta </p>
                  <p>Sabado </p>
                  <p>Domingo </p>{" "}
                </div>
              ) : null}
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
