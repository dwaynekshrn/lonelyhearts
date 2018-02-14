import React from 'react';

export default({ input, label, name, inputState, change }) => {
        return(
            <div className="form-group">
            <label className="control-label">{label}</label>
            <input className="form-control" type="number" defaultValue={inputState} onChange={change} />
            </div>
        )
}