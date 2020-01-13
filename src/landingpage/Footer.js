import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className="footer">
            <div className="d-flex justify-content-around">
                <h1 className="footerLogo">Orin</h1>
                <ul className="mt-3">
                    <a className="mr-2" href="#features">Features</a>
                    <a className="mr-2" href="#pricing">Pricing</a>
                    <Link to="/signin">Sign in</Link>
                </ul>
            </div>
            <div className="d-flex text-center flex-column mt-5">
                <h3>Got questions?</h3>
                <p>orinapp@gmail.app</p>
                <div className="d-flex font-awesome-footer justify-content-center">
                    <i className="fa fa-facebook-f" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-instagram" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;