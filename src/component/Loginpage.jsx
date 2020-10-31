import React, { Component } from 'react'
import axios from 'axios'
export default class Loginpage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
            email: "",
            password: "",
            gender: "",
            date: "",
            logEmail: "",
            logPassword: "",
            id: "",
            isLogin: false
        }
    }

    handler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    logUser = (e) => {
         e.preventDefault()
        const loger = {
            email: this.state.logEmail,
            password: this.state.logPassword
        }
        axios({
            url: "http://localhost:5000/api/v1/fackbook/login",
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            data: loger
        }).then(res => {
            this.setState({
                logEmail: "",
                logPassword: "",
            isLogin : true
            })
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }
    createUser = async (e) => {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            date: this.state.date
        }

      axios({
            url: 'http://localhost:5000/api/v1/fackbook/signup',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            data:user
      }).then(res => {
         this.setState({
             name: "",
            email: "",
            password: "",
            gender: "",
            date: "",
        })
      })
          .catch(err => console.log(err))
        
       
    }
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
                                    <input type="text" className='btn-block p-2' name="logEmail" id="" placeholder='Enter User Email' style={{ borderRadius: "5px" }} onChange={this.handler}/>
                        </div>
                        <div className='my-2'>
                            <input type="text" className='btn-block p-2' placeholder='Enter User Password' name="logPassword" style={{borderRadius:"5px"}} onChange={this.handler}/>
                        </div>
                        <div className='my-2'>
                            <button className='mycol btn btn-block' onClick={this.logUser} >Log In</button>
                        </div>
                        <div>
                            <a href="/">Forgotten password?</a>
                        </div>
                        <hr/>
                        <button className='btn mycol2' data-toggle="modal" data-target="#exampleModal"  >Create New Account</button>


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
                                <input class="form-control my-2" type="text" placeholder="Enter name" onChange={this.handler} name="name" />
                                <input class="form-control my-2" type="email" placeholder="Enter email" onChange={this.handler} name="email"/>
                                <input class="form-control my-2" type="number" placeholder="Enter password" onChange={this.handler} name="password"/>
                                <select class="form-control my-2" onChange={this.handler} name="gender">
                                    <option selected>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <input class="form-control my-2" type="date" onChange={this.handler} name="date"/>





                            </div>
                            <div class="m-3">
                                <button type="button" class="btn mycol2" onClick={this.createUser}>Sign Up</button>
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
