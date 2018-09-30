import React from "react";

function ShoppingCart(props) {
    const totalPrice = props.cartItems.reduce((carrier, cartItem) => {
        return carrier + cartItem.quantity * cartItem.product.price;
    }, 0);
    return (
        <div className="column">
            <h3 className="title is-4">Shopping Cart</h3>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {props.cartItems.map((carItem, i) => (
                        <tr key={i}>
                            <td>{carItem.product.name}</td>
                            <td>{carItem.product.price}</td>
                            <td>{carItem.quantity}</td>
                            <td>
                                <button
                                    className="button is-danger is-small"
                                    onClick={e => {
                                        e.preventDefault();
                                        props.onRemoveItemFromCart(
                                            carItem.product
                                        );
                                    }}
                                >
                                    -
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Total : Rp {totalPrice}</h3>
        </div>
    );
}

export default ShoppingCart;
