import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Container_Fade, Container_inner, Container_FadeI } from './StyledModal';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
// import ProductDetail from '../ProductDetailsPage/ProductDetail';



const useStyles = makeStyles((theme) => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: "100%",
        height: "95%",
        borderRadius: 10,
        backgroundColor: "#e4e4e4",
        margin: "6em 0 0 0",
        border: "1px solid #39445a",
        outline: "none",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 2),
    },
}));


export default function ContentModal({ children, id }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState([]);
    // const { addToCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart");

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
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


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //we need to store useDispatch in a variable
    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product));
            setCartBtn("Remove from Cart")

        } else {
            dispatch(delItem(product));
            setCartBtn("Add to Cart")
        }
    }
    const ShowProduct = () => {
        return (
            <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                <Container_Fade  >
                    <div>
                        <img src={product.image} alt={product.title} style={{ width: "12em", height: "14em", margin: "1em 1em 1em 1em", backgroundColor: "#e4e4e4" }} />
                    </div>
                    <Container_FadeI>

                        <h2 style={{ alignItems: 'center' }}>{product.category}
                        </h2>
                        <h5>{product.title}</h5>
                        <div>
                        <p className="fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            {Array(6)
						.fill()
						.map((_, i) => (
							<i>🌟</i>
						))}
                            <i ></i>
                            <i ></i>
                            <span > <span>{" "}</span>
                                Count: {product.rating && product.rating.count}
                            </span>
                            </p>
                            </div>
                        <h3 style={{ fontWeight: "700" }}>${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <div>
                            <button className="btn btn-outline-dark px-0 py-2" onClick={() => handleCart(product)} >{cartBtn}</button>
                            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                        </div>
                    </Container_FadeI>
                    <button style={{ height: "40px", width: "200px", borderRadius: "20px", color: "tomato", fontWeight: "700" }} onClick={handleClose}>X</button>
                </Container_Fade>
            </div>
        )
    }

    return (
        <div>
            <Container_inner type="button" onClick={handleOpen}>
                {children}
            </Container_inner>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} >
                    <div className={classes.paper}>
                        <div className="row py-4" >
                            {loading ? <Loading /> : <ShowProduct />}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}