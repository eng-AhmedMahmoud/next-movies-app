import React from 'react';
import Link from 'next/link';
import classes from "./Movies.module.css"
const ErrorPage = () => {
    return (
       
              <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold" style={{color:"red"}}>404</h1>
                <p class="fs-3" style={{color:"gray"}}> <span style={{color:"red"}}>Opps!</span> Page not found.</p>
                <p class="lead" style={{color:"gray"}}>
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link href="/" class="btn " className={`btn ${classes.button}`} style={{backgroundColor: '#68032a',color:'#fcb8d2'}}>Go Home</Link>
            </div>
        </div>
       
    );
};

export default ErrorPage;