import classes from "./Movies.module.css"
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/router";
const Movies=(props)=>{
const router =useRouter();

const deleteMovieHandler=(id)=>{
      axios.delete(`/api/dmovies/${id}`).then(es=>{
      alert("deleted successfully!");
      router.push('/');
}).catch((e)=>{console.log(e.message)})

}

    return (
           <><div className="card mt-3 mx-3 shadow p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
                        <img className="card-img-top mt-3" src={'https://image.tmdb.org/t/p/original/'+props.poster_path} alt="Card image cap"/>
                        <div className="card-body">
                          <h5 className="card-title">{props.title}</h5>
                          <p className="card-text">{props.description}</p>
                          <Link href={`details/${props.id}`}  className={`btn ${classes.button}`} style={{backgroundColor: '#68032a',color:'#fcb8d2'}}>Details</Link>
                          <button   className="btn btn-danger ms-3" onClick={()=>{deleteMovieHandler(props.id)}}>Delete</button>
                        </div>
                      </div></>
    );
}
export default Movies;