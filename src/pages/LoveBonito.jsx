import React, { useState } from 'react';
import lb1 from '../images/lbsample/lb2_1.jpg';
import lb2 from '../images/lbsample/lb2_2.jpg';
import lb3 from '../images/lbsample/lb2_3.jpg';
import lb4 from '../images/lbsample/lb2_4.jpg';
import lb5 from '../images/lbsample/lb2_5.jpg';
import lb6 from '../images/lbsample/lb2_6.jpg';
import lb7 from '../images/lbsample/lb2_7.jpg';
import { FaPlus, FaMinus, FaShoppingBasket, FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoveBonito = () => {
    const [index, setIndex] = useState(0);
    const [num, setNum] = useState(1);

    const incNum = () => {
        setNum(num+1);
    };

    const decNum = () => {
        if(num > 1){
            setNum(num-1);  
        } else {
            setNum(1);
        }
    }; 

    const smallImage=[
        {
            image: lb1 
        },
        {
            image: lb2 
        },
        {
            image: lb3 
        },
        {
            image: lb4 
        },
        {
            image: lb5 
        },
        {
            image: lb6 
        },
        {
            image: lb7 
        },
    ]
    return (
        <div className='products'>
            <div className='product-detail-container'>
                <div className='product-images'>
                    <div className='small-images-container'>
                        {
                            smallImage.map((item, ind) => (
                                <img 
                                key={ind}
                                src={item.image} 
                                className='small-image' 
                                onMouseEnter={() => setIndex(ind)} />
                            ))
                        }
                    </div>
                    <div className='big-image-container'>
                        <img src={smallImage[index].image} />
                    </div>
                </div>
                <div className='product-details'>
                    <div className='name-and-category'>
                        <h3>Raegan High Low Hem Shirt</h3>
                        <span>Shirt</span>
                        <div className='Saleproduct-pricecontainer' >
                            <p className='presale-price'>$45.00</p> 
                            <p className='sale-price'>$35.00</p> 
                        </div>
                    </div>
                    <div className='size'>
                        <p>SELECT SIZE</p>
                        <ul>
                            <button className='sizebutton' >XS</button>
                            <button className='sizebutton' >S</button>
                            <button className='sizebutton' >M</button>
                            <button className='sizebutton' >L</button>
                            <button className='sizebutton' >XL</button>
                        </ul>
                    </div>
                    <div className='quantity-desc'>
                        <h4>Quantity: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' >{num}</span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div>
                    <div className='add-to-cart'>
                        <button to="/cart" className='btn' type='button'><FaShoppingBasket size={20} />   Add to Cart</button>
                        <Link to='/checkout'>
                            <button to="/cart" className='paynowbtn' type='button'><FaCartArrowDown size={20} />   Checkout Now</button>                        
                        </Link>
                    </div>
                </div>
            </div>
            {/*<div className='product-desc-container'>
                <div className='desc-title'>
                    <div className="desc-background">
                        Overview
                    </div>
                    <h2>Product Information</h2>  
                </div>
                <div className='desc-details'>
                    <h4>PRODUCT DETAILS</h4>
                    <p>{details[0].children[0].text}</p>  
                </div>
                <div className='desc-care'>
                    <h4>PRODUCT CARE</h4>
                    <ul>
                    {careList.map(list => (
                        <li>{list}</li>
                    ))}
                    </ul>
                </div>
            </div>*/}
        </div>
    );
};

export default LoveBonito;