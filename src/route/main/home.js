import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

import AppService from './../../service/app_service'
import UrlService from './../../service/url_service';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: null,
    }
  }

  componentDidMount() {
    this.getCampaigns();

  }


  getCampaigns = () => {
    AppService.getPublicCampaigns().then(response => {
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


  render() {
    const { result } = this.state;
    return (
      <div className="App" id="scrool">
        <div className="App">
          <Navigation />
          <section className="hero hero-style-2" >
            <div className="hero-slider">
              <div className="slide">
                <div className="container" style={{ marginTop: '10px' }}>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6 col-xs-12 slide-caption">
                      <div className="slide-title">
                        <h2> <span>Skill Link</span></h2>
                      </div>
                      <div className="slide-subtitle">
                        <p>Skill Link is a platform that promotes gender equality by connecting girls in Lagos State senior secondary schools, to opportunities that enable them develop lifelong and profitable vocational skills. The program will focus on vocations which have been largely dominated by the male gender. </p>
                        <p>You Can Satisfied Yourself By Helping.</p>
                      </div>
                      <div className="btns">
                        <Link className="theme-btn" to="/campaign/list">Donate Now</Link>
                        <ul>
                          <li className="video-holder">
                            <div>
                              <div className="video-btn">
                                {/* <ul>
                                <li><button className="wrap"><i className="fi flaticon-play-button-2" aria-hidden="true" /></button></li>
                              </ul> */}
                              </div>
                            </div>
                          </li>
                          {/* <li className="video-text">Watch Our Video</li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6  col-md-6 d-none d-sm-block d-xs-block" style={{ float: 'right' }}>
                      <div className="hero-shape"><img src="https://d.wildapricot.net/images/default-album/how-to-get-donations.jpg" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="right-vec" /></div>
            </div>
            <div className="hero-shape"><img src="/static/media/shape.2e77d2d5.jpg" alt="" /></div>
          </section>
          <div className="wpo-mission-area undefined">
            <div className="container">
              <div className="row"><div className="col-12"><div className="wpo-section-title">
                <span>What We Do?</span>
                <h2>We Are In A Mission To Help The Helpless</h2>
              </div>
              </div>
              </div>
              <div className="wpo-mission-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                    <div className="wpo-mission-item">
                      <div className="wpo-mission-icon-5">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTNEQzExQzE0OEY4MTFFQTg0MTk5MEQ2MzRDODc3QzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTNEQzExQzA0OEY4MTFFQTg0MTk5MEQ2MzRDODc3QzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DnjaEAAAAixJREFUeNrEmEsoRFEYx81LJI/yKCzGIyXl0ZSNsmAjj5okUWQj5bEhUayUxazsRBE7hYWEJI9EsbCxZKEkSVNKnnlN1//kTB23+zh3Zrrfv35N9853z/3u953vnO9eh6IocYSaAtPgWteCOUhEr/KnfSM7KudylP/q0rN1EKX4BFQJxz8gCzyqDZ0EzrWpnGNygzktY7sj6AJBkK7zvw+cU0awx8A5pgB1BFl0Kkxs8sANRQSTQYmEXSVVir/Am4RdkMrBT7Am4dwp5RzMABf8V0t1YJeyih/4HNtTnWdON6udiySC+XwpSOVzSkYe8AKWwIZwvpyP9wQOY9EsVINnJTrVWN23ZVPcAY75UhGN2iVs2DrYAspkIzimxE4NBvfJBlPgW7DvNJuDM6DPYpSuwC2IFxqBZ7AMFjXsU8AwGNLI0Ife07jAZoRR8kvOLzcYAUGjwdwaT5QDdkBphPMsl3ctnnAd8uN43vclglYwCrwmY42rU+zjzmVGUQjv4FVIsagQSABJJmNcggmwIoa8CYQUWrF0D2q9kwwQO/YFAiBN66Vpnti5BeDVKyY30XsJ0xaYBGdGRuEiWQf+CPq7GV6ZLslrnLxQDsC2zAViFbMFttCCg7WGm3yM5FTdMCR5Xb8dzmntxfUSk3rWzq8QVpuDI7s/k+g1C6t8OxJ1BwosNKoxkVE3w9rwYuG4iBeSrXKaVGlYjRTOhXs1Pd2Dbr70bBMt5nG/AgwAOjjLaOOh/RYAAAAASUVORK5CYII=" alt="" />
                      </div>
                      <div className="wpo-mission-content">
                        <h2>Discover</h2>
                        <p>we identify the girls in their various locations and map them to clusters;.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                    <div className="wpo-mission-item">
                      <div className="wpo-mission-icon-6">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAhCAYAAAAh3nDkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY5QUZDN0U0OEY5MTFFQThFOTU4MTlBMEU1NzZEOTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY5QUZDN0Q0OEY5MTFFQThFOTU4MTlBMEU1NzZEOTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+derUDAAAAflJREFUeNrEl0tLAlEUx9XECoPsAQkFBS0S27gTWvUFohYFQpCrWoVUy6hN4CJqUZt2BS2iL9CqRVCEJoS4UXotXESpPQgqJSim/6kzcJtmdLT0Hvgxd+bce/5zzr3zuBZFUSwm6QY74Fn5tiSYLGP8L8x2bAZZRd8WhH7b4AS4zMS1WcyZAzjBE5gDo2CPfS18bAITwA+8pqKauEMbHztAq8bXB+q4Pc2V+ADtfyn7MDgABQ6YBmvArennAAGwwaJku4LfD6bAEPctKk5ZbirGluOAav9ZjT/B1ekFxxrfJVfKUHxRKW05oawD4BzEwDxwAh+4Mxh7JVZAFHYJZVbtCGyBe831ZYPp6gQ3JW5+TE88oOm0Kvi6wKPgu9ARtoJ9E5WbUcfYhYX/Cg65/Q5WBN81WAIjfP6g8+C4gF2IYWQxtWH9Sl+S0Z3Wg0YJ2gXK/BYNtwTxDIlLq7vNItFoztdliUtf7YMyMy/g2CDjUaMFl5GUeJbEk5LEkyQekSQeoTn3Ssq+nzJPgdMaC5NeSn3DhWssHhb/Xqn8UaU2FmW9H284D0jwJ7Za9gZ84Ez7YaELwSqXO6gKG20aQlUqd8jspmEc5P9JNM/xytooekD8j8JxjqOrUeqTSpu/NGirYH7pD7cHvFT6J0MDoxUurmgxYbJPAQYAFqBLHH4zhCcAAAAASUVORK5CYII=" alt="" />
                      </div>
                      <div className="wpo-mission-content">
                        <h2>Engage</h2>
                        <p>through meetings, we engage the cluster of girls and raise awareness on vocational training.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                    <div className="wpo-mission-item">
                      <div className="wpo-mission-icon-7">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZDMTNFOTM0OEY5MTFFQTk0QjhGOUVBNDE1RkJGMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZDMTNFOTI0OEY5MTFFQTk0QjhGOUVBNDE1RkJGMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sEB+rgAAAp9JREFUeNrE1ktoE1EUxvFpGmkI1iqY+KJia2itC1FbilVBqSIqSFdSUVy4ciGKD0ShK8EHuOhGQbqQIroSBakUH6AiQn0lUhDbgohWFCq+qFpQjB3/Y7/INHaSyThJDvwySWZy75l7T+4dwzRN4z/sQS8OeG3Da8er0WOOj0dYm+8EZqHTzBznUZmPBA5hxHQX39HmVwIb8dT0Fv1o8ZpADS6b/kQX6twmEMQRjJr+xzGUZUpgCwZzaPAV4viVw29eY1uqz5I/WRhGM05hoTE+3uA5XqAfg3r/EZ/xDZXow2Qjt3iJnUHbF1Ym19CBXrzHT30fRgWiiGEdFmA+aj10bkWJ9ZJK4Da6UIonOK5GrQ6rMdPwL97iMC6M3fbYXEQ0PztQjY48FGAS+xGaqAgbdUHUdjKMMz51fhblmf6GS/AD8/T5Hk7rfQwPPHac0HpitdOudgP2BAK2AvxbGEQSuzCkGliGzRh2Oc8j2Ip6zNG871M/o/YLAw4NfNVxBm7gJnowFSeydN6uAr6DbhX4bJ378s/VGorFmoIqfb7qMKQnbbvi9bRzt2y74FGH33en14DTCDh9f1B3sRLrsQH30YI1aMAntLltN+hwYSjDEJfjIuJoxXLM1RQ1ZZmeULaMSnVMuCi0Bi3Lj7VEN7n4TdypBiJ6iAjr8xQM+bwQvUOFUw1swiQdU9Var7vzIxJqb3iiEahNy7QqLcvd6PN41wPYm+mJyNqOrS34mS2nmOY2PVap6htRh+lpRWwtXh8wgIfaWe9m3RL1PNCq4b+CSy6G1JquCKbpfVJ/v9QW7n5PVgJWLNVWXNBIFeEKdBpFCHsCi/TkU5QEmnWsKUYCZapwQ8tqwRPYblujo4VOIKhHcesB8Zw2lILGbwEGAAITeoJu7NwOAAAAAElFTkSuQmCC" alt="" />
                      </div>
                      <div className="wpo-mission-content">
                        <h2>Link</h2>
                        <p>the girls are onboarded unto the Skill Link platform and matched with opportunities.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                    <div className="wpo-mission-item">
                      <div className="wpo-mission-icon-8">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAYAAACEP1QvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjA0QUMwNDE0OEY5MTFFQUIzNzNGNkM3QjZENzZDNkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA0QUMwNDA0OEY5MTFFQUIzNzNGNkM3QjZENzZDNkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+klIbkgAAAgtJREFUeNrElc8rRFEUx9/TZJDESpEfC0KRkgg7LGTtHxALSTZSNn4UJaEYC5GSWChS7ERsZGPGjxSaRomysKJEjDzfq/Ny3WbmnveIU595784753zvu++ce03LsgzF4kAzaAAlIA3cAD9YAntGdMsGraAO5IJXEAJbFHv7zVuISzSCSyu2zSsxNt0gHCPuGXTJMXJwi8W3AxAnxU47iJ1VxSst57ZJse0uYntk8RvLnY2AR5exmSZ+mvDpV4y/tzkhvk3V+dd2Jdqq0PgfSxbiqUznNweJOb4JQvyd4Sg+Sw4zKdf3s9KDmqr0S/08+Iu+t8JpVeNULSVM0Oxism+iJu+1B68/BsT15XMpvsxL+/I+qAHFYAYMg17yCYAyYIJjybdItBLoo+cvypIngQ0jyj6tckGzFa3pofsgPeuncSmNz2ns1eX1SDNZBmHCNlGMWaCAxgOgH7TRqgibopgTUCG17hk4oNU06T+TTj5xal7IMxllbIlh+pZ2jPp2AUaOQzuHuhSTjOAhyX8H5NN9FfM0jHik2iwy3j4D1NPYB1LAkSbuXF2paMWwwJiAbPca/1OQrOrEqsYJ63dsD8RH0tC12OgPhddj5ef0eIdLYZ8uN3eTKQd3DoRbOHm54oJ0RkU/gVpuTifiNmtRhEMgz0kuN+KCcUV4FyQ5zeNWXNAJHsCS2xwfAgwA2T5LP69WeAsAAAAASUVORK5CYII=" alt="" />
                      </div>
                      <div className="wpo-mission-content">
                        <h2>Retain</h2>
                        <p> we have a fulfilment and monitoring track that ensures high completion rates and skill acquisition by Skill Link trainees.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpo-about-area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 colsm-12">
                  <div className="wpo-about-text">
                    <div className="wpo-section-title">
                      <span>What We Do?</span>
                      <h2>We Are In A Mission To Help The Helpless</h2>
                    </div>
                    <p>Skill Link targets girls in senior secondary schools in Lagos State. The focus will be on students with strong good records; demonstrated leadership traits; high sense of responsibility; or show signs that they may be at risk of dropping out of secondary school. Girls who participate in Skill Link will not only gain useful vocational skills, they will also be taught to appreciate the benefits of acquiring these skills, basic business management skills and some finishing-school type lessons. The plan is for them, having been trained, to be able to engage their communities and become change agents who create awareness on the importance of being skilled and having positive work ethics. </p>
                    <div className="btns">
                      <Link to="/campaign/list" className="theme-btn">Donate Now</Link>
                      <ul>
                        <li className="video-holder">
                          <div><div className="video-btn"><ul>
                            <li>
                              {/* <button className="wrap"><i className="fi flaticon-play-button-2" aria-hidden="true" /></button> */}
                            </li>
                          </ul>
                          </div>
                          </div>
                        </li>
                        {/* <li className="video-text">Watch Our Video</li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 colsm-12"><div className="wpo-about-img-3"><img src="/static/media/about3.9af31693.png" alt="" />
                  </div></div></div></div></div>
                  <div className="wpo-case-area section-padding"><div className="container">
                  <div className="row">
                  <div className="col-12"><div className="wpo-section-title">
                  <span></span>
                  <h2>Campaigns</h2>
                  </div></div></div>
                  <div className="wpo-case-wrap">
                  <div className="wpo-case-slider">
                  <div className="slick-slider slick-initialized" dir="ltr">
                  <button type="button" data-role="none" className="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                  <div className="slick-list"><div className="slick-track" style={{ width: '4070px', opacity: 1, transform: 'translate3d(-1850px, 0px, 0px)', transition: '-webkit-transform 500ms ease 0s' }}>
                  <div data-index={-3} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '370px' }}><div>
                    <div className="wpo-case-single" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                    <div className="wpo-case-item"><div className="wpo-case-img"><img src="/static/media/img-2.7f30d201.png" alt="" /></div>
                    <div className="wpo-case-content"><div className="wpo-case-text-top"><h2>Supply drinking water for the people</h2>
                    <div className="progress-section"><div className="process"><div className="progress"><div className="progress-bar">
                    <div className="progress-value"><span>40.5</span>%</div></div></div></div>
                    </div><ul><li><span>Raised:</span> $7,000.00</li><li><span>Goal:</span> $8,000.00</li></ul>
                    </div><div className="case-btn"><ul><li><a href="/case-single">Learn More</a></li>
                    <li><a href="/donate">Donate Now</a></li></ul></div></div></div>
                    </div></div></div><div data-index={-2} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '370px' }}>
                    <div>
                      <div className="wpo-case-single" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                      <div className="wpo-case-item"><div className="wpo-case-img">
                      <img src="/static/media/img-3.6d6b3c93.png" alt="" /></div><div className="wpo-case-content">
                      <div className="wpo-case-text-top"><h2>Providing Healthy Food for the children</h2><div className="progress-section">
                      <div className="process"><div className="progress">
                      <div className="progress-bar"><div className="progress-value"><span>80.5</span>%</div>
                      </div></div></div></div><ul><li><span>Raised:</span> $7,000.00</li><li><span>Goal:</span> $8,000.00</li></ul>
                      </div><div className="case-btn"><ul><li><a href="/case-single">Learn More</a></li><li><a href="/donate">Donate Now</a></li></ul>
                      </div></div></div></div></div></div>
                      <div data-index={-1} tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '370px' }}>
                      <div>
                        <div className="wpo-case-single" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                        <div className="wpo-case-item"><div className="wpo-case-img"><img src="/static/media/img-1.db23ba6d.png" alt="" /></div>
                        <div className="wpo-case-content"><div className="wpo-case-text-top"><h2>Ensure Education for every poor children</h2>
                        <div className="progress-section"><div className="process"><div className="progress"><div className="progress-bar">
                        <div className="progress-value"><span>65.5</span>%</div></div></div></div></div>
                        <ul><li><span>Raised:</span> $7,000.00</li><li><span>Goal:</span> $8,000.00</li></ul></div><div className="case-btn"><ul><
                          li><a href="/case-single">Learn More</a></li><li><a href="/donate">Donate Now</a></li></ul></div></div></div></div></div></div>
                          <div data-index={0} className="slick-slide" tabIndex={-1} aria-hidden="true" style={{ outline: 'none', width: '370px' }}>
                          <div>
                            <div className="wpo-case-single" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}><div className="wpo-case-item">
                            <div className="wpo-case-img"><img src="/static/media/img-1.db23ba6d.png" alt="" /></div><div className="wpo-case-content"><div className="wpo-case-text-top"><h2>Ensure Education for every poor children</h2><div className="progress-section"><div className="process"><div className="progress"><div className="progress-bar"><div className="progress-value"><span>65.5</span>%</div>
                            </div></div></div></div><ul><li><span>Raised:</span> $7,000.00</li><li><span>Goal:</span> $8,000.00</li></ul></div><div className="case-btn"><ul><li><a href="/case-single">Learn More</a></li><li><a href="/donate">Donate Now</a></li></ul></div>
                            </div></div></div></div>
                </div>


                 

                  {
                    result && result.list && result.list.length > 0 && result.list.map((item, i) => {
                      return <div data-index={2} className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '370px' }}>
                        <div>
                          <div className="wpo-case-single" tabIndex={-1} style={{ width: '100%', display: 'inline-block' }}>
                            <div className="wpo-case-item">
                              <div className="wpo-case-img"><img src="/static/media/img-3.6d6b3c93.png" alt="" /></div>
                              <div className="wpo-case-content">
                                <div className="wpo-case-text-top">
                                  <h2>{item.title}</h2>
                                  <div className="progress-section">
                                    <div className="process">
                                      <div className="progress">
                                        <div className="progress-bar">
                                          {/* <div className="progress-value"><span>80.5</span>%</div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <ul>
                                    {/* <li><span>Raised:</span> $7,000.00</li> */}
                                    <li><span>Goal:</span> N {item.goal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</li>
                                  </ul>
                                </div>
                                <div className="case-btn">
                                  <ul>
                                    <li><Link to={"/campaign/detail/"+item.id}>Learn More...</Link></li>
                                    
                                    <li><Link to={"/donate/" + item.id}>Donate Now</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    })
                  }



                </div>
                </div>
                  <button type="button" data-role="none" className="slick-arrow slick-next" style={{ display: 'block' }}> Next</button></div></div></div></div></div>
          {/* <div className="wpo-counter-area undefined">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wpo-counter-grids">
                    <div className="grid">
                      <div>
                        <h2><span className="odometer" data-count={6200}>6200</span>+</h2>
                      </div>
                      <p>Donation</p>
                    </div>
                    <div className="grid">
                      <div>
                        <h2><span className="odometer" data-count={80}>80</span>+</h2>
                      </div>
                      <p>Fund Raised</p>
                    </div>
                    <div className="grid">
                      <div>
                        <h2><span className="odometer" data-count={245}>245</span>+</h2>
                      </div>
                      <p>Volunteers</p>
                    </div>
                    <div className="grid">
                      <div>
                        <h2><span className="odometer" data-count={605}>605</span>+</h2>
                      </div>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="wpo-team-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-section-title">
                  <span>Meet Our Team</span>
                  <h2>Our Expert Volunteer</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img"><img src="/static/media/team-1.8ecf1e74.jpg" alt="" /></div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2><a href="/volunteer">Smith Tomkin</a> </h2>
                      <span>CEO &amp; Founder</span>
                      <ul>
                        <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                        <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                        <li><a href="/volunteer"><i className="ti-google" /></a></li>
                        <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img"><img src="/static/media/team-2.ae3a73a0.jpg" alt="" /></div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2><a href="/volunteer">Robert Honey</a></h2>
                      <span>Volunteer</span>
                      <ul>
                        <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                        <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                        <li><a href="/volunteer"><i className="ti-google" /></a></li>
                        <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-team-wrap">
                  <div className="wpo-team-img"><img src="/static/media/team-3.0e5f2dce.jpg" alt="" /></div>
                  <div className="wpo-team-content">
                    <div className="wpo-team-text-sub">
                      <h2><a href="/volunteer">Juliya Jossoy</a></h2>
                      <span>Volunteer</span>
                      <ul>
                        <li><a href="/volunteer"><i className="ti-facebook" /></a></li>
                        <li><a href="/volunteer"><i className="ti-twitter" /></a></li>
                        <li><a href="/volunteer"><i className="ti-google" /></a></li>
                        <li><a href="/volunteer"><i className="ti-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          {/* <div className="wpo-world-area undefined">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-world-section">
                  <h2>Lets Chenge The World With Humanity</h2>
                  <a href="/Volunteer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REMyRjI1MjkyNDI5MTFFQUI3OTdGNzIwRjk5NjMyNEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REMyRjI1MjgyNDI5MTFFQUI3OTdGNzIwRjk5NjMyNEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDNhZjVlNGItZjU5Mi1lZjQyLWFmNGMtMjE4YjU4MWQzNzU4IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YmE5Y2I5ZGQtZDE0Ny00NjQyLTg2ZWMtODU5ODAwMGMzMzIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eUfEnQAAAW1JREFUeNqc00soRFEcx/G5HuO98IzshrLxTDbKYthiwWomKcmCEntSlGwsKLYe2WCjsLCV2WChKAuxIBZjIyLvx/df/6npdM+dzKlP597m3F/nnP9/HH9gwOcyAlhCM9JxhxksmgtTXD5uwRXKMYgO7GEBW+Zix9hBGj6xjpCxtganmMa4bQcTOodcdnaGOYx5HaEb+z772NC50BbwglyPgBydv2wBcsuNyLAEjOj8aAtYRRTXLiHDWpEu89bNUYpLvGEXz2hAFXrNUpo76EQrKtGHEtTjBNlYQxhN5g4KcIQKfT9HECtx4e3YiXuXTu2PBUiD5KEM39jUu3jVIxTrullMoQ4H+JWAIW3bTLzrwqCeu01rLq29jXv9PaJHXJZWvuXhQs/+33Eol1iUoPu8xrEE+HGTZEBUAhw8JBnwFOuD2iQDqqUK85jU8kW0A1M9PpI/Ur52ZVgCRvVjqe8PPhIEyNos7Y+ePwEGAEosSWk4CBBGAAAAAElFTkSuQmCC" alt="" />   Become A Volunteer</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
          {/* <div className="wpo-cta-area undefined">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="wpo-cta-text">
                    <h2>You Can Help The Poor With Us</h2>
                    <div className="btns">
                      <Link className="theme-btn" to="/campaign/list">Donate Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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
