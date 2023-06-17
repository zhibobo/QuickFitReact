import React from 'react';
import { FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from '@mui/material';
import { FaCcMastercard,
         FaCcVisa,
         FaCcAmex,
         FaCcPaypal,
} from 'react-icons/fa';
import logo from "../images/quickfit.png";
import { Link } from 'react-router-dom';

const Checkout2 = () => {
    return (
        <div>
            <div className='checkout-container'>
                <h2 className='checkout-title'>Checkout</h2>
                <h1 className='checkout-step'>2. Choose Payment Method</h1>
                <div className='checkout-subcontainer'>
                    <div>
                        <div className='radiobtn'>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue=""
                                    name="radio-buttons-group"
                                >
                                    <div className='option'>
                                        <FormControlLabel value="creditcard" control={<Radio />} label="Secured Payment by Credit Card" />
                                        <p className='paymentlogo'><FaCcMastercard/>   <FaCcVisa/>   <FaCcAmex/></p>
                                    </div>
                                    <div className='option'>
                                        <FormControlLabel className='option' value="paypal" control={<Radio />} label="Paypal" />
                                        <p className='paymentlogo'><FaCcPaypal/></p>
                                    </div>
                                    <FormControlLabel className='option' value="shopback" control={<Radio />} label="ShopBack Paylater" />
                                </RadioGroup>
                            </FormControl>                      
                        </div>  
                        <Link to="/checkout3">
                            <button className='paymentbtn'>
                                <p>Confirm Payment</p>    
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

export default Checkout2;