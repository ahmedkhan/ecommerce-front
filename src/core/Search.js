import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";
import  logo  from '../images/logo-alibaba.png'

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });

    const { categories, category, search, results, searched } = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, categories: data });
            }
        });
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const searchData = () => {
        // console.log(search, category);
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            );
        }
    };

    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4">
                    {searchMessage(searched, results)}
                </h2>
                <div className="row">
                    {results.map((product, i) => (
                        <Card key={i} product={product} />
                    ))}
                </div>
            </div>
        );
    };

    const searchForm = () => (
        <div className="container">
            <div className="row align-items-center">
            <div>
            <img className="logo" src={logo} alt="logo"/>           
		    </div>
                <div className="mx-auto" >
                    <form className="search-wrap" onSubmit={searchSubmit} style={{ "maxwidth": "150%" }}>
                        <div className="input-group w-100">
                            <input type="search"
                                className="form-control"
                                style={{ "maxwidth": "250%" }}
                                placeholder="Search"
                                onChange={handleChange("search")} />


                            <select className="custom-select" name="category_name" style={{ "maxwidth": "100%" }} >
                                <option value="">All categories</option>
                                {categories.map((c, i) => (
                                    <option key={i} value={c._id}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>





                </div>
            </div>
        </div>

    );

    return (
        <div className="row">
            <div className="container mb-3">{searchForm()}</div>
            <div className="container-fluid mb-3">
                {searchedProducts(results)}
            </div>
        </div>
    );
};

export default Search;
