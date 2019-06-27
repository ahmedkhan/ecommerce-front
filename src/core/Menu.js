import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (   
     
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="navbar-nav mr-auto">
        <li><Link to="#" className="nav-link py-0"> <i className="fab fa-facebook"></i> </Link></li>
		<li><Link to="#" className="nav-link py-0"> <i className="fab fa-instagram"></i> </Link></li>
		<li><Link to="#" className="nav-link py-0"> <i className="fab fa-twitter"></i> </Link></li>
      </ul>

    <div className="collapse navbar-collapse" id="navbarsExample07"> 
        <ul className="navbar-nav ml-auto">        
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <Fragment>
                <li className="nav-item">
                <Link
                    className="nav-link py-0"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
                <li className="nav-item">
                <Link
                    className="nav-link py-0"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="badge badge-pill badge-warning">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>
                <li className="nav-item">
                    <Link
                        className="nav-link py-0"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
                </Fragment>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
               <Fragment>
               <li className="nav-item ">
                <Link
                    className="nav-link py-0"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
                <li className="nav-item">
                    <Link
                        className="nav-link py-0"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item ">
                <Link
                    className="nav-link py-0"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li>
            </Fragment>
            )}

            {!isAuthenticated() && (
                <Fragment>
                <li className="nav-item ml-auto">
                <Link
                    className="nav-link py-0"
                    style={isActive(history, "/")}
                    to="/"
                />
                    
                
            </li>
                <li className="nav-item ml-auto">
                        <Link
                            className="nav-link py-0"
                            style={isActive(history, "/sellersignup")}
                            to="/sellersignup"
                        >
                           Become a Seller 
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link py-0"
                            style={isActive(history, "/customercare")}
                            to="/customercare"
                        >
                           Customer care
                        </Link>
                    </li>
                
                    <li className="nav-item">
                        <Link
                            className="nav-link py-0"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link py-0"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>

                    
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link py-0 "
                        style={{ cursor: "pointer", color: "#ffffff"}}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}
        </ul>
        </div> 
        </nav>
    
);

export default withRouter(Menu);
