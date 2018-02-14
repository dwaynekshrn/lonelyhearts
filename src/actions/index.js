import axios from 'axios';
import { GET_DATES, GET_USER } from './types';

export const getDates = () => async dispatch => {
    const res = await axios.get('https://randomuser.me/api/?results=10');
    dispatch({ type: GET_DATES, payload: res.data.results });
};

export const getUser = user => async dispatch => {
    dispatch({type: GET_USER, payload: user });
  }
