import React from 'react';
import Header from './Header';

export default function Contact() {
<style >{`
.star-field{
  position:relative;
  height:100vh;
  width:100vw;
  background:transparent;
  }
.stars{
  position:absolute;
  height:2px;
  width:2px;
  text-shadow:0 0 1px #fff,0 0 2px #fff,0 0 3px #fff,0 0 4px #fff,0 0 7px #fff,0 0 8px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #fff,0 0 35px #fff;
  animation:fall linear infinite;
}
@keyframes fall{
0%{
  transform:translateY(-10px) rotate(45deg);
}
  100%{
  transform:translateY(100vh) rotate(90deg);
  }
} 


`}</style>

  return (
    <>
    <Header/>
    <div className='star-field'>
      {
        [...Array(100)].map((_,i)=>(
          <div key={i} className='stars'></div>
        ))
      }
    <div  className="page-container  min-h-screen p-8">
      <div  className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-400 mb-3">Contact Us</h1>
        <p className="text-lg text-amber-300">Get in touch with our team</p>
      </div>
<div className='container '>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="bg-amber-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-amber-600 mb-4">Contact Information</h2>
    
    <div className="space-y-4">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <a href="tel:+918057839525" className="text-amber-700 hover:text-amber-500">+91 8057839525</a>
      </div>

      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <a href="mailto:shambhutah.aum@gmail.com" className="text-amber-700 hover:text-amber-500">shambhuhtah.aum@gmail.com</a>
      </div>

      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
        <a href="https://wa.me/8057839525" className="text-amber-700 hover:text-amber-500">WhatsApp </a>
      </div>
    </div>
  </div>

  <div className="bg-amber-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-amber-600 mb-4">Social Media</h2>
    
    <div className="grid grid-cols-2 gap-4">
      <a href="https://facebook.com" className="flex items-center text-amber-700 hover:text-amber-500">
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
        Facebook
      </a>

      <a href="https://twitter.com" className="flex items-center text-amber-700 hover:text-amber-500">
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
        Twitter
      </a>

      <a href="https://instagram.com" className="flex items-center text-amber-700 hover:text-amber-500">
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"/>
        </svg>
        Instagram
      </a>

      <a href="https://linkedin.com" className="flex items-center text-amber-700 hover:text-amber-500">
        <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</div>

</div>
      
    </div>
    </div>
 </> );
}