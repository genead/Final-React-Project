import React, { useState, useEffect } from 'react';
import { Container_outer } from './StyledProduct'
import ProductCard from './ProductCard';
// import ProductDetail from '../ProductDetailsPage/ProductDetailPage';


const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products)
    const [loading, setLoading] = useState(false);
    let componentMount = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            console.log(res.results);
            if (componentMount) {
                setProducts(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMount = false;
            }
        }
        getProducts();
        // .then((data) => console.log(data))
    }, [])

    const Loading = () => {
        return (
            <>
                Loading . . . . .
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-2  pb-y " style={{ marginTop: "90px" }}>
                    <button className="btn btn-outline-dark me-2 shadow" onClick={() => setFilter(products)}>All</button>
                    <button className="btn btn-outline-dark me-2 shadow" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2 shadow" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2 shadow" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2 shadow" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                
                    <Container_outer>
                        {filter.map((product) => (
                            <div key={product.id}>
                                <ProductCard
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    id={product.id} />

                            </div>

                        ))}
                    </Container_outer>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <Container_outer className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </Container_outer>
            </div>
        </div>
    );
};

export default ProductPage;
