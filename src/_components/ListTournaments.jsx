import React,{useEffect,useState} from "react";
import Tournament from "./Card";
import "@/resources/styles/grid.css";
const axios = require("axios").default;
import config from 'config';


var selected_sport = '0'

export function ListTournaments(props) {
const [tournaments,setTournaments] = useState([])


useEffect(() => {
  const getTournaments = async (sport) => {
console.log(`${config.apiUrl}/tournaments/sport/${sport}`)

   axios
   .get(`${config.apiUrl}/tournaments/sport/${sport}`)
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
      {
console.log(tournaments)

      }
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
