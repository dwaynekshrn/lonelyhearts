import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { getDates, getUser } from './actions';

import Filter from './component/Filter';
import Header from './component/Header';
import Match from './component/Match';

import Dates from './component/match/dates';
import Contact from './component/Contact';


class App extends Component{
constructor(props){
    super(props);
    this.state = {ageMin: '', ageMax: '', stateGender: 'male' && 'female'}
    
}

    componentDidMount(){
        this.props.getDates(); 
    }

     renderContact(){
        if(!this.props.user){
            return (
              <h4>Pick A Heart throb...</h4>
            )
          } else {
           return <Contact photo={this.props.user.picture.large} first={this.props.user.first} last={this.props.user.last} phone={this.props.user.phone} cell={this.props.user.cell} email={this.props.user.email}  />
          }
    }
    
    renderDates(){

    let ageMin = this.state.ageMin;
    ageMin = ageMin || 0;
    let ageMax = this.state.ageMax;
    ageMax = ageMax || 100;
    let stateGender = this.state.stateGender;
    stateGender = stateGender || 'male' || 'female';

    let today = new Date().getFullYear();
    parseInt(today);
    return this.props.dates.map(date => {
    let birthYear = date.dob.slice(0,4);
    const age = today - birthYear;
    const click = () => this.props.getUser(date);
    let suitors = <Dates key={date.cell} picture={date.picture.thumbnail} firstName={date.name.first} lastName={date.name.last} gender={date.gender} dob={age} click={click}/>      
    if(suitors.props.dob >= ageMin && suitors.props.dob <= ageMax && suitors.props.gender === stateGender){
    return suitors;
    }

       });
    
    }
    
    renderMatches(){
        const countDates = this.props.dates.length;
        const heartthrob = this.renderContact();
        const match = this.renderDates();
        return <Match matches={match} count={countDates} dating={heartthrob} /> 
    }

    render(){
        console.log('PROBLEM',this.props.formValues);
        return(
            <div className="row">
              <Header />
              <Filter onDateSearch={() => this.setState({ageMin: 19, ageMax: 84, stateGender: 'female'})} />
              {this.renderMatches()}
              </div>
        )
    }
}

function mapStateToProps({dates, user, form}){
console.log('SOLUTION', form.datesForm)
    return { 
        dates, 
        user,
        formValues: form.datesForm
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getDates, getUser }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(App);