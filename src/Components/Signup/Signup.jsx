import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Facebook, Github, Google, Heart, HeartFill, Twitch, Twitter } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { useDispatch, useSelector } from 'react-redux';
import { logInGoogle, signUpInitiate } from '../../Service/action/auth.action';

function Signup() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        cpassword: ''
    });
    const [err, setErr] = useState('')
    const { User } = useSelector(state => state.AuthReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const handleSignUp = () => {
        dispatch(signUpInitiate())
    }

    const googleLogin = () => {
        dispatch(logInGoogle())
    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        // if (!user.email || !user.password === null) {
        //     console.log("Form is empty");
        //     return;
        // }
        // console.log("form data", user);
        // sessionStorage.setItem("LoginData", JSON.stringify(user));
        // navigate('/')

        if (user.password === user.cpassword) {
            dispatch(signUpInitiate(user.email, user.password))
            console.log("Done");
        } else {
            setErr("Password and Confirm Password is dosen't match")
            console.log("Error");
        }
    }

    const signin = () => {
        navigate("/login");
    }
    if (User !== null) {
        navigate('/')
    } else {

        return (
            <>
                <div className='bg-dark'>
                    <div class="auth-page-wrapper pt-5">
                        <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
                            <div class="bg-overlay">
                            </div>
                            <div class="shape">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1440 120">
                                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z">
                                    </path>
                                </svg>
                            </div>
                            <div class="auth-page-content">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="text-center mt-sm-5 mb-4 text-white-50">
                                                <div>
                                                    <a className="d-inline-block auth-logo text-decoration-none text-white fs-2 fw-semibold" href="/velzon/react/default">
                                                        {/* <img src={logo} alt height={20} /> */}
                                                        BHAVYA
                                                    </a>
                                                </div>
                                                <p className="mt-3 fs-5 fw-semibold fw-medium text-secondar ">
                                                    Premium Admin &amp; Dashboard Template
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="justify-content-center row">
                                        <div class="col-md-8 col-lg-6 col-xl-5">
                                            <div class="mt-4 card">
                                                <div class="p-4 card-body">
                                                    <div class="text-center mt-2">
                                                        <h5 class="text-primary">
                                                            Create New Account
                                                        </h5>
                                                        <p class="text-muted">
                                                            Get your free velzon account now
                                                        </p>
                                                    </div>
                                                    <div class="p-2 mt-4">
                                                        <Form action="#" class="needs-validation" onSubmit={(e) => { handleSubmit(e) }}>
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Email address</Form.Label>
                                                                <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                                                                <Form.Text className="text-muted">
                                                                    We'll never share your email with anyone else.
                                                                </Form.Text>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>UserName</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter email" value={user.username} name="username" onChange={(e) => { handleChange(e) }} />
                                                                <Form.Text className="text-muted">
                                                                    We'll never share your email with anyone else.
                                                                </Form.Text>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" value={user.cpassword} name="cpassword" onChange={(e) => { handleChange(e) }} />
                                                                <Form.Text className='text-danger'>
                                                                    {
                                                                        err
                                                                    }
                                                                </Form.Text>
                                                            </Form.Group>
                                                            <div class="mb-4">
                                                                <p class="mb-0 fs-12 text-muted fst-italic">
                                                                    By registering you agree to the Velzon
                                                                    <a class="text-primary text-decoration-underline fst-normal fw-medium" href="/velzon/react/default/register">
                                                                        Terms of Use
                                                                    </a>
                                                                </p>
                                                            </div>
                                                            <div class="mt-4">
                                                                <Button type="submit" className="btn btn-success w-100 btn btn-success" onClick={() => { handleSignUp() }}  >
                                                                    Sign In
                                                                </Button>
                                                            </div>
                                                            <div class="mt-4 text-center">
                                                                <div class="signin-other-title">
                                                                    <h5 class="fs-13 mb-4 title text-muted">
                                                                        Create account with
                                                                    </h5>
                                                                </div>
                                                                {/* <div>
                                                                    <Button type="button" class="btn btn-primary btn-icon waves-effect waves-light">
                                                                        <Facebook class=" fs-16"/>
                                                                        
                                                                    </Button>
                                                                    <Button type="button" class="btn btn-danger btn-icon waves-effect waves-light">
                                                                        <Google class=" fs-16"/>
                                                                        
                                                                    </Button>
                                                                    <Button type="button" class="btn btn-dark btn-icon waves-effect waves-light">
                                                                        <Github class="ri-github-fill fs-16"/>
                                                                        
                                                                    </Button>
                                                                    <Button type="button" class="btn btn-info btn-icon waves-effect waves-light"><Twitter class="fs-16"/>
                                                                    
                                                                    </Button>
                                                                </div> */}
                                                                <div>
                                                                    <Button type="button" className="btn-icon me-1 btn btn-primary">
                                                                        <Facebook className="fs-16" />
                                                                    </Button>
                                                                    <Button type="button" to="#" className="btn-icon me-1 btn btn-danger">
                                                                        <Google onClick={() => { googleLogin() }} className="fs-16" />
                                                                    </Button>
                                                                    <Button className="btn-icon btn btn-dark me-1">
                                                                        <Github className=" fs-16" />
                                                                    </Button>
                                                                    <Button className="btn-icon btn btn-info me-1">
                                                                        <Twitter className=" fs-16" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-3 text-center text-secondary pb-2">
                                                <p >
                                                    Already have an account ?
                                                    <a class="fw-semibold text-primary text-decoration-underline" onClick={() => { signin() }}>
                                                        Signin
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <footer class="footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="text-center">
                                            <p class="mb-0 text-muted">© 2023 Velzon. Crafted with
                                                <i class="mdi mdi-heart text-danger">
                                                </i>
                                                by Themesbrand
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer> */}
                    </div>
                </div>
            </>

        )
    }
}

export default Signup