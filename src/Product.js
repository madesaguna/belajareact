import React from "react";

function Product(props) {
    //console.log(props);
    return (
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            alt={props.productItem.name}
                            src={props.productItem.imageSrc}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">
                                {props.productItem.name}
                            </p>
                            <div className="content">
                                {props.productItem.desc}
                                <br />
                            </div>
                            <h5>{props.productItem.price}</h5>
                            <button
                                className="button is-primary"
                                onClick={e => {
                                    e.preventDefault();
                                    //console.log(props.productItem);
                                    props.onAddItemToCart(props.productItem);
                                }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
