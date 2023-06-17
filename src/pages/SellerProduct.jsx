import React from 'react';
import SellerSidebar from '../components/SellerSidebar.jsx';
import shopeeproduct from '../images/sellercentre/shopeeproduct.jpg';


const SellerProduct = () => {
    return (
        <>     
        <div className='myprofile-container' >
            <SellerSidebar />
            <div className='seller-container'>
                <h1 className='section-head'>My Products</h1>
                <p className='section-desc'>An overview of all of your shop's product listings</p>
                <img className='shopeeproduct' src={shopeeproduct} alt="shopeeproduct" />
                <h1 className='section-head'>Add Product</h1>
                <p className='section-desc'>Basic Information required</p>
                <div className='basicinfo-container'>
                    <div className='product-name'>
                        <p className='product-desc'>*Product Name</p>
                        <input className='product-input' type="text"
                            placeholder='Skinny Jeans'/>
                    </div>
                    <div className='product-name'>
                        <p className='product-desc-large'>*Product Description</p>
                        <textarea className='product-input-large' type="text"/>
                    </div>
                    <div className='product-name'>
                        <p className='product-desc'>*Category</p>
                        <input className='product-input' type="text" 
                            placeholder='Set Category' />
                    </div>
                    <div className='product-name'>
                        <p className='product-desc'>*Material</p>
                        <input className='product-input' type="text"
                            placeholder='Set Material'/>
                    </div>
                    <div className='product-name'>
                        <p className='product-desc'>*Price</p>
                        <input className='product-input' type="text"
                            placeholder='Set Price'/>
                    </div>
                    <button className='savepublish'>Save and Publish</button>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default SellerProduct;