import React, { Component } from 'react';
import s from './Pagination.module.scss';
import cl from 'classnames';
import { connect } from 'react-redux';
import { decreaseCurrentGroupAction, increaseCurrentGroupAction, setCurrentPageAction } from '../../redux/actions/paginationAction';

class Pagination extends Component {

  pageClickHandle = (e) => {
    e.preventDefault();

    const page = +e.target.innerHTML;
    if (this.props.currentPage !== page) {
      this.props.setCurrentPage(page)
      this.props.changePage(page);
    }
  }

  onMoreHandle = (e) => {
    e.preventDefault();

    const newGroup = this.props.currentGroup + 1;
    const currentPage = this.props.currentPage;
    const expectedPage = this.props.groups[newGroup][0];
    const newPage = expectedPage > currentPage ? expectedPage : currentPage;

    this.props.increaseCurrentGroup();
    this.props.setCurrentPage(newPage)
    this.props.changePage(newPage);
  }

  onLessHandle = (e) => {
    e.preventDefault();

    const newGroup = this.props.currentGroup - 1;
    const currentPage = this.props.currentPage;
    const expectedPage = this.props.groups[newGroup][4];
    const newPage = expectedPage < currentPage ? expectedPage : currentPage;

    this.props.decreaseCurrentGroup();
    this.props.setCurrentPage(newPage)
    this.props.changePage(newPage);
  }

  onNextHandle = (e) => {
    e.preventDefault();

    if (e.currentTarget.parentNode.classList.contains('disabled')) {
      return;
    }

    const currentIndex = this.props.groups[this.props.currentGroup].indexOf(this.props.currentPage);
    if (currentIndex === 4) {
      this.props.increaseCurrentGroup();
    }

    const newPage = this.props.currentPage + 1;

    this.props.setCurrentPage(newPage)
    this.props.changePage(newPage);
    
  }

  onPrevHandle = (e) => {
    e.preventDefault();

    if (e.currentTarget.parentNode.classList.contains('disabled')) {
      return;
    }

    const currentIndex = this.props.groups[this.props.currentGroup].indexOf(this.props.currentPage);
    if (currentIndex === 0) {
      this.props.decreaseCurrentGroup();
    }

    const newPage = this.props.currentPage - 1;

    this.props.setCurrentPage(newPage)
    this.props.changePage(newPage);
    
  }

  render() {
    const {pages, groups, currentPage, currentGroup} = this.props;

    console.log(currentPage);
    console.log(currentGroup);
    console.log(groups);

    return (
  
      <ul className={cl("pagination", s.pagination)}>

        {
          pages > 1
            ? <li className={cl({"disabled": currentPage === 1}, s.paginationPrev)}>
                <a href="#!" onClick={this.onPrevHandle}>
                  <i className="material-icons">chevron_left</i>
                </a>
              </li>
            : null
        }

        {
          groups.length > 1 && currentGroup > 0
          ? <li className={s.paginationMore}>
              <a href="#" onClick={this.onLessHandle}>
                <i className="material-icons">more_horizon</i>
              </a>
            </li>
          : null
        }

        { groups.length && pages > 1
          ? groups[currentGroup].map((page, idx) => {
              return (
                <li 
                  className={cl(
                    {"waves-effect": page !== currentPage},
                    {"active": page === currentPage}
                  )}
                  key={idx}
                >
                  <a href="#" onClick={this.pageClickHandle}>{page}</a>
                </li>
              )
            })
          : null
        }

        {
          groups.length > 1 && currentGroup < groups.length - 1
          ? <li className={s.paginationMore}>
              <a href="#" onClick={this.onMoreHandle}>
                <i className="material-icons">more_horizon</i>
              </a>
            </li>
          : null
        }

        {
          pages > 1
            ? <li className={cl({"disabled": currentPage === pages}, s.paginationNext)}>
                <a href="#!" onClick={this.onNextHandle}>
                  <i className="material-icons">chevron_right</i>
                </a>
              </li>
            : null
        }



        {/* <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
       

  
        {/* <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
        <li class="waves-effect"><a href="#!">4</a></li>
        <li class="waves-effect"><a href="#!">5</a></li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li> */}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    pages: state.pagination.pages,
    groups: state.pagination.groups,
    currentPage: state.pagination.currentPage,
    currentGroup: state.pagination.currentGroup,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPage: value => dispatch(setCurrentPageAction(value)),
    increaseCurrentGroup: () => dispatch(increaseCurrentGroupAction()),
    decreaseCurrentGroup: () => dispatch(decreaseCurrentGroupAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)