import React from 'react';

const Contact = () =>{
    return(
        <>
            <div id="contact" className="contact">
                <div className="my-5">
                    <h1 className="text-center">Contact Me</h1>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className=" col-sm-12 col-md-6 mx-auto">
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Name</label>
                                    <input   name="name" type="text" class="form-control" id="name" autoComplete="off" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input   name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Subject</label>
                                    <input   name="subject" type="text" class="form-control" id="subject" autoComplete="off" required />
                                </div>
                                <div class="mb-3">
                                    <label for="Message" class="form-label">Subject</label>
                                    <textarea name="message"   id="" cols="30" rows="5" className="form-control"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;