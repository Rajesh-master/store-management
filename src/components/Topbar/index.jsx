import React from 'react';
import "./topbar.css";
import { connect } from 'react-redux';
import { adminLogout } from '../../actions';
import { useHistory } from "react-router-dom";



const Topbar = ({ loginStatus, logOutAdmin }) => {
    const history = useHistory()

    return (<div className="topbar">
        <div><img src="https://www.valomnia.com/wp-content/uploads/2015/11/Store-manager.png" alt="pharmacy-management-software" /></div>
        <div className="topbar-menu">
            {loginStatus && <p onClick={() => {
                localStorage.setItem('loginStatus', false)
                localStorage.setItem('adminLogin', false)
                localStorage.setItem('salesLogin', false)
                history.push("/");
                logOutAdmin()
            }} style={{ cursor: 'pointer', color:"black" }}>Logout</p>}
        </div>
    </div>);
}



const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    logOutAdmin: () => dispatch(adminLogout(''))

})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
