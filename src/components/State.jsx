import React from 'react';
import heroImg from '../assets/travel2.jpg'
const State = () => {
    return (
        <div className='mt-8'>
            <div className='text-center md:py-18 text-white bg-linear-to-r from-cyan-800 via-cyan-700 to-cyan-600'>
                <h1 className='text-2xl md:text-4xl font-bold mb-12'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around md:px-42' >
                    <div className='space-y-3.5 p-3 rounded-lg bg-linear-to-r from-[#461ea3] to-[#ae83ea]'>
                        <p className='text-xs '>Total Downloads</p>
                        <h1 className='text-2xl md:text-5xl font-bold'>29.6M</h1>
                        <p className='text-xs '>21% more than last month</p>
                    </div>
                    <div className='space-y-3.5 p-3 rounded-lg bg-linear-to-r from-[#178a92]  to-[#6bd0d4]'>
                        <p className='text-xs '>Total Reviews</p>
                        <h1 className='text-2xl md:text-5xl font-bold'>906K</h1>
                        <p className='text-xs '>46% more than last month</p>
                    </div>
                    <div className='space-y-3.5 p-3 rounded-lg bg-linear-to-r  from-[#781c93] to-[#d18dd8] '>
                        <p className='text-xs '>Active Apps</p>
                        <h1 className='text-2xl md:text-5xl font-bold'>132+</h1>
                        <p className='text-xs '>31 more will Launch</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default State;