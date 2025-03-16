import React from 'react';
import Header from './Header';
import Content from './Content';
const Home = () => {  

  return (
    <>
      <Header/>
      <div className="star-field">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
        <div className="content">
          <h1 className='brand-name'>SHAMBHUTAH</h1>
          <h2 className='tagline'>BEHOLDING YOUR CHIMERAS</h2>
        </div>
        <style>{`
          .star-field {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            animation: fall linear infinite;
            top: -10px;
          }
          .star:nth-child(even) {
            width: 3px;
            height: 3px;
            box-shadow: 0 0 3px #fff;
          }
          ${[...Array(50)].map((_, i) => `
            .star:nth-child(${i + 1}) {
              left: ${Math.random() * 100}%;
              animation-duration: ${3 + Math.random() * 4}s;
              animation-delay: ${Math.random() * 2}s;
              opacity: ${0.5 + Math.random() * 0.5};
            }
          `).join('')}
          .content {
            position: relative;
            z-index: 1;
          }
          .brand-name {
          font-family: 'anime', sans-serif;
            font-size: 5rem;
            font-weight: bold;
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            letter-spacing: 0.5em;
            animation: glow 2s ease-in-out infinite alternate;
            width: 100dvw;
            text-align: center;
          }
          .tagline {
            width: 100dvw;
            color: white;
            font-size: 1.5rem;
            text-align: center;
          }
            @media screen and (max-width: 768px) {
              .brand-name {
                font-size: 2rem;
              }
              .tagline {
                font-size: 1rem;
              }
            }
              @media screen and (max-width: 480px) {
              .brand-name {
                font-size: 1.5rem;
              }
              .tagline {
                font-size: 0.8rem;
              }
            }
          @keyframes fall {
            0% {
              transform: translateY(-10px) rotate(45deg);
            }
              100%{
              transform:translateY(100vh) rotate(90deg);
              }
          }
          @keyframes glow {
            from { text-shadow: 0 0 10px red, 0 0 20px #fff, 0 0 30px #fff; }
            to { text-shadow: 0 0 20px blue, 0 0 30px #fff, 0 0 40px #fff; }
          }
        `}</style>
      </div>
      <Content/>
    </>
  );
}

export default Home;
