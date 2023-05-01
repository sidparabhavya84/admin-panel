import React from 'react';
import './Sidebar.css';
import { Accordion, Nav } from 'react-bootstrap';
import { Speedometer, ChevronRight, ChevronDown, Person, Box2, Gear, Dash } from 'react-bootstrap-icons';
import ContextAwareToggle from '../Accordion/Accordion';
import { NavLink } from 'react-router-dom';

function Sidebar({ show }) {
    console.log(show, "show");
    return (
        <>
            <div className={show ? 'sidebar  bg-primary p-2 hide ' : 'sidebar vh-100 bg-primary p-2'}>
                <div className='logo p-2'>
                    <h3 className='text-center'>
                        <a className='text-white text-decoration-none'>
                            {/* <img src={logo} /> */}
                            BHAVYA
                        </a>
                    </h3>
                </div>
                <nav>
                    <h6 className='list-unstyled text-secondary'>
                        MENU
                    </h6>
                    <ul className='list-unstyled'>
                        <Accordion defaultActiveKey='0'>
                            <li className='p-2 '>
                                <NavLink to="/" className=' text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Speedometer />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Dashboard
                                        </span>
                                    </div>
                                    {/* <div className='arrow'>
                                    <ChevronRight />
                                </div> */}
                                </NavLink>
                            </li>
                            <li className='p-2 '>
                                <ContextAwareToggle eventKey="0">
                                    <NavLink to="/" className='text-decoration-none d-flex align-items-center navlink text-white position-relative'>
                                        <div className='icon col-1'>
                                            <Person />
                                        </div>
                                        <div className='content col ms-2'>
                                            <span>
                                                User
                                            </span>
                                        </div>
                                        <div className='arrow'>
                                            <ChevronDown />
                                        </div>
                                    </NavLink>
                                </ContextAwareToggle>
                                <Accordion.Collapse eventKey='0'>
                                    <ul className='dropdownMenu list-unstyled p-3'>
                                        <li className='p-2 '>
                                            <NavLink to="/admin" className=' text-decoration-none d-flex align-items-center navlink'>
                                                <div className='icon col-1 '>
                                                    <Dash />
                                                </div>
                                                <div className='content col ms-2'>
                                                    <span>
                                                        Admin
                                                    </span>
                                                </div>
                                            </NavLink>
                                        </li>
                                        <li className='p-2 '>
                                            <NavLink to="/user" className=' text-decoration-none d-flex align-items-center navlink'>
                                                <div className='icon col-1'>
                                                    <Dash />
                                                </div>
                                                <div className='content col ms-2'>
                                                    <span>
                                                        User
                                                    </span>
                                                </div>
                                            </NavLink>

                                        </li>
                                    </ul>
                                </Accordion.Collapse>
                            </li>
                            <li className='p-2 '>
                                <NavLink to="/product" className=' text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Box2 />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Product
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='p-2 '>
                                <NavLink to="/setting" className=' text-decoration-none d-flex align-items-center navlink'>
                                    <div className='icon col-1'>
                                        <Gear />
                                    </div>
                                    <div className='content col ms-2'>
                                        <span>
                                            Setting
                                        </span>
                                    </div>
                                </NavLink>
                            </li>
                        </Accordion>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar;