import Head from 'next/head'
import Container from '../components/Container';
import { Fragment, useEffect, useState } from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const Index = (props) => {
  const [page, setPage] = useState(1);
  const [last_page, setLastPage] = useState(2);
  const [movies, saveMovies] = useState([]);
  

  useEffect(()=>{
    const consultarAPI= async ()=>{
    
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzJjYTE5NTEwZGY4Y2UwNmNiYjM0YTg2ZGI4MWFmMSIsInN1YiI6IjVmOGNmY2VkMTdjNDQzMDAzN2RhNTAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUkG3NjP6NXDZ8LmZn6JBj3USOd5e8gPtgcISeAwoOA';
    const url = 'https://api.themoviedb.org/3/trending/movie/week?page='+page;
    const myHeaders  = new Headers();
    myHeaders.append('Authorization',`Bearer ${token}`);
    myHeaders.append('Content-Type','application/json');
    const res = await fetch(url,{
      method: 'GET',
      headers: myHeaders
    })
    const resJSON = await res.json();
  
    saveMovies(resJSON.results);
    setPage(resJSON.page);
    setLastPage(resJSON.total_pages);
    }

    consultarAPI();
});

  return (
    <Fragment>
      <Container>      
        <Header>
          <Pagination
            page = {page}
            last_page = {last_page}
            setPage = {setPage}
          />
          
        </Header>
          
        <Main
          movies = {movies}
        />
      </Container>
    </Fragment>
    );
};

/* Index.getInitialProps = async (ctx) =>{
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzJjYTE5NTEwZGY4Y2UwNmNiYjM0YTg2ZGI4MWFmMSIsInN1YiI6IjVmOGNmY2VkMTdjNDQzMDAzN2RhNTAwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hUkG3NjP6NXDZ8LmZn6JBj3USOd5e8gPtgcISeAwoOA';
  const url = 'https://api.themoviedb.org/3/trending/movie/week?page=1';
  const myHeaders  = new Headers();
  myHeaders.append('Authorization',`Bearer ${token}`);
  myHeaders.append('Content-Type','application/json');

  const res = await fetch(url,{
    method: 'GET',
    headers: myHeaders
  })
  const resJSON = await res.json();
  return {page: resJSON.page, total_pages: resJSON.total_pages, movies: resJSON.results};
}; */
 
export default Index;

