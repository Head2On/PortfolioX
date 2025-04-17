// src/components/TypeWriter.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypeWriter({ 
  words = ['Backend Developer','UI Designer','CreativeCoder'],
  speed = 150,
  delay = 1000,
  deleteSpeed = 50,
  pauseBetweenWords = 1500
}: {
  words?: string[];
  speed?: number;
  delay?: number;
  deleteSpeed?: number;
  pauseBetweenWords?: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        if (displayedText.length < currentWord.length) {
          setTimeout(() => {
            setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          }, speed);
        } else {
          // Switch to deleting after pause
          setTimeout(() => setIsDeleting(true), pauseBetweenWords);
        }
      } else {
        // Deleting logic
        if (displayedText.length > 0) {
          setTimeout(() => {
            setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          }, deleteSpeed);
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayedText, currentWordIndex, isDeleting, words, speed, deleteSpeed, pauseBetweenWords,delay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      {displayedText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="ml-1 inline-block w-1 h-8 bg-current align-middle"
      />
    </span>
  );
}