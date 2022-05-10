import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import CustomPagination from '../../components/pagination/CustomPagination';
import Genres from '../../components/SingleContent/Genres';
import SingleContent from '../../components/SingleContent/SingleContent';


export default function Movies () {

  const [loading, set_loading] = React.useState(false);
  const [page, set_page] = React.useState(1);
  const [contents, set_contents] = React.useState([]);
  const [no_of_pages, set_no_of_pages] = React.useState(1);
  const [selected_genres, set_selected_genres] = React.useState([]);
  const [genres, set_genres] = React.useState([]);




  const fetchMovies = async () => {
    set_loading(true);

    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=e002f08f46e0049891b3812857957fab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);

    console.log(data)
    set_loading(false)
    set_contents(data.results)
    set_no_of_pages(data.total_pages)
  }

  React.useEffect(() => {
    fetchMovies();
  }, [page])



  return (
    <div>
      <h2> Movies </h2>

      <Genres 
        type='movie'
        selected_genres={selected_genres}
        genres={genres}
        set_selected_genres={set_selected_genres}
        set_genres={set_genres}
        set_page={set_page}
      />

      <div className='trending'>
        {
          loading ? <CircularProgress style={{
            display: 'flex',
            alignItems: 'center',
            display: 'block',
            marginLeft: '50%',
            marginTop: '5%',
            color: 'white'
          }}/> : 
          contents.map(each => {
            return <SingleContent 
                      key = {each.id}
                      poster = {each.poster_path} 
                      title = {each.title}
                      date = {each.release_date || each.first_air_date}
                      media_type = "movie"
                      vote_average = {each.vote_average}
                       />
          })
        }
      </div>

        {no_of_pages > 1 && (<CustomPagination set_page={set_page} numberOfPages={500}/>)}
      </div>
  )
}


// https://api.themoviedb.org/3/discover/movie?api_key=e002f08f46e0049891b3812857957fab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate