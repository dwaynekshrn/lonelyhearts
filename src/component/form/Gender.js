import React from 'react';

export default({ input, type, value, label, name, change }) => {
        return(

            <div>
            <div className="form-check">
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" defaultValue={name} onChange={change} name={name} />
            <label className="form-check-label" htmlFor={label}>
           {label}
            </label>
            </div>

           </div>

        </div>
        )
}
