import { useState } from "react";
import "../../css/productdetailscss/productdetails.css";

const ProductImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnails = [
    "/home/hp/Kletos App2/public/images/1.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  const updateGalleryImage = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % thumbnails.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + thumbnails.length) % thumbnails.length);
  };

  return (
    <div className="sneaker-image">
      <img
        src={`/images/image-product-${currentIndex + 1}.jpg`}
        alt="sneaker"
        id="sneaker"
      />
      <button id="next-image" onClick={handleNext}>
        <img src="/images/icon-next.svg" alt="next" id="next" />
      </button>
      <button id="previous-image" onClick={handlePrevious}>
        <img src="/images/icon-previous.svg" alt="previous" id="prev" />
      </button>
      <span className="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt="sneaker"
            className="thumbnail"
            onClick={() => updateGalleryImage(index)}
          />
        ))}
      </span>
    </div>
  );
};

export default ProductImages;
