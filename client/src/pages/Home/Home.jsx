import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex flex-col h-screen justify-center items-center gap-3 text-center'>
            <h1 className="text-2xl font-bold">Home page comming soon!</h1>
            <Link to='/signup' className='bg-[#EA4B8A] px-5 py-2 font-medium rounded-md text-white'>
                Signup
            </Link>
        </div>
    );
};

export default Home;