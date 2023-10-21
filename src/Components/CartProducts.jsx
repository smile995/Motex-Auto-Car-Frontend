import React from 'react';
import { Link } from 'react-router-dom';

const CartProducts = ({ product }) => {
    const { image, name, type, price, _id, brandName } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl grid grid-cols-2 gap-3">
            <figure><img className=' gird col-span-1' src={image} alt="Movie" /></figure>
            <div className="lg:flex justify-between items-center grid col-span-1">
                <div>
                    <h2 className="card-title">Category:{type}</h2>
                    <h2 className="card-title">Brand:{brandName}</h2>
                    <h2 className="card-title"> Name:{name}</h2>
                    <h2 className="card-title">Price: $ {price}</h2>

                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <Link to={'/update'}>
                            <button className="btn btn-secondary">Update</button>
                        </Link>
                        <button className="btn btn-warning">Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;