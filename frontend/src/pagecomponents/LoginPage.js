import React, { Component } from 'react'
import './Button.css'
import callApi from '../utils/apiCaller'
import FacebookButton from './FacebookButton';

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.changeUserNameHandle = this.changeUserNameHandle.bind(this);
        this.changePasswordHandle = this.changePasswordHandle.bind(this);
        this.login = this.login.bind(this);
    }
    changeUserNameHandle = (event) => {
        this.setState({ username: event.target.value })
    }
    changePasswordHandle = (event) => {
        this.setState({ password: event.target.value })
    }
    login = (e) => {
        e.preventDefault();
        let account = { username: this.state.username, password: this.state.password }
        console.log(JSON.stringify(account))
        var { username, password } = this.state

        callApi('user/login', 'POST', {
            username: username,
            password: password,
        }).then(res => {
            console.log(res.data)

            if (res.data.responseCode === 1) {
                alert(res.data.messageCode)

            } else {
                alert(res.data.messageCode)
                localStorage.setItem('token', res.data.value.token)
                // document.getElementById('loginButton').style.display = 'none'
                document.getElementById('loginButton').src = process.env.PUBLIC_URL + '/img/svg/logout.svg'

                // document.getElementById('loginButton').onClick = this.logout()

                // document.getElementById('cartButton').style.display = 'block'
                this.props.history.push("/home")
            }
        })
    }
    cancel() {
        this.props.history.push("/home")
    }
    register() {
        this.props.history.push("/register")
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="container" style={{ background: 'url("https://mayphatdiensg.com/wp-content/uploads/2020/03/background-login-2.png")', maxWidth: '100%', height: 'calc(100vh - 100px)', fontFamily: 'Source Sans Pro' }}>
                <div className="container" style={{ paddingLeft: "250px", paddingTop: "40px" }}>
                    <div className="row" >
                        <div className="card col-md-10 offset-md-3 offset-md-3" style={{background:"url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-texture-geometric-black-metal-gradient-image_17809.jpg')",color:'white'}}>
                            <h3 style={{ textAlign: "center" }}>Đăng nhập
                            <button type="button" class="close" aria-label="Close" onClick={this.cancel.bind(this)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </h3>

                            <div className="cardbody">
                                <form>
                                    <div className="form-group">
                                        <label>Tài khoản: </label>
                                        <input type="text" placeholder="Tài khoản" name="username" className="form-control"
                                            value={this.state.username} onChange={this.changeUserNameHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu: </label>
                                        <input type="password" placeholder="Mật khẩu" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandle} />

                                    </div>
                                    <div style={{ textAlign: 'center' }}> 
                                    <button className="snip1457" onClick={this.login} 
                                    style={{
                                        border:'none',
                                        // background: 'transparent ',
                                        // backgroundImage: 'initial',
                                        // backgroundPositionX: '0px',
                                        // backgroundPositionY: '0px',
                                        // backgroundSize: 'initial',
                                        // backgroundRepeatX: 'initial',
                                        // backgroundRepeatY: 'initial',
                                        // backgroundAttachment: 'initial',
                                        // backgroundOrigin: 'initial',
                                        // backgroundClip: 'initial',
                                        // backgroundColor: 'initial'
                                    }}>Đăng nhập
                                    </button>
                                    </div>

                                    <div style={{ textAlign: 'center' }}><p> Bạn chưa có tài khoản? <a onClick={this.register.bind(this)} style={{ color: 'blue' }}> <u>Đăng ký ngay</u></a>  </p></div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
