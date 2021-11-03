import { Movie } from "../Movie/Movie";
import s from './Movies.module.scss';

function Movies(props) {
  const {movies} = props;

  return (
    <div className={s.movies}>
      {
        movies.map((item, idx) => {
          return <Movie key={item.imdbID} {...item}/>
        })
      }
    </div>
  )
}

export {Movies}