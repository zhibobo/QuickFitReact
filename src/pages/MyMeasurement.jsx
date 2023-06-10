import React, { useState } from 'react';
import ProfileSidebar from '../components/ProfileSidebar.jsx';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MyMeasurement = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num+1);
    };

    const decNum = () => {
        if(num > 0){
            setNum(num-1);  
        } else {
            setNum(0);
        }
    }; 

    return (
        <>     
        <div className='mymeas-container' >
            <ProfileSidebar />
            <div className='toggle-container'>
                <h1 className='head'>My Measurements</h1>
                <div className='allmeasurements'>
                    <div className='measurement-desc'>
                        <h4>Height: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' >{num} cm</span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div> 
                    <div className='measurement-desc'>
                        <h4>Weight: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' ></span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div> 
                    <div className='measurement-desc'>
                        <h4>Arm Length: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' ></span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div> 
                    <div className='measurement-desc'>
                        <h4>Chest Width: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' ></span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div> 
                    <div className='measurement-desc'>
                        <h4>Waist Size: </h4>
                        <div>
                            <span className='minus' onClick={decNum}><FaMinus /></span>
                            <span className='num' ></span>
                            <span className='plus' onClick={incNum}><FaPlus /></span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    );
};

export default MyMeasurement;