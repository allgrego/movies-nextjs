import {useRouter} from 'next/router';
import fetch from 'isomorphic-fetch';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Link from 'next/link';

const Movie = ({movie}) => {
    const router = useRouter();
    const {id} = router.query;
    console.log(movie);
    return ( 
        <Container>
            <Header>                
            </Header>
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>{movie.original_title}</h3>
                            <p>"{movie.tagline}"</p>
                        </div>
                        <div className="card-body text-center">
                            <p>Overview: {movie.overview}</p>
                            <p>Rating: {movie.vote_average}</p>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Homepage: <a href={movie.homepage} target='_blank'>{movie.homepage}</a></p>
                            <Link href='/'>
                                <button className="btn">Return to Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} style={{borderRadius: '5%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
     );
}
 
Movie.getInitialProps = async (ctx) => {
    const apiKey = '672ca19510df8ce06cbb34a86db81af1';
    const url = `https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=${apiKey}&language=en-US`;
    const res = await fetch(url)
    const resJSON = await res.json();
    return {movie: resJSON};
};
export default Movie;