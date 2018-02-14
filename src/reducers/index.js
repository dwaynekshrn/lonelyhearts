import { combineReducers } from 'redux';
import dateReducer from './dateReducer';
import userReducer from './userReducer';
import {reducer as reduxForm } from 'redux-form';


export default combineReducers({
    dates: dateReducer,
    user: userReducer,
    form: reduxForm
});