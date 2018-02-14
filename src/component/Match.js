import React, {Component} from 'react';
import Dates from './match/dates';
import Contact from './Contact';
import Form from './Form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { getDates, getUser } from '../actions';


class Match extends Component{
componentDidMount(){
    this.props.getDates();
 }

 countDates(){
   return this.props.dates.length;
 }

renderMatches(){
let filteredDates = this.props.dates;
<Form refresh={filteredDates} />
let today = new Date().getFullYear();
parseInt(today);
return this.props.dates.map(date => {
let birthYear = date.dob.slice(0,4);
const age = today - birthYear;
const click = () => this.props.getUser(date);

return (
        <Dates key={date.cell} picture={date.picture.thumbnail} firstName={date.name.first} lastName={date.name.last} gender={date.gender} dob={age} click={click}/> 
    )
   });
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

    render(){
        return(
            <div className="container" style={{ marginTop: '10px', width: '35em' }}>
            {this.renderContact()}
            <div className="card" style={{ marginTop: '10px'}}>   
            <div className="card-header">
            {this.countDates()} Candidates Found
          </div> 
            <ul className="list-group">
               {this.renderMatches()}
            </ul>
          </div>
          </div>

        )
    }
}

function mapStateToProps({dates, user, form}){
    return { 
        dates: dates, 
        user: user, 
        formVal: form.datesForm.values 
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getDates, getUser }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Match);