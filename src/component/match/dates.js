import React from 'react';

export default({picture, firstName, lastName, dob, click }) => {
return(
    <li className="list-group-item" style={{ backgroundColor: 'pink' }}>
    <img className="photo" src={picture} alt="" />
    <span className="name lead">{firstName} {lastName}</span>
    <span className="age lead">{dob}</span>
    <button onClick={click} className="btn btn-danger">Contact</button>
  </li>
)
}