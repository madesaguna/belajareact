import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
    state = {
        cartItems: [],
        products: []
    };

    /* function handleAddItemToCart(product) {} */
    handleAddItemToCart = product => {
        let cartItems = this.state.cartItems;
        const alreadyExists = cartItems.some(
            cartItem => cartItem.product.id === product.id
        );
        // console.log(alreadyExists);
        if (alreadyExists) {
            cartItems = cartItems.map(cartItem => {
                if (cartItem.product.id === product.id) {
                    cartItem.quantity = cartItem.quantity + 1;
                }
                return cartItem;
            });
        } else {
            cartItems.push({
                product: product,
                quantity: 1
            });
        }

        this.setState({ cartItems: cartItems });
    };

    handleRemoveItemFromCart = product => {
        const cartItemState = this.state.cartItems;
        const selectedIndexItem = cartItemState.findIndex(cartItem => {
            return cartItem.product.id === product.id;
        });

        const selectedItem = cartItemState[selectedIndexItem];

        if (selectedItem.quantity > 1) {
            selectedItem.quantity--;
        } else {
            cartItemState.splice(selectedIndexItem, 1);
        }
        this.setState({ cartItem: cartItemState });
    };

    componentDidMount() {
        //console.log('did mount');
        fetch("https://product-list.glitch.me/")
            .then(response => response.json())
            .then(products => {
                this.setState({ products: products }); //console.log(products);
            });
    }
    render() {
        return (
            <div className="container">
                {/* <Navbar/> */}
                <Navbar />
                <div className="columns">
                    <div className="column is-two-thirds">
                        <div>
                            <h3 className="title">Our Products</h3>
                            <div className="columns">
                                {/* Product */}
                                {this.state.products.map(product => (
                                    <Product
                                        key={product.id}
                                        productItem={product}
                                        onAddItemToCart={
                                            this.handleAddItemToCart
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* shopping cart */}
                    <ShoppingCart
                        cartItems={this.state.cartItems}
                        total={this.state.total}
                        onRemoveItemFromCart={this.handleRemoveItemFromCart}
                    />
                </div>
            </div>
        );
    }
}

export default App;