import React, { useState,useEffect } from 'react';
import '@/resources/styles/grid.css';
// import {Menu,ListSports,BottomNavigation,ListTournaments} from '@/_components';
import {Menu,ListSports,SimpleBottomNavigation,ListTournaments} from '@/_components';
import {HomePage} from '@/HomePage';
import { userService, authenticationService } from '@/_services';



export function SearchTournamentsPage() {
  const [sport, setSport] = useState('futbol5');
  const [date, setDate] = useState('all');
  const [currentUser, setcurrentUser] = useState(authenticationService.currentUserValue);
  const handleSportFilter = (inputSport) => {
    setSport(inputSport);
  };

  return (
    <div className="principalWrapper">
      <Menu 
                currentUser = {currentUser}/>

      <div className="SearchTournamentsWrapper">
        <ListSports
          onChangeSport={handleSportFilter}
        />
        <SimpleBottomNavigation />
        <ListTournaments
        sport = {sport}


        />

      </div> 
    </div>
  );
}

// import React, { useState,useEffect } from 'react';
// import '@/resources/styles/grid.css';
// // import {Menu,ListSports,BottomNavigation,ListTournaments} from '@/_components';
// import {Menu,ListSports,SimpleBottomNavigation,ListTournaments} from '@/_components';


// export function SearchTournamentsPage() {
//   const [sport, setSport] = useState('futbol5');
//   const [date, setDate] = useState('all');
//   const handleSportFilter = (inputSport) => {
//     setSport(inputSport);
//   };

//   return (
//     <div className="principalWrapper">
//       <Menu />

//       <div className="SearchTournamentsWrapper">
//         <ListSports
//           onChangeSport={handleSportFilter}
//         />
//         <SimpleBottomNavigation />
//         <ListTournaments
//         sport = {sport}


//         />

//       </div> 
//     </div>
//   );
// }
