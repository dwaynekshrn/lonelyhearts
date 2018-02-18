import _ from 'lodash';
import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import Age from './form/Age';
import Gender from './form/Gender';

const FIELDS = [
{type: "text", label: "ageMin", name: "ageMin", component:{Age} },
{type: "text", label: "ageMax", name: "ageMax", component:{Age} },
];

const FIELDS2 = [
{type: "radio", label: "Any", name: "gender", values: "any", component:{Gender}},
{type: "radio", label: "Male", name: "gender", values: "male", component:{Gender}},
{type: "radio", label: "Female", name: "gender", values: "female", component:{Gender}}
]

class Filter extends Component{

    renderAge(){
          return _.map(FIELDS, ({type, name, values, label}) => {
           return <Field key={label} type="text" name={name} label={label} values={values} component={Age} />
          }); 
    }

    renderGender(){
        return _.map(FIELDS2, ({type, label, name, values}) => {
         return  <Field key={label} type="radio" name={name} label={label} data={values} component={Gender} />

        }); 
  }

render(){
        return(
        <div className="col col-sm-12 col-md-6 col-lg-4" style={{marginTop: '10px', marginLeft: '10px'}}>
            <div className="card">   
            <div className="card-header">
                Search Criteria
            </div>  
            <div className="container text-center">
            <div id="userPreferences">
            <form onSubmit={this.props.handleSubmit(this.props.onDateSearch)} className="form">
                {this.renderAge()}
                <div className="form-check form-check-inline">
                {this.renderGender()}
                </div>
                <button type="submit"  className="btn btn-danger btn-lg btn-block">Filter</button>
                <button type="button" onClick={(this.props.onReset)}  className="btn btn-default btn-lg btn-block">Reset</button>
            </form>       
              </div>
            </div>
            </div>
        </div>
        )
    }
}

export default reduxForm({
    form: 'datesForm'
    })(Filter);