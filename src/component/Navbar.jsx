import React, { Component } from 'react'
import Loginpage from '../component/Loginpage';
import Profile from '../component/Profile';
import {Route ,Redirect} from 'react-router-dom'
import { connect} from "react-redux"

 class Navbar extends Component {





    render() {
        console.log(this.props, "======");
        console.log(this.props.isAuth);
        return (
            <>
                    <div className='mycol text-center'>
                        <i class="fab fa-facebook-f fa-2x m-1" style={{}}></i>
                        <span class="mb-0 h1" style={{}}>ackbook</span>
                </div>
                {this.props.isAuth ?  < Redirect  to='/profile'  /> :  < Redirect  to='/'  />}

               <Route exact path='/' component={Loginpage}/>
               <Route path="/profile" component={Profile} />
               
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})

const mapDispatchToProps = {
   

}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
