import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

const Service = () =>{
    return(
        <>
            <div id="service" className="service">
                <div className="my-5">
                    <h1 className="text-center">My Serives</h1>
                </div>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4 mb-5">
                                {
                                    Cdata.map((value,index)=>{
                                        return <Card key={index} title={value.title} imgsrc={value.imgsrc} desc={value.desc} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;