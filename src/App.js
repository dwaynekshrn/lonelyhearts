import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

import Filter from './component/Filter';
import Header from './component/Header';
import Match from './component/Match';

class App extends Component{
    render(){
        return(
            <div className="row">
              <Header />
              <Filter />
              <Match />
              </div>
        )
    }
}



export default connect(null, actions)(App);