import React from 'react';
import BannerImage from '../images/Open-Account.svg'
import { Link } from 'react-router-dom';



function Banner(){
    return(
        <React.Fragment>
            <div className="banner row">
                <div className="col-12 col-md-7">
                    <h4 className="display-4">Budgeting Is Easier Than Ever</h4>
                    <p className="lead">Orin is an online tool that help you with monthly budgeting. 
                        Goodbye stress, hello fun. Create your first budget with just one click.
                    </p>
                    <button className="btn-sign-up banner-btn mb-2"><Link to="/signUp">Sign Up</Link></button><br></br>
                    <Link to="/signIn" className="link-sign-in">Already saving? <u>Sign in</u></Link>
                </div>
                <div className="col-5">
                    <img src={BannerImage} alt="wallet" className="banner-img"/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Banner;