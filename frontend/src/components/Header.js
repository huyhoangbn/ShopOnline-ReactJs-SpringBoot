import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link, NavLink, Switch } from 'react-router-dom'

import CartButton from '../pagecomponents/CartButton'


class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            linkLogin: '/login'
        }
        this.clickButtonLogin = this.clickButtonLogin.bind(this);
    }

    componentDidMount(){

    }
    render() {
        const mystyle = {
            fontSize: "40px",
            color: '#d54d7b',
            padding: "20px",
            fontFamily: 'Great Vibes',
            whiteSpace: "nowrap"
        }
        var {linkLogin} = this.state;
        return (
            
                <header style={{
                    fontFamily: 'Source Sans Pro',
                    textAlign:'center'
                }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <h4 style={mystyle}> <i>H2 Store</i><span className="sr-only">(current)</span></h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto ">
                                <li className="nav-item">
                                    <NavLink activeStyle={{
                                        fontWeight: 'bold'
                                    }} exact to="/home" className="nav-link" >
                                
                                    Trang chủ 
                                   
                                    </NavLink>
                                </li>
                                <li className="nav-item">

                                    <NavLink activeStyle={{
                                         fontWeight: 'bold'
                                    }} to="/about" className="nav-link">Giới thiệu</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Danh mục sản phẩm
                            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to= "/productIphone">Iphone</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/productSS">SamSung</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link className="dropdown-item" to="/productOppo">Oppo</Link>
                                    </div>
                                </li>

                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                {/* <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" /> */}
                                <Link id="linkLogin" to={linkLogin} onClick={this.clickButtonLogin}>
                                    <img id="loginButton" src="https://www.flaticon.com/svg/static/icons/svg/64/64572.svg" alt="Login" width="30px" height="30px" style={{ margin: "15px" }}  />
                                </Link>
                                <span></span>
                                
                                <CartButton>
                                </CartButton>
                                
                            </form>
                        </div>
                    </nav>
                    
                </header>
        );
    }
    clickButtonLogin (){
        if(document.getElementById('loginButton').src === 'https://www.flaticon.com/svg/static/icons/svg/64/64572.svg'){
            if(localStorage.getItem('token') != "null")
                this.setState({
                    linkLogin: '/home'
                })       
            
        }
        if(document.getElementById('loginButton').src.includes('/img/svg/logout.svg')){
            alert('Đăng xuất thành công!')
            localStorage.setItem('token',null)   
            document.getElementById('loginButton').src = 'https://www.flaticon.com/svg/static/icons/svg/64/64572.svg'

            
           
        }
    }

}

export default Header;
