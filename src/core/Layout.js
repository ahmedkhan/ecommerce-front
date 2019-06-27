import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import Search from "./Search";
import "../styles.css";
 
const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
    
        <Menu />
        <Search/>
        <Carousel/>
        <br/>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
