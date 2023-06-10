import React from 'react';
import { Link } from 'react-router-dom';
import lovebonito2 from '../images/products/lovebonito2.jpg';
import lovebonitologo from '../images/logos/lovebonitologo.png';
import g2000 from '../images/products/g2000.jpg';
import g2000logo from '../images/logos/g2000logo.png';
import zara from '../images/products/zara.jpg';
import zaralogo from '../images/logos/zaralogo.png';
import mango from '../images/products/mango.jpg';
import mangologo from '../images/logos/mangologo.png';

const Sale = () => {
    return (
        <>
        <h1 className='Allproducts-title' >Sale</h1>
            <div className='Allproducts-container'>
                <Link to="/lovebonito">
                    <div className='Allproduct-card'>
                        <img src={lovebonitologo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={lovebonito2} className='Allproduct-img' />
                        </div>
                        <p className='Saleproduct-sign'>SALE</p>
                        <p className='Allproduct-name'>Raegan High Low Hem Shirt</p>
                        <p className='Allproduct-tags'>Shirt</p>
                        <div className='Saleproduct-pricecontainer'>
                            <p className='Presaleproduct-price'>$45.00</p>
                            <p className='Saleproduct-price'>$35.00</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={g2000logo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={g2000} className='Allproduct-img' />
                        </div>
                        <p className='Saleproduct-sign'>SALE</p>
                        <p className='Allproduct-name'>Embroidery Logo Classic Pique Polo</p>
                        <p className='Allproduct-tags'>Shirt</p>
                        <div className='Saleproduct-pricecontainer'>
                            <p className='Presaleproduct-price'>$53.00</p>
                            <p className='Saleproduct-price'>$29.00</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={zaralogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={zara} className='Allproduct-img' />
                        </div>
                        <p className='Saleproduct-sign'>SALE</p>
                        <p className='Allproduct-name'>Straight Fit Culotte-Style Trousers</p>
                        <p className='Allproduct-tags'>Pants</p>
                        <div className='Saleproduct-pricecontainer'>
                            <p className='Presaleproduct-price'>$59.90</p>
                            <p className='Saleproduct-price'>$41.90</p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={mangologo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={mango} className='Allproduct-img' />
                        </div>
                        <p className='Saleproduct-sign'>SALE</p>
                        <p className='Allproduct-name'>Striped Cotton Shirt</p>
                        <p className='Allproduct-tags'>Shirt</p>
                        <div className='Saleproduct-pricecontainer'>
                            <p className='Presaleproduct-price'>$89.90</p>
                            <p className='Saleproduct-price'>$59.90</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Sale;