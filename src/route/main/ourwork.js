import React from "react";

import { Link } from "react-router-dom";
import Navigation from "./../../component/navigation/header";
import Footer from "./../../component/navigation/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="wpo-mission-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                <span></span>
                <h2>How We Work</h2>
              </div>
            </div>
            <div className="col-12">
              <p>
                We work with secondary school girls across Lagos State with
                strong academic, demonstrated Leadership traits, high sense of
                responsibility, or those who may be at a high risk of dropping
                out of secondary school. To ensure we provide a holistic
                learning experience to the participants of the skillLink
                program, our training program will cover three major focus
                areas:
                <li>Vocational training</li>
                <li>
                  Busiess management, customer service, and social etiquette
                </li>
                <li>Mentorship and community engagement.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-about-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 colsm-12">
              <div className="wpo-about-img-3">
                <img
                  src={require("./../../assets/majkl-velner-uf4PZk6p23c-unsplash.jpg")}
                  style={{ borderRadius: "20px" }}
                  alt="Image"
                  className="img-responsive"
                />
              </div>
            </div>
            {/*<div className="col-lg-8 col-md-12 colsm-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  {/* <span>What We Do?</span> */}

            {/*   <h2>Our Process:</h2>

                  <span>
                    Skilllink relies on a multi-stakeholder approach to drive
                    high training completion rates and skill acquisition among
                    participants. Our process includes:
                  </span>
                </div>

                <p>
                  Our selection model has been designed to achieve a high
                  completion rate on the part of our trainees as well as an
                  overall high success rate.
                  <li>
                    <strong>Step 1</strong>: We identify promising girls from
                    various locations across Lagos state and map them to
                    clusters. To achieve this, we conduct an assessment to
                    select from the pool girls who meet our prequalification
                    criteria. Once a cluster (group of 10 girls) is filled, we
                    map it to a specific potential vocational option.
                  </li>
                  <li>
                    <strong>Step 2</strong>: Through in-person and virtual
                    engagements, we prepare the girls by providing preliminary
                    orientation for the skilllink program, It is during this
                    stage that the trainees are introduced to the vocations
                    available on the platform, and information is provided on
                    how they can be accessed.
                  </li>
                  <li>
                    <strong>Step 3</strong>: The trainees are onboarded on the
                    Skilllink platform where they are matched with
                    opportunities. These opportunities are the vocation options
                    available on the platforms and implemented in the facilities
                    of our corporate and training partners.
                  </li>
                  <li>
                    <strong>Step 4</strong>: We continue to engage the trainees
                    through our fulfilment and monitoring track. We monitor
                    their progress and provide support where necessary. We
                    implement this phase to ensure a high participant completion
                    rate and overall success of the program.
                  </li>{" "}
                </p>
              </div> 
            </div>*/}
          </div>
        </div>
      </div>
      <div clasName="wpo-mission-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="wpo-section-title">
                {/* <span>What We Do?</span> */}
                <h2>Our Process</h2>
                <span style={{ marginTop: "20px" }}>
                  SkillLink relies on a multi-stakeholder approach to drive high
                  training completion rates and skill acquisition among
                  participants. Our process includes:
                </span>
              </div>
            </div>
          </div>
          <div className="wpo-mission-wrap">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-mission-item">
                  <div className="wpo-mission-icon-5">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTNEQzExQzE0OEY4MTFFQTg0MTk5MEQ2MzRDODc3QzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTNEQzExQzA0OEY4MTFFQTg0MTk5MEQ2MzRDODc3QzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DnjaEAAAAixJREFUeNrEmEsoRFEYx81LJI/yKCzGIyXl0ZSNsmAjj5okUWQj5bEhUayUxazsRBE7hYWEJI9EsbCxZKEkSVNKnnlN1//kTB23+zh3Zrrfv35N9853z/3u953vnO9eh6IocYSaAtPgWteCOUhEr/KnfSM7KudylP/q0rN1EKX4BFQJxz8gCzyqDZ0EzrWpnGNygzktY7sj6AJBkK7zvw+cU0awx8A5pgB1BFl0Kkxs8sANRQSTQYmEXSVVir/Am4RdkMrBT7Am4dwp5RzMABf8V0t1YJeyih/4HNtTnWdON6udiySC+XwpSOVzSkYe8AKWwIZwvpyP9wQOY9EsVINnJTrVWN23ZVPcAY75UhGN2iVs2DrYAspkIzimxE4NBvfJBlPgW7DvNJuDM6DPYpSuwC2IFxqBZ7AMFjXsU8AwGNLI0Ife07jAZoRR8kvOLzcYAUGjwdwaT5QDdkBphPMsl3ctnnAd8uN43vclglYwCrwmY42rU+zjzmVGUQjv4FVIsagQSABJJmNcggmwIoa8CYQUWrF0D2q9kwwQO/YFAiBN66Vpnti5BeDVKyY30XsJ0xaYBGdGRuEiWQf+CPq7GV6ZLslrnLxQDsC2zAViFbMFttCCg7WGm3yM5FTdMCR5Xb8dzmntxfUSk3rWzq8QVpuDI7s/k+g1C6t8OxJ1BwosNKoxkVE3w9rwYuG4iBeSrXKaVGlYjRTOhXs1Pd2Dbr70bBMt5nG/AgwAOjjLaOOh/RYAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div className="wpo-mission-content">
                    <h2>Discover</h2>
                    <p>
                      We identify the girls in their various locations and map
                      them to clusters; access them through our prequalification
                      criteria and due diligence process. Once a cluster is
                      filled, we map it to a specific potential vocational
                      option on the SkillLink platform and prep them for the
                      engagement program. A cluster is made up of 10 girls.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-mission-item">
                  <div className="wpo-mission-icon-6">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAhCAYAAAAh3nDkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY5QUZDN0U0OEY5MTFFQThFOTU4MTlBMEU1NzZEOTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY5QUZDN0Q0OEY5MTFFQThFOTU4MTlBMEU1NzZEOTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+derUDAAAAflJREFUeNrEl0tLAlEUx9XECoPsAQkFBS0S27gTWvUFohYFQpCrWoVUy6hN4CJqUZt2BS2iL9CqRVCEJoS4UXotXESpPQgqJSim/6kzcJtmdLT0Hvgxd+bce/5zzr3zuBZFUSwm6QY74Fn5tiSYLGP8L8x2bAZZRd8WhH7b4AS4zMS1WcyZAzjBE5gDo2CPfS18bAITwA+8pqKauEMbHztAq8bXB+q4Pc2V+ADtfyn7MDgABQ6YBmvArennAAGwwaJku4LfD6bAEPctKk5ZbirGluOAav9ZjT/B1ekFxxrfJVfKUHxRKW05oawD4BzEwDxwAh+4Mxh7JVZAFHYJZVbtCGyBe831ZYPp6gQ3JW5+TE88oOm0Kvi6wKPgu9ARtoJ9E5WbUcfYhYX/Cg65/Q5WBN81WAIjfP6g8+C4gF2IYWQxtWH9Sl+S0Z3Wg0YJ2gXK/BYNtwTxDIlLq7vNItFoztdliUtf7YMyMy/g2CDjUaMFl5GUeJbEk5LEkyQekSQeoTn3Ssq+nzJPgdMaC5NeSn3DhWssHhb/Xqn8UaU2FmW9H284D0jwJ7Za9gZ84Ez7YaELwSqXO6gKG20aQlUqd8jspmEc5P9JNM/xytooekD8j8JxjqOrUeqTSpu/NGirYH7pD7cHvFT6J0MDoxUurmgxYbJPAQYAFqBLHH4zhCcAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div className="wpo-mission-content">
                    <h2>Engage</h2>
                    <p>
                      Through face-to-face and digital meetings, we engage the
                      cluster of girls and raise awareness on vocational
                      training. We emphasize the specific vocations available on
                      the SkillLink platform and how they may access them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-mission-item">
                  <div className="wpo-mission-icon-7">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZDMTNFOTM0OEY5MTFFQTk0QjhGOUVBNDE1RkJGMzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZDMTNFOTI0OEY5MTFFQTk0QjhGOUVBNDE1RkJGMzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sEB+rgAAAp9JREFUeNrE1ktoE1EUxvFpGmkI1iqY+KJia2itC1FbilVBqSIqSFdSUVy4ciGKD0ShK8EHuOhGQbqQIroSBakUH6AiQn0lUhDbgohWFCq+qFpQjB3/Y7/INHaSyThJDvwySWZy75l7T+4dwzRN4z/sQS8OeG3Da8er0WOOj0dYm+8EZqHTzBznUZmPBA5hxHQX39HmVwIb8dT0Fv1o8ZpADS6b/kQX6twmEMQRjJr+xzGUZUpgCwZzaPAV4viVw29eY1uqz5I/WRhGM05hoTE+3uA5XqAfg3r/EZ/xDZXow2Qjt3iJnUHbF1Ym19CBXrzHT30fRgWiiGEdFmA+aj10bkWJ9ZJK4Da6UIonOK5GrQ6rMdPwL97iMC6M3fbYXEQ0PztQjY48FGAS+xGaqAgbdUHUdjKMMz51fhblmf6GS/AD8/T5Hk7rfQwPPHac0HpitdOudgP2BAK2AvxbGEQSuzCkGliGzRh2Oc8j2Ip6zNG871M/o/YLAw4NfNVxBm7gJnowFSeydN6uAr6DbhX4bJ378s/VGorFmoIqfb7qMKQnbbvi9bRzt2y74FGH33en14DTCDh9f1B3sRLrsQH30YI1aMAntLltN+hwYSjDEJfjIuJoxXLM1RQ1ZZmeULaMSnVMuCi0Bi3Lj7VEN7n4TdypBiJ6iAjr8xQM+bwQvUOFUw1swiQdU9Var7vzIxJqb3iiEahNy7QqLcvd6PN41wPYm+mJyNqOrS34mS2nmOY2PVap6htRh+lpRWwtXh8wgIfaWe9m3RL1PNCq4b+CSy6G1JquCKbpfVJ/v9QW7n5PVgJWLNVWXNBIFeEKdBpFCHsCi/TkU5QEmnWsKUYCZapwQ8tqwRPYblujo4VOIKhHcesB8Zw2lILGbwEGAAITeoJu7NwOAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </div>
                  <div className="wpo-mission-content">
                    <h2>Link</h2>
                    <p>
                      The girls are onboarded unto the SkillLink platform and
                      matched with opportunities. Opportunities on the platform
                      include vocational trainings which:
                      <br />
                      - Take place in the facilities of our corporate partners
                      and are implemented by their employees.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 custom-grid">
                <div className="wpo-mission-item">
                  <div className="wpo-mission-icon-8">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAbCAYAAACEP1QvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjA0QUMwNDE0OEY5MTFFQUIzNzNGNkM3QjZENzZDNkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjA0QUMwNDA0OEY5MTFFQUIzNzNGNkM3QjZENzZDNkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTZhYmI4YWMtZDFjNC02NzQ4LTg2M2QtZmVjNmRlNDg5ZTkxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTgyNWQ4NzMtYjkyNi03YTQ4LTk1ZDYtNjNhMDU4NWFiYzU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+klIbkgAAAgtJREFUeNrElc8rRFEUx9/TZJDESpEfC0KRkgg7LGTtHxALSTZSNn4UJaEYC5GSWChS7ERsZGPGjxSaRomysKJEjDzfq/Ny3WbmnveIU595784753zvu++ce03LsgzF4kAzaAAlIA3cAD9YAntGdMsGraAO5IJXEAJbFHv7zVuISzSCSyu2zSsxNt0gHCPuGXTJMXJwi8W3AxAnxU47iJ1VxSst57ZJse0uYntk8RvLnY2AR5exmSZ+mvDpV4y/tzkhvk3V+dd2Jdqq0PgfSxbiqUznNweJOb4JQvyd4Sg+Sw4zKdf3s9KDmqr0S/08+Iu+t8JpVeNULSVM0Oxism+iJu+1B68/BsT15XMpvsxL+/I+qAHFYAYMg17yCYAyYIJjybdItBLoo+cvypIngQ0jyj6tckGzFa3pofsgPeuncSmNz2ns1eX1SDNZBmHCNlGMWaCAxgOgH7TRqgibopgTUCG17hk4oNU06T+TTj5xal7IMxllbIlh+pZ2jPp2AUaOQzuHuhSTjOAhyX8H5NN9FfM0jHik2iwy3j4D1NPYB1LAkSbuXF2paMWwwJiAbPca/1OQrOrEqsYJ63dsD8RH0tC12OgPhddj5ef0eIdLYZ8uN3eTKQd3DoRbOHm54oJ0RkU/gVpuTifiNmtRhEMgz0kuN+KCcUV4FyQ5zeNWXNAJHsCS2xwfAgwA2T5LP69WeAsAAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                  <div className="wpo-mission-content">
                    <h2>Retain</h2>
                    <p>
                      {" "}
                      We have a fulfillment & monitoring track that ensures high
                      completion rates and skill acquisition by SkillLink
                      trainees. overall success. Through this track, we keep the
                      girls engaged with the training program, monitor their
                      skill development and intervene with the appropriate
                      response where required.
                    </p>
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
                  <span>Accelerating Our Impact</span>
                  <h2></h2>
                </div>

                <p>
                  Empowering underprivileged girls is important, not only for
                  the girls and their immediate families, but for their
                  communities and the Nigerian larger society as well. With
                  support from individuals and organizations, looking to
                  positively impact our society; we can make a difference
                  through our work.
                </p>

                <div className="btns">
                <Link to={{
                  pathname: "https://flutterwave.com/pay/skilllinknigeriaow95?_ga=2.33077626.533821493.1605638471-2000442627.1605638471",
                }}  target="_blank"  className="theme-btn">
                    Donate Now
                  </Link>
                  <ul>
                    <li className="video-holder">
                      <div>
                        <div className="video-btn">
                          <ul>
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

            <div className="col-lg-6 col-md-12 colsm-12">
              <div style={{ marginTop: "15%" }}>
                <img
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/holding_hands_in_support-1296x728-header-1296x728.jpg?w=1155&h=1528"
                  alt="Image"
                  style={{ borderRadius: "15px" }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 colsm-12">
              <div className="wpo-about-img-3">
                <img src="/static/media/about3.9af31693.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Footer />
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <a href="#scrool">
                <i className="fa fa-arrow-up" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
