import React from 'react';
import lovebonito2 from '../images/products/lovebonito2.jpg';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='cart-wrapper'>
            <h2>Shopping Cart</h2> 
            <div className='cart-container'>
                <div className='cart-items'>
                    <div className='item-card'>
                    <div className='item-image'>
                        <img src={lovebonito2} alt='img' />
                    </div>
                        <div className='item-details'>
                            <div className='name-and-remove'>
                                <h3>Raegan High Low Hem Shirt</h3>  
                                <button type='button' className='remove-item'> <FaTrashAlt size={20} /> </button>  
                            </div>
                            <p className='item-tag'>Shirt</p>
                            <p className='delivery-est'>Delivery Estimation</p>
                            <p className='delivery-days'>5 Working Days</p>
                            <div className='price-and-qty'>
                            <span className='price'>$35.00</span>  
                                <div>
                                    <span className='minus' ><FaMinus /></span>
                                    <span className='num' >1</span>
                                    <span className='plus' ><FaPlus /></span>
                                </div>   
                            </div>
                        </div>
                    </div>    
                </div>
                <div className='order-summary'>
                    <h3>Order Summary</h3>
                    <div className='qty'>
                        <p>Quantity</p>
                        <span>1 Product</span>
                    </div>
                    <div className='subtotal'>
                        <p>Sub Total</p>
                        <span>$35.00</span>
                    </div>
                    {/* <div className='total'>
                        <p>Total</p>
                        <span>${totalPrice}</span>
                    </div>  */}
                    <div className='checkoutbtn-container' >
                        <Link to='/myavatar'>
                            <button className='avatarbtn' type='button' >Try it on first!</button>
                        </Link>
                        <Link to='/checkout'>
                            <button className='checkoutbtn' type='button' >Proceed to Checkout</button>                        
                        </Link>
                    </div>         
                </div>
            </div>
        </div>
        
    );
};

export default Cart;