import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { match } = this.props
        console.log(match);

        const name = match.params.name;
        return (
            <div className="container">
                {name}
            </div>
        );
    }
}
export default Product;
