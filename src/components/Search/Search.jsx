import React, { Component } from 'react';
import cl from 'classnames';
import s from './Search.module.scss';

class Search extends Component {
  state = {
    search: '',

  }

  changeHandle = (e) => {
    this.setState({search: e.target.value})
  }

  keyPressHandle = (e) => {
    if (this.state.search.length < 3) {
      return
    }

    if (e.key === 'Enter' || e.key === 'enter') {
      this.props.onSearch(this.state.search);
    }
  }

  clickHangle = (e) => {
    this.props.onSearch(this.state.search);
  }

  render() {
    const {search} = this.state;

    return (
      <div className="row">
        <div className="col s12">
          <div className={cl("input-field", s.search)}>
            <input 
              id="email_inline" 
              type="search" 
              className={cl("validate", s.searchInput)} 
              placeholder="Search"
              value={search}
              onChange={this.changeHandle}
              onKeyPress={this.keyPressHandle}
            />
            <a 
              className={cl("waves-effect", "waves-light", "btn", s.searchBtn)}
              onClick={this.clickHangle}
              disabled={search.length < 3 ? true : false}
            >
              <i className={cl("material-icons", "large")}>search</i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export {Search}