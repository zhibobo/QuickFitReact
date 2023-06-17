import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <div className='checkout-container'>
                <h2 className='checkout-title'>Checkout</h2>
                <h1 className='checkout-step'>1. Choose Shipping Method</h1>
                <div className='checkout-subcontainer'>
                    <div className='shipping-container'>
                        <div className='info-container'>
                            <p className='info-name'>* Country</p>
                            <input className='info-input' type="text" />
                        </div>
                        <div className='info-container'>
                            <p className='info-name'>* Address & Unit Number</p>
                            <input className='info-input' type="text" />
                        </div>
                        <div className='address-container'>
                            <div className='info-container'>
                                <p className='info-name'>* City</p>
                                <input className='info-input-small' type="text" />
                            </div>
                            <div className='info-container'>
                                <p className='info-name'>* State/Province</p>
                                <input className='info-input-small' type="text" />
                            </div>
                            <div className='info-container'>
                                <p className='info-name'>* Zip/Postal Code</p>
                                <input className='info-input-small' type="text" />
                            </div>
                        </div>
                        <hr className='info-divide'/>
                        <div className='address-container'>
                            <div className='info-container'>
                                <p className='info-name'>* First Name</p>
                                <input className='info-input-small' type="text" />
                            </div>
                            <div className='info-container'>
                                <p className='info-name'>* Last Name</p>
                                <input className='info-input-small' type="text" /> 
                            </div>
                        </div>
                        <div className='info-container'>
                            <p className='info-name'>* Contact Number</p>
                            <input className='info-input' type="tel" />
                        </div>
                        <Link to="/checkout2">
                            <button className='paymentbtn'>
                                <p>Continue to payment</p>
                            </button>                        
                        </Link>
                    </div>
                    <div className='checkout-summary'>
                        <h3>Order Summary</h3>
                        <div className='qty'>
                            <p>Quantity</p>
                            <span>1 Product</span>
                        </div>
                        <div className='subtotal'>
                            <p>Sub Total</p>
                            <span>$35.00</span>
                        </div>
                        <div className='shipping'>
                            <p>Shipping</p>
                            <span>$5.00</span>
                        </div>
                        <hr className='order-summary-divde'/>    
                        <div className='total'>
                            <p>Total</p>
                            <span>$40.00</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;