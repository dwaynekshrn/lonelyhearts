import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import Age from './form/Age';
import Gender from './form/Gender';

const FIELDS = [
{type: "text", label: "ageMin", name: "ageMin", age: 20, component:{Age} },
{type: "text", label: "ageMax", name: "ageMax", age: 40, component:{Age} },
];

const FIELDS2 = [
{type: "radio", label: "Any", value: "any", component:{Gender}},
{type: "radio", label: "Male", value: "male", component:{Gender}},
{type: "radio", label: "Female", value: "female", component:{Gender}}
]

class Form extends Component{
    state = {search: ''}

    renderAge(){
        const newState = this.state.search;
        const newUpdate = this.updateSearch.bind(this);
          return _.map(FIELDS, ({type, name, age, value, label}) => {
           return <Field key={label} type="text" name={name} age={age} label={label} value={value} change={newUpdate} inputState={newState} component={Age} />
          }); 
    }

    renderGender(){
        const newState = this.state.search;
        const newUpdate = this.updateSearch.bind(this);
        return _.map(FIELDS2, ({type, value, label}) => {
         return <Field key={label} type="radio" value={value} name={value} label={label} change={newUpdate} inputState={newState} component={Gender} />
        }); 
  }

  updateSearch(event){
      this.setState({search: event.target.value.substr(0,2)});
  }

    render(){
        return(
            <div id="userPreferences">
            <form className="form">
                {this.renderAge()}
                <fieldset className="form-group">
                {this.renderGender()}
                </fieldset>
                <button type="button"  className="btn btn-danger btn-lg btn-block">Filter</button>
                <button type="button"  className="btn btn-default btn-lg btn-block">Reset</button>
            </form>       
              </div>
        )
    }
}

export default reduxForm({
form: 'datesForm'
})(Form);
