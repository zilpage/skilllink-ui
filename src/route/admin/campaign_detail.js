import React from 'react';

import { Link } from 'react-router-dom'
import Navigation from './../../component/navigation/header';
import Footer from './../../component/navigation/footer';

function App() {
    return (
        <div className="App" id="scrool">
            <div className="App">
                <Navigation />
                {/* <div className="wpo-breadcumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="wpo-breadcumb-wrap">
                                    <h2>Single Campaign</h2>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><span>Education for All Children</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="wpo-event-details-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-8">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img">
                                        <img src="/static/media/event-details2.77d9a11c.jpg" alt="" />
                                        <div className="thumb-text"><span>25</span><span>NOV</span></div>
                                    </div>
                                    <div className="wpo-event-details-text">
                                        <h2>Education for All Children</h2>
                                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                                    </div>
                                    <div className="wpo-event-details-wrap">
                                        <div className="wpo-event-details-tab">
                                            <ul className="nav nav-tabs">
                                                <li className="nav-item"><a className="active nav-link">Event Schedule</a></li>
                                            </ul>
                                        </div>
                                        <div className="wpo-event-details-content">
                                            <div className="tab-content">
                                                <div id="Schedule" className="tab-pane active">
                                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                                                    <ul>
                                                        <li>The wise man therefore in these matters.</li>
                                                        <li>In a free hour, when our power of choice and when nothing.</li>
                                                        <li>Else he pains to avoid pains.</li>
                                                        <li>We denounce with righteous indignation dislike men. </li>
                                                        <li>Which is the same as saying through.</li>
                                                        <li>The wise man therefore always holds in these matters.</li>
                                                        <li>Power of choice and when nothing.</li>
                                                        <li>Pains to avoid worse pains.</li>
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 col-12">
                                <div className="wpo-blog-sidebar">
                                    
                                    <div className="widget recent-post-widget">
                                        <h3>Recent Campaigns</h3>
                                        <div className="posts">
                                            <div className="post">
                                                <div className="img-holder"><img src="/static/media/img-1.6c52faee.jpg" alt="" /></div>
                                                <div className="details">
                                                    <h4><a href="/blog-details">Many Children are suffering a lot for food.</a></h4>
                                                    <span className="date">22 Sep 2020</span>
                                                </div>
                                            </div>
                                            <div className="post">
                                                <div className="img-holder"><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2N0YzQzU1MkE0RjExRUE4OEFGQzUxN0JEQkIzOUY4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2N0YzQzU0MkE0RjExRUE4OEFGQzUxN0JEQkIzOUY4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJmMTE0NTM1LWM1ZjYtZGM0NC1iYmMzLTI4MGRkZjg4NzAyYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZmNzBiNmUwLTEzYTItNzc0YS1hYWYyLWQ5ZWQ0NjVmOGJhMCIvPiA8L3Jk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" alt="" /></div>
                                                <div className="details">
                                                    <h4><a href="/blog-details">Be kind for the poor people and the kids.</a></h4>
                                                    <span className="date">22 Sep 2020</span>
                                                </div>
                                            </div>
                                            <div className="post">
                                                <div className="img-holder"><img src="/static/media/img-3.07277b51.jpg" alt="" /></div>
                                                <div className="details">
                                                    <h4><a href="/blog-details">Be soft and kind for the poor people.</a></h4>
                                                    <span className="date">22 Sep 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    );
}

export default App;
