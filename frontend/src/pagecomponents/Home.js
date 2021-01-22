import React, { Component } from 'react'
import SlideShow from '../components/SlideShow';
import Footer from '../components/Footer'
import PageComponent from '../pagecomponents/PageComponents'
import callApi from '../utils/apiCaller'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber: 0,
        }
    }
    componentDidMount() {
        callApi('product/getListProduct', 'GET', null).then(res => {
            this.setState({
                pageNumber: (res.data.length % 6 === 0) ? res.data.length / 6 : ((res.data.length - res.data.length % 6) / 6 + 1)
            });
        });
    }
    render() {
        var {pageNumber} = this.state;
        return (
            <div>
                    <div className="container">
                        <SlideShow />
                        <PageComponent pageNumber={pageNumber}/>
                    </div>
                    <Footer />
            </div>
        )
    }
}

export default Home
