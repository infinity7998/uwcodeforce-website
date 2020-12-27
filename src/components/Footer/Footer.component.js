import React, { memo } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div style={{ height: "50px"}}></div>
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by <Link to="/" style={{color: 'lightblue', textDecoration: 'none'}}>UWCodeForce</Link>. This website is created with love by  <a href="https://www.aalekhpatel.com" style={{color: 'lightblue', textDecoration: 'none'}}>@aalekhpatel</a> and is maintained by <a href="https://www.github.com/xtrig" style={{color: 'lightblue', textDecoration: 'none'}}>@stevensimko</a>.
                        </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="github" href="https://www.github.com/aalekhpatel07"><i class="fa fa-github"></i></a></li>
                            <li><a className="twitter" href="https://www.twitter.com/AalekhPatel4"><i class="fa fa-twitter"></i></a></li>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/aalekhpatel07"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default memo(Footer)