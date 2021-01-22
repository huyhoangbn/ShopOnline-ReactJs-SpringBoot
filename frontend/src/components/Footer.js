import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer center-on-small-only" style={{
                fontFamily: 'Source Sans Pro'
            }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 ml-auto">
                            <h5 className="title social-section-title">Social Media</h5>
                            <div className="social-section ">
                                <ul className="text-center">
                                    <li>
                                        <a className="btn-floating  btn-fb waves-effect waves-light" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-ins waves-effect waves-light" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="btn-floating  btn-li waves-effect waves-light" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Vận chuyển</h5>
                            <ul>
                                <li>
                                    <a>Đặt hàng tại Shop</a>
                                </li>
                                <li>
                                    <a>Giao hàng online</a>
                                </li>
                                <li>
                                    <a>Chính sách giao hàng &amp; Điều kiện</a>
                                </li>
                                <li>
                                    <a>Xử lý lỗi</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h5 className="title">Trợ giúp?</h5>
                            <ul>
                                <li>
                                    <a>FAQ</a>
                                </li>
                                <li>
                                    <a>Liên hệ với chúng tôi</a>
                                </li>
                                <li>
                                    <a>Chính sách hoàn trả</a>
                                </li>
                                <li>
                                    <a>Đăng ký sản phẩm</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-lg-4">
                            <h5 className="title">Địa chỉ </h5>
                            <ul className="">
                                <li>
                                    <a>B5 - Nguyễn Cơ Thạch - Nam Từ Liêm - Hà Nội</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container-fluid">
                        © 2020 Copyright:
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
