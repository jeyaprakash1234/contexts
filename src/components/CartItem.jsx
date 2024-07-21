import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Card } from 'react-bootstrap';

const CartItem = ({ product }) => {
    const { dispatch } = useCart();

    const increaseQuantity = () => {
        dispatch({ type: 'INCREASE_QUANTITY', id: product.id });
    };

    const decreaseQuantity = () => {
        if (product.quantity > 1) {
            dispatch({ type: 'DECREASE_QUANTITY', id: product.id });
        }
    };

    const removeItem = () => {
        dispatch({ type: 'REMOVE_ITEM', id: product.id });
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex align-items-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="img-thumbnail"
                        style={{ width: '100px', height: '100px', marginRight: '10px' }}
                    />
                    <div>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>${product.price}</Card.Text>
                        <div className="d-flex align-items-center">
                            <Button variant="outline-primary" size="sm" onClick={decreaseQuantity}>
                                -
                            </Button>
                            <span className="mx-2">{product.quantity}</span>
                            <Button variant="outline-primary" size="sm" onClick={increaseQuantity}>
                                +
                            </Button>
                        </div>
                        <Button variant="danger" size="sm" className="mt-2" onClick={removeItem}>
                            Remove Item
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
