import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesContext from './store/Movie-context'
import { useContext } from 'react'
import { useState } from 'react';
const Moviesdetails = (props) => {
    const {id}= useParams();
    const [movieDetails,setmovieDetails] = useState({});
    return (
        <div>
          <h2 style={{color:"white"}}>Movie ID is {id}</h2>
        </div>
    );
};

export default Moviesdetails;