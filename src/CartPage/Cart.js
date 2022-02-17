import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/actions/index'
import { NavLink } from 'react-router-dom'
import './Cart.css'


const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item ) )
    }
    const handleAdd = (item) => {
        dispatch(addItem(item))
    }
    var total = 0;
    const itemList = (item) => {
        total = total + item.price; 
}

    const cartItems = (cartItem) => {
        return (
            <>
                <div className="px-4 my-6 bg-light rounded-3 " key={cartItem.id}>
                    <div className="container py-4">
                        <div className=" float-end outline-none" aria-label="Close">
                            <div className="text-center circle" type="btn" onClick={() => handleAdd(cartItem )}> 
                            <span className="fa fa-arrow-up me-1 text-muted "></span>
                            </div>
                            <div className="text-center circle" type="btn" onClick={() => handleClose(cartItem)} > <span className="fa fa-arrow-down me-1 text-muted "></span>
                            </div>
                            
                        </div>

                        <div className="row justify-content-center ">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="150px" width="180px" />
                            </div>
                            <div className="col-md-4">
                                <h3>{cartItem.title}</h3>
                                <p className="lead fw-bold">${cartItem.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5 ">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className=" d-flex  justify-content-center mb-2">
                <div className="">Quantity: {state.length}
                    <ul className="list-group ">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex">
                                <strong style={{marginRight: "75px"}}>Total: </strong>
                                <strong>${total}</strong>
                            </li>
                    </ul>
                </div>
                    <NavLink to="/"  style={{margin: "20px 20px 20px 40px"}}> <span className="btn btn-outline-primary " >Buy More</span></NavLink>
                    </div>
                <div className="row">
                    <NavLink to="/checkoutPage" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "85px" }}>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    )
}

export default Cart
