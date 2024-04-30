'use client'

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /* LOCAL STORAGE */
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (slug) => {
        const updatedCart = cart.filter(item => item.slug !== slug);
        setCart(updatedCart);
    };

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug);
    };

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            isInCart,
            totalQty,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    );
};