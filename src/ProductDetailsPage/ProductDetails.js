import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container_inner, Image, H5, Container_outer } from './StyledProductDetails';
import { addItem, delItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

const ProductDetails = ({ image, title, price, rating, category, description }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const dispatch = useDispatch();
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product));
        }
    }
    return (
        // <div  id={id} >
        //         <div>
        //             <Image src={image} alt={title} />
        //         </div>
        //         <div>
        //             <h5>{title.substring(0, 15)}...</h5>
        //         </div>
        //         <div>
        //             <H5>${price}</H5>
        //     </div>
        //     <div>

        //     </div>
        // </div>
        <>
            <div className="col-md-6">
                <img src={image} alt={title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {category}
                </h4>
                <h2 className="display-5">{title}</h2>
                <p className="lead fw-bolder">
                    {rating && rating.rate}
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">${price}</h3>
                <p className="lead">{description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => handleCart(products)}>Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
            </div>
        </>
    );
};

export default ProductDetails;
