import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import Product from "./Product";

class Products extends Component {
    render() {
        let products = [
            {
                id: 0,
                slug: 'iphone',
                name: 'IphoneX',
                price: 35000000
            },
            {
                id: 1,
                slug: 'sm',
                name: 'IphoneX-Sm',
                price: 20000000
            },
            {
                id: 2,
                slug: 'iphone3',
                name: 'IphoneX-3',
                price: 15000000
            }
        ]
        const { match } = this.props;
        const url = match.url;
        console.log(match);
        const result = products.map((product, index) => {
            return (
                <NavLink key={index} to={`${url}/${product.slug}`} >
                    <li key={index} className="list-group-item">
                        {product.id} - {product.name} - {product.price}

                    </li>
                </NavLink>
            );
        });

        const { location } = this.props;
        console.log(location);
        return (
            <div className="container">
                <h1>Product list (route with params)</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>

                <div className="row">
                    <Route path="/products/:name" component={Product} />
                </div>

            </div>
        );
    }
}
export default Products;
