import { DECREASE_CURRENT_GROUP, INCREASE_CURRENT_GROUP, SET_CURRENT_GROUP, SET_CURRENT_PAGE, SET_MOVIES, SET_PAGES } from "../actions/actionTypes"

const initialState = {
  pages: 0,
  groups: [],
  movies: [],
  currentPage: 1,
  currentGroup: 0
}

const setGroupPages = (pages) => {
  const allPages = [];

  for (let i = 1; i <= pages; i++) {
    allPages.push(i)
  }

  if (pages < 6) {
    return new Array([...allPages]);
  }

  const groups = Math.ceil(allPages.length / 5);

  const groupedPages = [];

  for (let i = 1; i <= groups; i++) {
    if (i === groups) {
      groupedPages.push(allPages.slice(-5))
    } else {
      groupedPages.push(allPages.slice((i - 1) * 5, i * 5))
    }
  }

  return groupedPages;
}

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES: {
      return {
        ...state,
        pages: action.payload,
        groups: setGroupPages(action.payload)
      }
    }
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.payload
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    case SET_CURRENT_GROUP: {
      return {
        ...state,
        currentGroup: action.payload
      }
    }
    case INCREASE_CURRENT_GROUP: {
      return {
        ...state,
        currentGroup: state.currentGroup + 1
      }
    }
    case DECREASE_CURRENT_GROUP: {
      return {
        ...state,
        currentGroup: state.currentGroup - 1
      }
    }
    default:
      return state;
  }
}

export default paginationReducer;