import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartBtn from "../CartPage/CartBtn";


const Header = () => {
	// const { cartItems, showHideCart } = useContext(CartContext);
	const state = useSelector((state) => state.handleCart)
	return (
		<div>
			<Navbar className="shadow py-3 navbar fw-normal fixed-top" bg="light" expand="sm" >
				<Container className="me-auto">
					<Navbar.Brand className="fs-5 fw-bold" href="/">Fake Store</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-center me-auto font-weight-normal justify-content-center">
							<Nav.Link className="justify-content-center mt-2" href="/">ProductsPage</Nav.Link>
							<Nav.Link className="justify-content-center mt-2" href="/productsPage">DetailsPage</Nav.Link>
							<Nav.Link className="justify-content-center mt-2" href="/checkoutPage">CheckoutPage</Nav.Link>
							
						</Nav>
						<CartBtn />
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Outlet />
		</div>
	);
};

export default Header;
