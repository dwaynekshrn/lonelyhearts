import React from 'react';
import Form from './Form';

export default() =>{

        return(
        <div className="col col-sm-12 col-md-6 col-lg-4" style={{marginTop: '10px', marginLeft: '10px'}}>
            <div className="card">   
            <div className="card-header">
                Search Criteria
            </div>  
            <div className="container text-center">
            <Form />
            </div>
            </div>
        </div>
        )
}

