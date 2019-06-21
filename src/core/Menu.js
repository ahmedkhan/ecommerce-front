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
    <div>      
        <ul className="nav nav-tabs bg-primary">           
        
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <Fragment>
                <li className="nav-item ml-auto">
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
               <li className="nav-item ml-auto">
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
);

export default withRouter(Menu);
