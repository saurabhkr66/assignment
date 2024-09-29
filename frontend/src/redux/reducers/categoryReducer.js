
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAIL,
  } from '../actions/categoryAction';
  
  const initialState = {
    loading: false,
    categories: [],
    error: null,
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return { ...state, loading: true };
      case FETCH_CATEGORIES_SUCCESS:
        return { 
          ...state, 
          loading: false, 
          categories: action.payload, 
          error: null 
        };
      case FETCH_CATEGORIES_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  