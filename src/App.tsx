import { useState } from 'react';
import image1 from './assets/wallpaperflare.com_wallpaper.jpg';
import image2 from './assets/wallpaperflare.com_wallpaper (1).jpg';
import image3 from './assets/wallpaperflare.com_wallpaper (2).jpg';
import image4 from './assets/wallpaperflare.com_wallpaper3.jpg';

import './App.css';

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  const previousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const nextImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <main className="container">
      <div className="content">
        <button onClick={previousImage} className="button">
          click to see the previous image
        </button>
        <img src={images[imageIndex]} alt="" />
        <button onClick={nextImage} className="button">
          click to see the next image
        </button>
      </div>
    </main>
  );
}
