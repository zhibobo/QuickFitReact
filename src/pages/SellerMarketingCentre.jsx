import React from 'react';
import SellerSidebar from '../components/SellerSidebar.jsx';
import { FaTicketAlt,
         FaTags,
         FaBoxes,
         FaCartPlus,
         FaTruckMoving,
         FaGift,
         FaVideo,
         FaChartLine,
 } from 'react-icons/fa';   

const SellerMarketingCentre = () => {
    return (
        <>     
        <div className='myprofile-container' >
            <SellerSidebar />
            <div className='seller-container'>
                <h1 className='marketing-head'>Marketing Tools</h1>
                <h1 className='section-head'>Boost Sales with Promotion</h1>
                <div className='marketing-container'>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaTicketAlt /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Vouchers</h1>
                            <p className='marketing-label'>Increase orders by offering buyers reduced prices at checkout with vouchers</p>
                        </div>
                    </div>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaTags /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Discount Promotions</h1>
                            <p className='marketing-label'>Set discounts on your products to boost sales</p>
                        </div>
                    </div>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaBoxes /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Bundle Deal</h1>
                            <p className='marketing-label'>Increase average spending per order by offering product bundle discounts</p>
                        </div>
                    </div>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaCartPlus /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Add-on Deal</h1>
                            <p className='marketing-label'>Sell more products by offering add-on discounts or free gifts with min. spend</p>
                        </div>
                    </div>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaTruckMoving /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Shipping Fee Promotion</h1>
                            <p className='marketing-label'>Set shipping fee discounts to attract shoppers to make orders</p>
                        </div>
                    </div>
                </div>
                <h1 className='section-head'>Engage with Your Shoppers</h1>
                <div className='marketing-container'>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaGift /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Follow Prize</h1>
                            <p className='marketing-label'>Encourage shoppers to follow your shop by rewarding new follower vouchers</p>
                        </div>
                    </div>
                </div>
                <h1 className='section-head'>Increase Your Shop Traffic</h1>
                <div className='marketing-container'>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaVideo /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>QuickFit Ads</h1>
                            <p className='marketing-label'>Increase exposure and drive sales in high traffic areas on QuickFit with Ads</p>
                        </div>
                    </div>
                    <div className='marketing-subcontainer'>
                        <div className='marketing-icon'><FaChartLine /></div>
                        <div className='marketing-desc'>
                            <h1 className='marketing-title'>Top Picks</h1>
                            <p className='marketing-label'>Drive traffic to selected products by showing them on your product pages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SellerMarketingCentre;