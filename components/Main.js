import Link from 'next/link';

const Main = ({movies}) => {
    return ( 
      <div id="main">
        {movies.map(movie => (
            <article className="thumb" key={movie.id}>
              <Link href={`./movie/${movie.id}`}>
                <div className="image"><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} /></div>
              </Link>
              <h2>{movie.title}</h2>
              <p>Release date:{movie.release_date}</p>
              <p>Overview: {movie.overview}</p>
            </article>
        ))}
      </div>    
     );
}
 
export default Main;