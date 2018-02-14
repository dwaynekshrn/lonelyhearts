import {GET_DATES} from '../actions/types';

export default function(state = [], action){
    switch(action.type){
        case GET_DATES:
        return action.payload;
        default:
        return state;
    }
}