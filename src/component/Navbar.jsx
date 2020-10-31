import React, { Component } from 'react'
import Loginpage from '../component/Loginpage';
import Profile from '../component/Profile';
import {Route} from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <>
                    <div className='mycol text-center'>
                        <i class="fab fa-facebook-f fa-2x m-1" style={{}}></i>
                        <span class="mb-0 h1" style={{}}>ackbook</span>
                    </div>
                <Route exact path='/' component={Loginpage} />
                <Route path='/profile' component={Profile} />
            </>
        )
    }
}
