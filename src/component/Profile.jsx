import React, { Component } from 'react'
import { connect } from "react-redux"



class Profile extends Component {
    render() {
        console.log("++++++++++++++++++++++++", this.props.user.data);
        const { data } = this.props.user
        console.log(data,'--------------->>>>>>>>>>>');
        return (
            <div className='text-center'>
                <div className='bg-info'>
                    <img src="san.jpeg" height='300px' width='300px' alt="" style={{borderRadius:"50%"}}/>
                </div>
                <div className='bg-warning container'>
                <table class="table">
                       
                        <tbody>
                        <tr>
                            <th scope="row">Name:-</th>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                            <th scope="row">Birthday:-</th>
                            <td>02/july/1995</td>
                            </tr>
                            <tr>
                            <th scope="row">Gender:-</th>
                                <td>{data.gender}</td>
                            </tr>
                            <tr>
                            <th scope="row">Email:-</th>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                            <th scope="row">Occupation:-</th>
                               {data.occupation== null ?<td> Add Occupation</td> : <td>{data.occupation}</td>} 
                            </tr>
                        </tbody>
                        </table>
                  
              
                </div>
                <button className='btn btn-dark' type="button" data-toggle="modal" data-target="#exampleModal">Edit Profile</button>

          

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                               <input class="form-control my-2" type="text" placeholder="Enter name" onChange={this.handler} name="name" />
                                <input class="form-control my-2" type="email" placeholder="Enter email" onChange={this.handler} name="email"/>
                                <input class="form-control my-2" type="text" placeholder="Enter Occupation" onChange={this.handler} name="occupation"/>
                                <select class="form-control my-2" onChange={this.handler} name="gender">
                                    <option selected>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-dark">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
   

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)