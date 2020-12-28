import React from 'react';
import { NavLink } from "react-router-dom";

const Component = (props) => {
    return(
        <>
            <section id="home" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 pt-5 order-2 order-lg-1">
                                    <h1>{props.title} <strong className="brand-name">Dhiraj Prajapati.</strong></h1>
                                    <h3 className="my-3">{props.desc}</h3>
                                    <div className="mt-3">
                                        <NavLink to={props.link} className="btn btn-custom">{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 order-1 order-lg-2 home-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Component;