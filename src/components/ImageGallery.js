import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            <img src={selectedImage} alt="Product" style={{ width: '300px' }} />
            <div>
                {images.map((img, index) => (
                    <img key={index} src={img} alt="Thumbnail" style={{ width: '50px' }} onClick={() => setSelectedImage(img)} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
