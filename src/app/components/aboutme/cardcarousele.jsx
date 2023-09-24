"use client";
import React, { useState, useEffect, useRef } from "react";
import "./cardcarousele.css";

export default function CardCarousele({ cards }) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselRef = useRef(null);

  useEffect(() => {
    let slideInterval;
    const watchTime = 5000;

    const slideCards = () => {
      slideInterval = setInterval(() => {
        if (!isPaused) {
          setCurrentCardIndex((prevIndex) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
          );
        }
      }, watchTime);
    };

    slideCards();

    return () => clearInterval(slideInterval);
  }, [cards, isPaused]);

  useEffect(() => {
    setIsAnimating(true);
    const animationTimeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, [currentCardIndex]);

  const handleMouseOver = () => setIsPaused(true);
  const handleMouseOut = () => setIsPaused(false);

  const handleDotClick = (index) => setCurrentCardIndex(index);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
      } else if (deltaX < -50) {
        setCurrentCardIndex((prevIndex) =>
          prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={`CardCarousel ${isAnimating ? "animating" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div className={`Card`}>
        <div className={`CardImage ${isAnimating ? "showCard" : ""}`}>
          <img src={cards[currentCardIndex].img} alt="Card" />
        </div>
        <h3 className={`CardTitle ${isAnimating ? "showCard" : ""}`}>
          {cards[currentCardIndex].title}
        </h3>
        <div className={`CardDesc ${isAnimating ? "showCard" : ""}`}>
          {cards[currentCardIndex].describe}
        </div>
      </div>
      <div className="Dots">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`Dot ${index === currentCardIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
