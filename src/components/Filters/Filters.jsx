import React, { Component } from 'react';
import s from './Filters.module.scss';

class Filters extends Component {
  changeHandle = (e) => {
    const filter = e.target.value;
    this.props.onFilterChange(filter);
  }

  render() {
    return (
      <div className={s.filters}>
        <p>
          <label>
            <input className="with-gap" name="group1" type="radio" value="all" onChange={this.changeHandle}  />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input className="with-gap" name="group1" type="radio" value="movie" onChange={this.changeHandle}  />
            <span>Movie</span>
          </label>
        </p>
        <p>
          <label>
            <input className="with-gap" name="group1" type="radio" value="series" onChange={this.changeHandle}  />
            <span>Series</span>
          </label>
        </p>
        <p>
          <label>
            <input className="with-gap" name="group1" type="radio" value="episode" onChange={this.changeHandle}  />
            <span>Episode</span>
          </label>
        </p>
      </div>
    )
  }
}

export default Filters