import React from "react";
import Tournament from "./Card";
import "../resources/styles/grid.css";
const axios = require("axios").default;

var tournaments = [];

const getTournaments = sport => {
  axios
    .get("https://futbol-back.herokuapp.com/tournaments/sport/" + sport)
    .then(function(response) {
      // handle success
      tournaments = response.data;
      console.log(tournaments);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};

export default function ListTournaments(props) {
  
getTournaments(props.sport)


  return (
    <div className="tournamentsWrapper">
      {tournaments.map((tournament, index) => (
        <Tournament
          title={tournament.title}
          description={tournament.description}
          requierements={tournament.requierements}
          date={tournament.date}
          img={tournament.img}
          key={index}
        />
      ))}
    </div>
  );
}
