import React from 'react';

export default({ input, type, label, name, data}) => {
        return(
               <div>
          
                <label className="form-check-label">
                  <input {...input} className="form-check-input" type="radio" name={name} id="inlineRadio1" defaultValue={data} /> 
                {label}
                  </label>
          
  
              </div>
        )
}
