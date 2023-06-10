import React from 'react';
import { Link } from 'react-router-dom';
import nike from '../images/products/nike.jpg';
import nikelogo from '../images/logos/nikelogo.png';
import lululemon from '../images/products/lululemon.jpg';
import lululemonlogo from '../images/logos/lululemonlogo.png';
import adidas from '../images/products/adidas.jpg';
import adidaslogo from '../images/logos/adidaslogo.png';
import levis from '../images/products/levis.jpg';
import levislogo from '../images/logos/levislogo.png';

const BestSellers = () => {
    return (
        <>
        <h1 className='Allproducts-title' >Best Sellers</h1>
            <div className='Allproducts-container'>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={nikelogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={nike} className='Allproduct-img' />
                        </div>
                        <p className='Bestproduct-sign'>BEST SELLER</p>
                        <p className='Allproduct-name'>Nike Pro Dri-FIT</p>
                        <p className='Allproduct-tags'>Shirt</p>
                        <p className='Allproduct-price'>$45.00</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={lululemonlogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={lululemon} className='Allproduct-img' />
                        </div>
                        <p className='Bestproduct-sign'>BEST SELLER</p>
                        <p className='Allproduct-name'>lululemon Align™ High-Rise Crop 20"</p>
                        <p className='Allproduct-tags'>Leggings</p>
                        <p className='Allproduct-price'>$133.00</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={adidaslogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={adidas} className='Allproduct-img' />
                        </div>
                        <p className='Bestproduct-sign'>BEST SELLER</p>
                        <p className='Allproduct-name'>Adicolor Classics Trefoil Hoodie</p>
                        <p className='Allproduct-tags'>Sweatshirt</p>
                        <p className='Allproduct-price'>$129.00</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={levislogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={levis} className='Allproduct-img' />
                        </div>
                        <p className='Bestproduct-sign'>BEST SELLER</p>
                        <p className='Allproduct-name'>Levi's Women's Superlow Boot Cut Jeans</p>
                        <p className='Allproduct-tags'>Pants</p>
                        <p className='Allproduct-price'>$134.90</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default BestSellers;