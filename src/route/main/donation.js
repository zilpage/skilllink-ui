import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

import AppService from './../../service/app_service'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            result: null,
            campaignId: this.props.match.params.id,
        }
    }

    componentDidMount() {
        this.getCampaignById(this.props.match.params.id);

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    donate = () => {
        AppService.donate(this.state).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ loading: false, result: null })
                        alert("Donation was successful. Our admin will contact you.")
                    }
                })
        })
    }

    getCampaignById = (id) => {
        AppService.getCampaignById(id).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ result: response, loading: false, })
                    }
                })
        })
    }

    activateCampaign = (data, status) => {
        data.enabled = status;
        AppService.activateCampaign(data).then(response => {
            this.setState({ loadingMessage: null, loading: false },
                () => {
                    console.log(response);
                    if (response.code) {
                        alert(response.description)
                        this.setState({ errors: response.errors, loading: false })
                    } else {
                        this.setState({ loading: false, result: null })
                        this.getCampaigns();
                    }
                })
        })
    }





    render() {
        const { result } = this.state;
        return (
            <div className="App" id="scrool">
                <div className="App">
                    <Navigation />
                    {/* <div className="wpo-breadcumb-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="wpo-breadcumb-wrap">
                                        <h2>Donate Now</h2>
                                        <ul>
                                            <li><a href="/home">Home</a></li>
                                            <li><span>Donate</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="wpo-donation-page-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="wpo-donate-header">
                                        <h2>Make a Donation</h2>
                                        <h4 style={{textAlign: 'center'}} >{result && result.title}</h4>
                                    </div>
                                    <div>
                                        <div className="wpo-donations-amount">
                                            <h2>Your Donation</h2>
                                            <input type="number" className="form-control" onChange={this.handleChange} name="amount" id="text" placeholder="Enter Donation Amount" />
                                        </div>
                                        <div className="wpo-donations-details">
                                            <h2>Details</h2>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group"><input type="text" className="form-control" name="firstName" onChange={this.handleChange} id="fname" placeholder="First Name" /></div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group"><input type="text" className="form-control" name="lastName" onChange={this.handleChange} id="name" placeholder="Last Name" /></div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix"><input type="email" className="form-control" name="emailAddress" onChange={this.handleChange} id="email" placeholder="Email" /></div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group"><input type="text" className="form-control" name="phoneNumber" onChange={this.handleChange} id="Adress" placeholder="Phone number" /></div>
                                                <div className="col-lg-12 col-12 form-group"><textarea className="form-control" name="comment" onChange={this.handleChange} id="note" placeholder="Message" defaultValue={""} /></div>
                                            </div>
                                        </div>
                                        {/* <div className="wpo-doanation-payment">
                                            <h2>Choose Your Payment Method</h2>
                                            <div className="wpo-payment-area">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="wpo-payment-option" id="open4">
                                                            <div className="wpo-payment-select">
                                                                <ul>
                                                                    <li className="addToggle"><input id="add" type="radio" name="payment" defaultValue={30} /><label htmlFor="add">Payment By Card</label></li>
                                                                    <li className="removeToggle"><input id="remove" type="radio" name="payment" defaultValue={30} /><label htmlFor="remove">Offline Donation</label></li>
                                                                </ul>
                                                            </div>
                                                            <div id="open5" className="payment-name">
                                                                <ul>
                                                                    <li className="visa"><input id={1} type="radio" name="size" defaultValue={30} /><label htmlFor={1}><img src="data:image/png;base64,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" alt="" /></label></li>
                                                                    <li className="mas"><input id={2} type="radio" name="size" defaultValue={30} /><label htmlFor={2}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA7CAYAAACNOi92AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqsSURBVHgB7ZsJdFXFGYC/95KXFUJ2IIEEwiZLGmRVRFA4UGQRsVSsxR5cEES0CAeRc1A89aAiFEFQ3PAAisVSasWtBhAEkQQCAbKQxEA2QvZAFvKyvul/3xOVVinovS+053458+7cbebO/PPPP/PPBExMTExMTExMTExMTExMTExMTExMTP73sXCNoeSb9kOoJ4RI8HBAozeUXQ/n+QWo5bQlkHCa8MGfFuokvb2UWbZJ/BrimhBIMgQ2wzT5mElyOlRCCJd+W7Oc5Iiw/mmFHfVwYBjYL5em+iteVDIKK1NFyrdI6CIpevzwEQnl8vuVHP8u93ZbZlFEK9OqAjkGkSKI5yT6Owm2K31ParJIBLNUNOcv/aD2knsv4y1/f5ToAgnhXDkNUhtvSOJrRDCnaCVaRSB7wLMNLJHMF8upFz+f0yKcBwYjnY+gXmO0HDZKqTrx86nHwUJKeMPyDI24GbcLJAnaSaYfSkWORB8c0i3NG7ieYIkvRb8y7ZDwgGhLOW7ErQI5KbbhAojNpjd6ISXofK/0TcNxWQU9URwSkz/Z8gjFuAkrbuIb8BZhxKOnMISAOOnz2skQ7IQYk1z0bWIWhkiH+q7aLOMyN+E2DTkMb0tm96Ej/6EQ0rx6zhch9UBvVkjX9QRuwC0CEWHcrtkNdMQqQ6zo++Xocel1WwD4R6M3muzHiVDiMRjDBSIlsYohPyEZ9UVHOkyGiNv4cbshmVn0L9lXMksZKSMvBwZiuECOwF1SZ++jMxaZxv+UEbeFQr9n5Bm9LaRm4Oc4R1+G4YnBSJ3djc7YZIDrE8Hl8sQu4yK/CPTFE9FLYwViqIaIT6KtD5RIJr4e4eFYAwJQjY005efjIXHtmkbz2bM46uquKE2tsmNmQ/DAK3jwYgjoLs6ZPlAnnpHzqdLS7VwVPu1dU9na0+cIUpGWu7jKBK4cQzXEF4ZJffieENfUiF2JxMR2oXbfPuJHTqDTe58zZMINUmGKE1FRtPxAID9sJeq7owXfB+fQccRQqjfNpTqt+rJ5a/XXdqI3jcPeI6z/nd/fOLAQUld+n7D13zLi0swPnA6l86xEosLFdGyJCaKKQbjmUoZgqEDEjRqrlTfHL5q7e37rzbBaOR7Wn4ljBmmyoLmkBBUSRszy5Xj36EFzWRlFEq/7+mvCFy0icPx4p4X+dPVGIh5cSN/+HbCnp1Py0ktELF1KwOjR1CUnU7RsGXaLFz2efZqqXbuoGTRM/CkBTBdhZGUWsm3LLrp2j+a37XOxjXhLVEzGGC3ipkxZR232DvxuWYu1Qtyc7XrhOL4a66/mSrwbaW/uZUBkpHjPPrlYqFgMFIihyHD3z2LU1fPXT1MahYXnlD0xQa2cvVzl5JQru71R1e78XC17YoNKyyhWh4/kq7q6BtVUkK8+m7/M+U5xaY1KTSlQq6YsVOer7KqpqUXlrFmnsrZ+qJpbHCopOU81NDSr81vfU89PeMz5jsNuV2vW7FRV8ry6UKQaXg9Q6i1U3ott1JtLF6us7HKVeChPlZfXyMPNauUj05XD4VCq2a4qsvaotIP7nOlUV9tVc7PDGVfJK5R6XdrQev6EgRg9U/fWMvCN7ec8SUkp5LQlkB63jSEpKRcfHxuVJ7NpWbmCI+Mm8dG8Z9l/IJuG4Pbk9RzufOfwvEUciB1MXXoG7QJ8SHhtK5s37KX7tNsp3LSFjZNn88XeTAJuHo4tppvznS/jk0nfl0yAPE/2+zLZrnaqa1RgLb5nt5P39ihOf/Qkn3wiGmHxICAiTpTQQl5uGevezqDPDTdTkryDR8aNY9u2w66S1OS4jhZjZ+1Gj7K09SZaYro7T44fOU3v6cMZ29ePDS9uh6kDcZzJ59F/vEjgpEnY62X1yNuTiuw8EvccZcaMYUzc8gqVt8SxOd5VId1yj5J0441OOxN133TWStCoSU3H2snVLXZ5+Sk6Bd7k+oL6c999jKPFwrRZD+E5cD4NjS14WLXm0ozDw895v3P5KwQHxznj7cs2sWbaQd4QITk5l+o6Woxd0DJaQ6qKZYEuvGeMxCqp/SabqKggWo4eok65ypXS+1anMD5d8hKTQ6dSV9eILe0Yvd5fx5Qhi0hIyCZ45kOETJjgfN6elsY5r7bO+LolG5k5aLaEh3n3zjl06dUd6WOoTUqiorTG9QWh0uU7rM6m8WnxbVgHLCBl9wfMHDWWYycKcdQUYFeBzkcrco5Tbwlyvedooazai2HDxfWmxKCfO3mxTL9o5fK/YaiGSDFys2TddGRsZxpOnpTRpquSvvngYxn53CEdsiK1uJmJcm2grBG+/Ob9+Pt7U1hawb3PzmBKYTFV0oo14+8j1zVCZ8+iYlsB0uUzc/pQyupT8QwO5uOcMGJjI2k8dYqGqioqDx4iNa2Qfn1/A3eIDa4vx5YeiVVUKzbawXPLptJpQGdyj+0hNLKrs9J9a05QWvStt/2G5+ncq5ieXaUx1RbI8pV0e1YfbSCQhYEYqiFS9oNlfpGEBPtSdSBR5hpNnC89z6Et8UREhlCVmU3iq1vJyCim3ZzHyGvTmbKyGnZauuH/6AJi1q6he88IkpcuZ/dnx6itbcDr1jEE79zOksXbKWvbkQ4vLMd/7uNUXPDE39fmFIQ2gv1DxxSWPL6Ow0l5NAQNoS5sLPEffsaXX2bSGH0nedZRZGSWcvxoNh0iQ6kpyqKN+EYqj75DfHwaDX49SC2PJi+vkvqCBOnPxkLYYCWLwAkYiKETQ82AvEpUSi5t+k4hU8aK0USKgfWVbjiBDuLbLqKt9OF/s/YhxvMCQY2VlIrN9JNrGR4d8LJ5ENuYx1DHGfbJkvhJrwhubj5FrHcJWSHh7LdEY/Pxok9DPr7SxWSINo6X1dcAWY0NGyMfEOfDhv29qG5sw01dzzCi51lWxccR0q6F/h3PcDg/jBHdS9iX3Z5fX3eGPh2rsTs8Wbu7Lx42G3Edz5JSGMQ9g0/Rvm29pvLJlocZgIEY7stKcq2ZL0ZH/KUXuW4JXNbNp93Te8FKW3aexTIMxHCBJEJXMVSpUjd+6IRWz+HSg3j8RIptusicTtdlMGemdm3nimhIKQbilvUQmRyulUqci878qOddrGKfp2Xu0xG9eUG0Q1dN/zHcIhBt31WLUy7EoCMRd4kHZPCl17SphU0bFevbXeURRJw4FaswGLesqWu7DkXy8yza3icdKf4ImrR5n8MVPDRhiFNRZ2E0Sdq/d4cwNNy66+QozJe6WqF0bAgX694m87nei10bHnTEIX8zxG68g5tw264TDRkvrpIKXKSnplhcPwXXLSRbV2EoGXvD/e4UhoZbBaIhiwkrRSgyfaYAffjcV9HfO4ibpBK/QA+UcyQ1Woz4JtxMq+3t/VrssQ1WywdMxbmWddWUS2taIFq3+eIFpZy7cy/u6/0520mbJKwX/X3K8hjVtAKtvvtdJo5RcnhStGa8fMxlN/DIM+Kv5bhE10vv9E6Pn+j61CoRsD+z5YV7pISa+9Z2uUTlGW3X+yaxF+ukiyqkFblm/j9Ec7PIykMfafUj5LS3nIfKx3lIuCDxM3JMluP+QVzdXlu1mvYiHi3NAZKJtu1BPIROTSiRkC41cICHyJTlEP3n9SYmJiYmJiYmJiYmJiYmJiYmJv/H/AvBjNgIojIgcQAAAABJRU5ErkJggg==" alt="" /></label></li>
                                                                    <li className="ski"><input id={3} type="radio" name="size" defaultValue={30} /><label htmlFor={3}><img src="data:image/png;base64,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" alt="" /></label></li>
                                                                    <li className="pay"><input id={4} type="radio" name="size" defaultValue={30} /><label htmlFor={4}><img src="data:image/png;base64,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" alt="" /></label></li>
                                                                </ul>
                                                                <div className="contact-form form-style">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-md-12 col-12"><label>Card holder Name</label><input type="text" placeholder name="name" /></div>
                                                                        <div className="col-lg-6 col-md-12 col-12"><label>Card Number</label><input type="text" placeholder id="card" name="card" /></div>
                                                                        <div className="col-lg-6 col-md-12 col-12"><label>CVV</label><input type="text" placeholder name="CVV" /></div>
                                                                        <div className="col-lg-6 col-md-12 col-12"><label>Expire Date</label><input type="text" placeholder name="date" /></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="submit-area"><button onClick={() => this.donate()} className="theme-btn submit-btn">Donate Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    <div className="col-lg-12">
                        <div className="header-menu">
                            <ul className="smothscroll">
                                <li><a href="#scrool"><i className="fa fa-arrow-up" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Toastify" /></div>
        )
    };
}

export default App;
