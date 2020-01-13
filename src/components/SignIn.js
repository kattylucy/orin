import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/landingpage.css';
import SignInImg from '../images/sign-in.svg'




function SignIn(){
    return(
        <React.Fragment>
            <div className="row signinpage">
                <div className="sign-in-left col-6">
                    <img  src={SignInImg} alt="of the sign in page"/>
                </div>
                <div className="sign-in-right col-12 col-lg-6 px-5">
                <Form>
                    <h1 className="signinlogo text-center"><Link to="/">Orin</Link></h1>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email"  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>
                    <Button block>Submit</Button>
                    <p>Dont have an account? <u><Link to="/signUp">Sign Up</Link></u></p>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignIn;