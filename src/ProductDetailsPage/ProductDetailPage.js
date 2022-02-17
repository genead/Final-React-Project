import React, { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';


const ProductDetailPage = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products)
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    let componentMount = true;

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products");
            setProducts(await res.json());
            setLoading(false);
        }
        getProduct();
    }, []);
    

    const Loading = () => {
        return (
            <>
                Loading .....
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <ProductDetails
                            image={products.image}
                            category={products.category}
                            title={products.title}
                            rating={products.rating}
                            // rate={products.rating.rate}
                            price={products.price}
                            description={products.description}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
