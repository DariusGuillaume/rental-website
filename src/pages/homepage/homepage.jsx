import './homepage.scss';
import SearchBar from '../../components/searchbar/searchbar';
import { useEffect, useState } from 'react';

function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/background.png', '/background2.png', '/background3.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>
            Find Real Estate & Your Dream Home
          </h1>
          <p>
            Search for properties, real estate agents, and more with Real Estate.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <SearchBar />
          </div>
          <div className='boxes'>
            <div className='box'>
              <h1>25+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>10000+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`backgroundImage ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;