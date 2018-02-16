import React from 'react';

export default({ input, type, label, name}) => {
        return(

            <div>
            <div className="form-check">
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultValue={name} name={name} />
            <label className="form-check-label" htmlFor={label}>
           {label}
            </label>
            </div>

           </div>

        </div>
        )
}
