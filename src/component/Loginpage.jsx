import React, { Component } from 'react'

export default class Loginpage extends Component {
    render() {
        return (
            <div style={{background:"#cfd1d4",height:"90vh"}}>
                <div className='container-flud row text-center'> 
                <div className='col-6 container my-5'>
                    <h1 className='display1 mycol3'><i class="fab fa-facebook-f fa-2x"></i>ackbook</h1>
                    <h3>Fackbook helps you connect and share with the people in your life.</h3>
                </div>
                <div className="col-5 container my-5">
                <div class="card">
                    <div class="card-body">
                        <div className='my-2'>
                            <input type="text" className='btn-block p-2' name="" id="" placeholder='Enter User Email' style={{borderRadius:"5px"}}/>
                        </div>
                        <div className='my-2'>
                            <input type="text" className='btn-block p-2' placeholder='Enter User Password' style={{borderRadius:"5px"}}/>
                        </div>
                        <div className='my-2'>
                            <button className='mycol btn btn-block'>Log In</button>
                        </div>
                        <div>
                            <a href="/">Forgotten password?</a>
                        </div>
                        <hr/>
                        <button className='btn mycol2' data-toggle="modal" data-target="#exampleModal" >Create New Account</button>


                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="exampleModalLabel">Sign Up</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                {/* <div>
                                    <input type="text" className='form-check-input' placeholder="Enter name"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Enter email"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Enter new password"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Enter gender"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Enter date of birth"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="Enter occupation"/>
                                </div> */}
                                <input class="form-control my-2" type="text" placeholder="Enter name" />
                                <input class="form-control my-2" type="email" placeholder="Enter email" />
                                <input class="form-control my-2" type="number" placeholder="Enter password" />
                                <select class="form-control my-2">
                                    <option selected>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <input class="form-control my-2" type="date" placeholder="Enter password" />





                            </div>
                            <div class="m-3">
                                <button type="button" class="btn mycol2">Sign Up</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                </div>
                </div>
            </div>
        )
    }
}
