
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAIL,
  } from '../actions/productActions';
  
  const initialState = {
    loading: false,
    products: [],
    error: null,
  };
  
 const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
          return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
          return { 
            ...state, 
            loading: false, 
            products: action.append ? [...state.products, ...action.payload] : action.payload, 
            error: null 
          };
        case FETCH_PRODUCTS_FAIL:
          return { ...state, loading: false, error: action.payload };
        default:
          return state;
      }
    };
  
  export default productReducer;
  
