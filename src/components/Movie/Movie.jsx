import s from './Movie.module.scss';
import cl from 'classnames';

function Movie(props) {
  const { 
    Title: name, 
    Year: year, 
    Poster: poster, 
    imdbID: id,
    Type: type
  } = props;

  return (
    <div className={cl('card', s.movie)} id={id}>
      <div className="card-image">
        {
          poster === 'N/A'
          ? <img src={`https://via.placeholder.com/300x400.png?text=${name}`} /> 
          : <img src={poster} />

        }

      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{year}</p>
        <i className="indigo-text">{type}</i>
      </div>
    </div>
  )
}

export {Movie}