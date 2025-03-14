import { useRef, useState } from 'react';
import styles from '../styles/Carousel.module.css';
import { Link } from 'react-router';

const Carousel = ({ posts, postType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerView = 4;

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth;
    
    container.scrollTo({
      left: direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
    
    const newIndex = direction === 'left' 
      ? currentIndex - itemsPerView 
      : currentIndex + itemsPerView;
      
    setCurrentIndex(Math.max(0, Math.min(newIndex, posts.length - itemsPerView)));
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carousel} 
          ref={carouselRef}
          onScroll={(e) => {
            const index = Math.round(e.target.scrollLeft / (e.target.offsetWidth));
            setCurrentIndex(index);
          }}
        >
          {posts.map((post) => (
              <Link to={`/${postType}/${post.path}/${post.id}`} 
                key={post.id}
                className={styles.imageContainer}
                style={{ backgroundImage: `url(${post.images[0]})` }}
              />
            )
          )}
        </div>
      </div>
      
      <button 
        className={`${styles.arrow} ${styles.leftArrow}`}
        onClick={() => handleScroll('left')}
        disabled={currentIndex === 0}
      >
        &#10094;
      </button>
      
      <button 
        className={`${styles.arrow} ${styles.rightArrow}`}
        onClick={() => handleScroll('right')}
        disabled={currentIndex >= posts.length - itemsPerView}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;