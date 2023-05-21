import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Register from "../../Register";
import Dashboard from "../../New folder/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "../../Login";

const Navbar = (props) => {
    const { isLoggedIn, Auth, role } = props;

    const handleLogout = () => {
        props.Auth();
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Medicine Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {/*
                        isLoggedIn ? (
                           <div>
                           <Link to='/dashboard' style={{ marginRight: '1' + 'em' }} class="btn btn-outline-info">Dashboard</Link>
                           <Link to="/login" onClick={handleLogout} className="btn btn-outline-info">Logout</Link>
                       </div>
                        )
                        :
                        <div>
                                <Link to='/register' style={{ marginRight: '1' + 'em' }} class="btn btn-outline-secondary">Register</Link>
                                <Link to='/login' class="btn btn-outline-info">Login</Link>
                            </div>
                        */}
                    {isLoggedIn && (
                        <>
                        
                        {role == "user" &&(
                            <>
                            <Link to='/dashboard' style={{ marginRight: '1' + 'em' }} class="btn btn-info">Dashboard</Link>
                            <Link to='/viewcart' style={{ marginRight: '1' + 'em' }} class="btn btn-warning">View Cart</Link>
                            <Link to='/viewmedicines' style={{ marginRight: '1' + 'em' }} class="btn btn-secondary">View Medicines</Link>
                            </>
                        )}
                        
                            
                            {role == "admin" && (
                                <>
                                    <Link to='/viewusers' style={{ marginRight: '1' + 'em' }} class="btn btn-info">View Users</Link>
                                    <Link to='/viewcategories' style={{ marginRight: '1' + 'em' }} class="btn btn-warning">View Categories</Link>
                                    <Link to='/viewmedicinesadmin' style={{ marginRight: '1' + 'em' }} class="btn btn-secondary">View Medicines</Link>  
                                </>
                            )}
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item" style={{float:'right'}}><Link to="/login" onClick={handleLogout} style={{ marginRight: '1' + 'em' }} className="btn btn-danger logout">Logout</Link></li>
                            </ul>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                        <Link to='/about' className="btn btn-dark" style={{ marginRight: '1' + 'em' }}>About Us</Link>
                        <Link to='/contact' className="btn btn-warning" style={{ marginRight: '1' + 'em' }}>Contact Us</Link>
                        <Link to='/privacy' className="btn btn-danger">Privacy</Link>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li class="nav-item" style={{float:'right'}}> <Link to='/register' style={{ marginRight: '1' + 'em' }} class="btn btn-success">Register</Link></li>
                           <li class="nav-item" style={{float:'right'}}> <Link to='/login' class="btn btn-info">Login</Link></li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
