import React from 'react';
import roadBg from '../../assets/home/road_bg.png';

function header() {
    return (
        <div>
            <section className="text-white py-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${roadBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 kalam">About <span className='text-[#FB9733]'>QuadWheel</span></h1>
                    <p className="text-xl mb-8 font-light raleway">Your Trusted Partner in Car Rentals Since 2010</p>
                </div>
            </section>
        </div>
    )
}

export default header