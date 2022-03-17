import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';

const StarshipPage = (props) => {
  const[starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.starshipName.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  },[])

  return ( 
    <>
      <div id="details" className='container'>
        {starshipDetails.name ? 
        <>
          <div>Name: {starshipDetails.name}</div>
          <div>Model: {starshipDetails.model}</div>
        <Link to='/'>
          Return
        </Link>
          </>
          :
          <>
          <p>Loading...</p>
        </>
        }
      </div>
    </>
   );
}
 
export default StarshipPage;