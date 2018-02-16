import React from 'react';

export default({dating, count, matches}) =>{
        return(
            <div className="container" style={{ marginTop: '10px', width: '35em' }}>
             <p>{dating}</p>
            <div className="card" style={{ marginTop: '10px'}}>   
            <div className="card-header">
            {count} Candidates Found
          </div> 
            <ul className="list-group">
            <p>{matches}</p>
            </ul>
          </div>
          </div>

        )
}
