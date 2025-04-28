import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);  // State for handling image error
  const images = [
    'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg', // Replace with your image paths
    'https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.jpg?s=1024x1024&w=is&k=20&c=faoiFapQkhucuLuor9gBnblJ4KJpqvEgariqalvzRas=' ];

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setError(false);  // Reset error on image change
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setError(false);  // Reset error on image change
  };

  // Automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Error handler for images (if image not found)
  const handleImageError = () => {
    setError(true);
  };

  return (
    <div className="relative  h-20  ">
      <div className=" rounded-lg ">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full    "
          onError={handleImageError} // Handle image error
        />
      </div>

      {/* Show fallback count if image is not found */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50">
          {currentIndex + 1}
        </div>
      )}

      
    </div>
  );
};

export default Carousel;
