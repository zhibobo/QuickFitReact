import React from 'react';
import SellerSidebar from '../components/SellerSidebar.jsx';
import businessinsight from '../images/sellercentre/businessinsights.png';

const SellerCentre = () => {
    return (
        <>     
        <div className='myprofile-container' >
            <SellerSidebar />
            <div className='seller-container'>
                <h1 className='section-head'>To Do List</h1>
                <p className='section-desc'>Things you need to deal with</p>
                <div className='task-container'>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>Unpaid</p>
                    </div>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>To-Process Shipment</p>
                    </div>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>Processed Shipment</p>
                    </div>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>Pending Cancellation</p>
                    </div>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>Pending Return/Refund</p>
                    </div>
                    <div className='task'>
                        <h1 className='task-num'>0</h1>
                        <p className='task-label'>Sold Out Products</p>
                    </div>
                </div>
                <h1 className='section-head'>Business Insights</h1>
                <p className='section-desc'>An overview of the shop data for the paid order dimension</p>
                <img src={businessinsight} alt="businessinsight" className='bizinsight'/>
                <h1 className='section-head'>Marketing Centre</h1>
                <p className='section-desc'>Marketing Tools & Nominations for Promotion</p>
            </div>
        </div>
        </>
    );
};

export default SellerCentre;