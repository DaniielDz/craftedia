import { useState } from "react";
import styles from "../styles/ImageGallery.module.css";
import trashIcon from "../assets/IC_trash.svg";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  // Eliminar una imagen por su índice
  const handleRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Manejar el inicio del arrastre
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("imageIndex", index);
  };

  // Manejar el soltar una imagen para reordenar
  const handleDropReorder = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData("imageIndex");

    if (sourceIndex) {
      // Reordenar imágenes
      const newImages = [...images];
      const [movedImage] = newImages.splice(sourceIndex, 1); // Extraer la imagen movida
      newImages.splice(targetIndex, 0, movedImage); // Insertar la imagen en la nueva posición
      setImages(newImages);
    }
  };

  // Manejar el soltar archivos para agregar nuevas imágenes
  const handleDropAddImages = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  // Manejar el soltar una imagen en la papelera para eliminarla
  const handleDropOnTrash = (e) => {
    e.preventDefault();
    const index = e.dataTransfer.getData("imageIndex");
    if (index) {
      handleRemove(Number(index));
    }
  };

  // Permitir soltar imágenes
  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.galleryContainer}
      onDrop={handleDropAddImages} // Agregar imágenes al soltar archivos
      onDragOver={allowDrop}
    >
      <div className={styles.header}>
        <h2>Gallery</h2>
        <div
          className={styles.trashBin}
          onDrop={handleDropOnTrash} // Eliminar imágenes al soltar en la papelera
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
            onDragStart={(e) => handleDragStart(e, index)} // Iniciar arrastre
            onDrop={(e) => handleDropReorder(e, index)} // Reordenar al soltar
            onDragOver={allowDrop}
          >
            <img src={image} alt={`img-${index}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;