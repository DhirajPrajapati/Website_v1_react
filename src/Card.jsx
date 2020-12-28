import React from 'react';

const Card = (props) =>{
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
            <div class="card">
                <img src={props.imgsrc} class="card-img-top" alt="Services" />
                <div class="card-body">
                    <h4>{props.title}</h4>
                    <p class="card-text">{props.desc}</p>
                </div>
            </div>
       </div>
        </>
    )
};

export default Card;