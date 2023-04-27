import Movies from "./Movies";
function Movieitems(props) {

  return (
        <div className="container">
                    <div className="row justify-content-center">
          { props.movies.map((movie)=><Movies key={movie.id}  id={movie.id} poster_path={movie.poster_path} title={movie.title} description={movie.overview} ></Movies>
        )}
              </div>
          </div>
        
        )
  
}
export default Movieitems;