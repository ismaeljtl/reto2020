import React from 'react';

import './CounterLS.css';

function CounterLS(props) {
  return (
    <div className="CounterLS">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-6 text-center">
                    <p>Cantidad de peticiones <strong>GET</strong></p>
                    <h1>{props.get}</h1>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <p>Cantidad de peticiones <strong>POST</strong></p>
                    <h1>{props.post}</h1>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <p>Cantidad de peticiones <strong>PUT</strong></p>
                    <h1>{props.put}</h1>
                </div>
                <div className="col-sm-3 col-6 text-center">
                    <p>Cantidad de peticiones <strong>DELETE</strong></p>
                    <h1>{props.delete}</h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CounterLS;
