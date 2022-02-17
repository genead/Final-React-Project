import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Nav, Navbar } from "react-bootstrap";

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn  ms-2 btn-outline-none text-dark">
                <span className="fa fa-shopping-cart me-1 "></span>({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn