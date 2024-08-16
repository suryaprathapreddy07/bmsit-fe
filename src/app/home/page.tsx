'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar  />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipMiC_0JwKzrienIsZ9JvfVeeyYLbeZoLlbjO_ZI=s1360-w1360-h1020')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className='flex flex-col gap-8'>
            <h1 className="text-white text-5xl text-center font-medium">BE THE ODD ONE TO BE THE NO.1</h1>
            <h1 className="text-white text-2xl font-normal text-center">We Believe In Collaboration Over Competition</h1>
            <div className='flex gap-4 justify-center '>
                <Link className='px-4 py-2 border rounded-full text-white' href='/club-reasons'>Why Join Us?</Link>
                <Link className='px-4 py-2 border rounded-full text-white'  href='/about-us'>About Us</Link>
            </div>
            </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default Home;
