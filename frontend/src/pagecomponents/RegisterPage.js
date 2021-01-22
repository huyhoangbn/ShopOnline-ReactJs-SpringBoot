import React, { Component } from 'react'
import './Button.css'
import callApi from '../utils/apiCaller'

class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        }
        this.changeUserNameHandle = this.changeUserNameHandle.bind(this);
        this.changePasswordHandle = this.changePasswordHandle.bind(this);
        this.changeEmailHandle = this.changeEmailHandle.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
    }
    changeUserNameHandle = (event) => {
        this.setState({ username: event.target.value })
    }
    changePasswordHandle = (event) => {
        this.setState({ password: event.target.value })
    }
    changeEmailHandle = (event) => {
        this.setState({ email: event.target.value })
    }
    saveAccount = (e) => {
        e.preventDefault();
        let account = { username: this.state.username, password: this.state.password, email: this.state.email }
        console.log(account)
        var { username, password, email } = this.state
        callApi('user/register', 'POST', {
            username: username,
            password: password,
            email: email
        }).then(res => {
            console.log(res.data)
            if (res.data.responseCode === 1) {
                alert(res.data.messageCode)
            } else {
                alert(res.data.messageCode)
                this.props.history.push("/login")
            }
        })

    }

    cancel() {
        this.props.history.push("/login")
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container" style={{ background: 'url("https://mayphatdiensg.com/wp-content/uploads/2020/03/background-login-2.png")', maxWidth: '100%', height: 'calc(100vh - 100px)', fontFamily: 'Source Sans Pro', }}>
                <div className="container" style={{ paddingLeft: "250px", paddingTop: "40px" }}>
                    <div className="row">
                        <div className="card col-md-8 offset-md-3" style={{background:"url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-texture-geometric-black-metal-gradient-image_17809.jpg')",color:'white'}}>
                            <h3 style={{ textAlign: "center" }}>Đăng ký
                            <button type="button" class="close" aria-label="Close" onClick={this.cancel.bind(this) }>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </h3>
                            <div className="cardbody">
                                <form onSubmit={this.saveAccount}>
                                    <div className="form-group">
                                        <label>Tài khoản: </label>
                                        <input type="text"
                                            placeholder="Tài khoản" name="username"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.changeUserNameHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu: </label>
                                        <input type="password"
                                            placeholder="Mật khẩu"
                                            name="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.changePasswordHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input type="text"
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeEmailHandle} />
                                    </div>

                                    <div style={{ textAlign: 'center' }}> <button type="submit" className="snip1457 ">Đăng ký</button> </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage
