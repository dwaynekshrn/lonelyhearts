import React from 'react';

export default({ input, label, name, values }) => {
        return(
            <div className="form-group">
            <label className="control-label">{label}</label>
            <input {...input}  className="form-control" name={name} values={name} type="number" />
            </div>
        )
}