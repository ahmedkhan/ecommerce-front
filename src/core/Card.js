import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View Product
                    </button>
                </Link>
            )
        );
    };

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        });
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    onClick={addToCart}
                    className="btn btn-outline-warning mt-2 mb-2"
                >
                    Add to cart
                </button>
            )
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => removeItem(product._id)}
                    className="btn btn-outline-danger mt-2 mb-2"
                >
                    Remove Product
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-primary badge-pill">In Stock</span>
        ) : (
                <span className="badge badge-danger badge-pill">Out of Stock</span>
            );
    };

    const handleChange = productId => event => {
        setCount(event.target.value < 0 ? 0 : event.target.value);
        if (event.target.value >= 0) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div className="hidden-xl-up">
                    <div className="input-group hidden-xl-up">
                        <div className="input-group hidden-xl-up">
                            <span className="d-inline p-2 bg-dark text-white hidden-xl-up">
                                Adjust Quantity
                            </span>
                        </div>

                        
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(product._id)}
                        />
                    </div>
                </div>
            )
        );
    };

    return (
        <div className="card hidden-xl-up">
            <ShowImage item={product} url="product" />
            <div className="card-body hidden-xl-up">
            {shouldRedirect(redirect)}
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description.substring(0, 100)}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">${product.price}</li>
                <li className="list-group-item">Category: {product.category && product.category.name}</li>
                <li className="list-group-item">Added on {moment(product.createdAt).fromNow()}</li>
            </ul>
            <div className="card-body">
            
                {showStock(product.quantity)} 
                <br/>

                {showViewButton(showViewProductButton)}
                
                {showAddToCart(showAddToCartButton)}

                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
                
            </div>
        </div>
    );
};

export default Card;
