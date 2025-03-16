import React from 'react';
import Header from './Header';


export default function Blog() {

  return (
    <>
    <Header/>
    <div className='absolute z-20 h-dvh w-dvw backdrop-blur-xl text-center anime'>
      <h1>STAY TUNED MORE YET TO COME SOON ....</h1>
    </div>
    <div className="mx-auto my-auto text-white container mt-10">
      <h1 className='text-center text-4xl text-amber-500 m-5'> Our Blog </h1>
      <h1 className='text-center text-3xl text-amber-200 m-5'> A place where time stops ,intellect starts ,patience rises ,interest solidifies,
        eyes widens ,heart thumps ,adrenaline rushes
         , or <strong> simply you get alive</strong>  </h1>
   <div className='text-centre text-3xl container bg-amber-200/100 text-gray-800'>
    <h1>Novel : 1 </h1>
    <h2>The Theives of Eldonia</h2>
    <p>This is a sample text</p>
   </div>
    </div>
</>  );
}