import React, { useState, useEffect } from "react";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import Menu from "./Menu"
import Carousel from "./Carousel";





const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts("sold").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts("createdAt").then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <div className="hidden-xl-up">
            <Menu />
            <br />
            <Carousel />
            <br />
            <Search />
            <span className="d-block p-2 bg-primary text-white"><b>New Arrivals</b></span>
            <br />
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <br />
            <span className="d-block p-2 bg-primary text-white"><b>Best Seller's</b></span>
            <br />
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
