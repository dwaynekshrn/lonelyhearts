import React from 'react';

export default({photo, first, last, phone, cell, email}) => {
       return(
        <div className="card" style={{width: 30 + 'em', marginTop: '8px'}}>
        <img className="card-img-top" src={photo} alt="" />
        <div className="card-block">
          <h4 className="card-title">{first} {last}</h4>
          <ul>
             <li>Phone #: {phone}</li>
             <li>Cell #: {cell}</li>
             <li>Email: {email}</li>
          </ul>
        </div>
      </div>
       )
}