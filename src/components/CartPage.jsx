import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CartPage = () => {
    const { cart } = useCart();

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    {cart.length > 0 ? (
                        cart.map(product => <CartItem key={product.id} product={product} />)
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Cart Summary</Card.Title>
                            <Card.Text>
                                <strong>Total Quantity:</strong> {totalQuantity || 0}
                            </Card.Text>
                            <Card.Text>
                                <strong>Total Amount:</strong> ${totalAmount.toFixed(2) || 0.00}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage;
