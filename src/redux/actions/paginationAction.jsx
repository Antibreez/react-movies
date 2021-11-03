import { DECREASE_CURRENT_GROUP, INCREASE_CURRENT_GROUP, SET_CURRENT_GROUP, SET_CURRENT_PAGE, SET_MOVIES, SET_PAGES } from "./actionTypes";

export const setPagesAction = (payload) => ({
  type: SET_PAGES,
  payload
})

export const setMoviesAction = (payload) => ({
  type: SET_MOVIES,
  payload
})

export const setCurrentPageAction = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
})

export const setCurrentGroupAction = (payload) => ({
  type: SET_CURRENT_GROUP,
  payload
})

export const increaseCurrentGroupAction = () => ({
  type: INCREASE_CURRENT_GROUP
})

export const decreaseCurrentGroupAction = () => ({
  type: DECREASE_CURRENT_GROUP
})

