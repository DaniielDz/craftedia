import { useState } from "react";
import styles from "../styles/ImageGallery.module.css";
import trashIcon from "../assets/IC_trash.svg";

const ImageGallery = () => {
  const [images, setImages] = useState([
    "/mnt/data/imagen.png",
    "/mnt/data/imagen.png",
    "/mnt/data/imagen.png",
    "/mnt/data/imagen.png",
    "/mnt/data/imagen.png",
    "/mnt/data/imagen.png",
  ]);

  const handleRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("imageIndex");
    if (index) {
      handleRemove(Number(index));
    } else {
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const newImages = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.galleryContainer}
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <div className={styles.header}>
        <h2>Gallery</h2>
        <div
          className={styles.trashBin}
          onDrop={handleDrop}
          onDragOver={allowDrop}
        >
          <img src={trashIcon} alt="Trash" className={styles.trashIcon} />
        </div>
      </div>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageItem}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
          >
            <img src={image} alt={`img-${index}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
