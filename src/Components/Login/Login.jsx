import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Facebook, Github, Google, Heart, HeartFill, Twitch, Twitter } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { logInGoogle, logInInitiate } from '../../Service/action/auth.action'

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { User, error } = useSelector(state => state.AuthReducer)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(logInInitiate(user.email, user.password));


    }

    const signup = () => {
        navigate("/signup");
    }

    const googleLogin = () => {
        dispatch(logInGoogle())
    }
    if (User !== null) {
        navigate('/')
    } else {

        return (
            <>
                {/* <div className='d-flex vh-100 align-items-center justify-content-center'>
                    <Form onSubmit={(e) => { handleSubmit(e) }} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div> */}
                <div>
                    <div className="auth-page-wrapper pt-5">
                        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
                            <div className="bg-overlay" />
                            <div className="shape ">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120"><path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
                                </svg>
                            </div>
                            <div className="auth-page-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="text-center mt-sm-5 mb-4 text-white-50">
                                                <div>
                                                    <a className="d-inline-block auth-logo text-decoration-none text-white fs-2 fw-semibold" href="/velzon/react/default">
                                                        {/* <img src='img/logo.png' alt height={20} />  */}
                                                        BHAVYA
                                                    </a>
                                                </div>
                                                <p className="mt-3 fs-5 fw-semibold fw-medium text-secondar ">
                                                    Premium Admin &amp; Dashboard Template
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="justify-content-center row">
                                        <div className="col-md-8 col-lg-6 col-xl-5">
                                            <div className="mt-4 card">
                                                <div className="p-4 card-body">
                                                    <div className="text-center mt-2">
                                                        <h5 className="text-primary">
                                                            Welcome Back !
                                                        </h5>
                                                        <p className="text-muted">
                                                            Sign in to continue to Bhavya.
                                                        </p>
                                                    </div>
                                                    <div className="p-2 mt-4">
                                                        <Form onSubmit={(e) => { handleSubmit(e) }} >
                                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                                <Form.Label>Email address</Form.Label>
                                                                <Form.Control type="email" placeholder="Enter email" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
                                                                <Form.Text className="text-muted">
                                                                    We'll never share your email with anyone else.
                                                                </Form.Text>
                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="password" placeholder="Password" value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
                                                            </Form.Group>
                                                            <div class="mt-4">
                                                                <Button type="submit" className="btn btn-success w-100 btn btn-success">
                                                                    Sign In
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-center text-secondary">
                                                <p className="mb-3">
                                                    Don't have an account ?
                                                    <a className="fw-semibold text-primary text-decoration-underline" onClick={() => { signup() }}>
                                                        Signup
                                                    </a>
                                                </p>
                                                <div>
                                                    <Button type="button" className="btn-icon me-1 btn btn-primary">
                                                        <Facebook className="fs-16" />
                                                    </Button>
                                                    <Button type="button" to="#" className="btn-icon me-1 btn btn-danger" onClick={() => { googleLogin() }}>
                                                        <Google className="fs-16" />
                                                    </Button>
                                                    <Button className="btn-icon btn btn-dark me-1">
                                                        <Github className=" fs-16" />
                                                    </Button>
                                                    <Button className="btn-icon btn btn-info me-1">
                                                        <Twitter className=" fs-16" />
                                                    </Button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <footer className="footer text-dark mt-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3">
                                            <div className="text-center">
                                                <p className="mb-0 text-muted ">
                                                    © 2023 Bhavya. Crafted with&nbsp;
                                                    <HeartFill className=" text-danger" />&nbsp;
                                                    by Themesbrand
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>

                    </div>
                </div>

            </>
        )
    }

}

export default Login