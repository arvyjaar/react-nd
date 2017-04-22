import React from 'react';

let Movie = (props) =>
    (
        <div className="root">
            <h1>{props.header}</h1>
            <h2>{props.Title}</h2>
            <img src={props.Poster}/>
            <h3>{props.Genre}</h3>
        </div>
    );
export default Movie;
