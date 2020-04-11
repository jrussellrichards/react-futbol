import React,{useEffect,useState} from "react";
import Tournament from "./Card";
import "../resources/styles/grid.css";
const axios = require("axios").default;

var selected_sport = '0'

export default function ListTournaments(props) {
const [tournaments,setTournaments] = useState([])

useEffect(() => {
  const getTournaments = async (sport) => {
   axios
   .get("https://futbol-back.herokuapp.com/tournaments/sport/" + sport)
   .then(function(response) {
    // handle success

      setTournaments(response.data)

    
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .then(function() {
    // always executed
  });
};

 getTournaments(props.sport);
} ,[props.sport]);

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
