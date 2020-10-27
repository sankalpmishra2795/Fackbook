import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
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
                            <td>Sankalp Mishra</td>
                            </tr>
                            <tr>
                            <th scope="row">Birthday:-</th>
                            <td>02/july/1995</td>
                            </tr>
                            <tr>
                            <th scope="row">Gender:-</th>
                            <td>Male</td>
                            </tr>
                            <tr>
                            <th scope="row">Email:-</th>
                            <td>sankalpmishra2795@gmail.com</td>
                            </tr>
                            <tr>
                            <th scope="row">Occupation:-</th>
                            <td>Fullstack Devloper</td>
                            </tr>
                        </tbody>
                        </table>
                  
              
                </div>
                
            </div>
        )
    }
}
