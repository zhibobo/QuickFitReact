import React from 'react';
import { Link } from 'react-router-dom';
import lovebonito from '../images/products/lovebonito.jpg';
import lovebonitologo from '../images/logos/lovebonitologo.png';
import uniqlo from '../images/products/uniqlo.jpg';
import uniqlologo from '../images/logos/uniqlologo.png';
import hm from '../images/products/hm.jpg';
import hmlogo from '../images/logos/hmlogo.png';
import btv from '../images/products/btv.jpg';
import btvlogo from '../images/logos/btvlogo.png';


const NewArrivals = () => {
    return (
        <>
        <h1 className='Allproducts-title' >New Arrivals</h1>
            <div className='Allproducts-container'>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={lovebonitologo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={lovebonito} className='Allproduct-img' />
                        </div>
                        <p className='Allproduct-name'>Vega Straight Leg Pants</p>
                        <p className='Allproduct-tags'>Pants</p>
                        <p className='Allproduct-price'>$59.00</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={uniqlologo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={uniqlo} className='Allproduct-img' />
                        </div>
                        <p className='Allproduct-name'>Crew Neck Sweatshirt</p>
                        <p className='Allproduct-tags'>Sweater</p>
                        <p className='Allproduct-price'>$39.90</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={hmlogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={hm} className='Allproduct-img' />
                        </div>
                        <p className='Allproduct-name'>Oversized linen shirt</p>
                        <p className='Allproduct-tags'>Shirt</p>
                        <p className='Allproduct-price'>$29.95</p>
                    </div>
                </Link>
                <Link>
                    <div className='Allproduct-card'>
                        <img src={btvlogo} className='Allproduct-logo' />
                        <div className='Allproduct-imgcontainer'>
                            <img src={btv} className='Allproduct-img' />
                        </div>
                        <p className='Allproduct-name'>Cotton Cargo Trouser</p>
                        <p className='Allproduct-tags'>Pants</p>
                        <p className='Allproduct-price'>$109.00</p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default NewArrivals;