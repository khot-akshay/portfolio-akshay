'use client';

import { Typography, TypographyProps } from '@mui/material';
import { useEffect, useState } from 'react';

interface TypeWriterProps extends TypographyProps {
  phrases: string[];
  typingSpeed?: number;
  backspaceSpeed?: number;
  backspaceDelay?: number;
  delay?: number;
  loop?: boolean;
}

const TypeWriter = ({
  phrases,
  typingSpeed = 80,
  backspaceSpeed = 40,
  backspaceDelay = 1000,
  delay = 0.5,
  loop = true,
  ...props
}: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        // Deleting text
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }
      } else {
        // Typing text
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          // Finished typing
          if (loop || currentPhraseIndex < phrases.length - 1) {
            timer = setTimeout(() => {
              setIsDeleting(true);
            }, backspaceDelay);
            return;
          }
        }
      }

      timer = setTimeout(
        type,
        isDeleting ? backspaceSpeed : typingSpeed
      );
    };

    // Initial delay before starting
    if (!isTyping && !isDeleting) {
      timer = setTimeout(() => {
        setIsTyping(true);
      }, delay * 1000);
    } else if (isTyping) {
      timer = setTimeout(type, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentPhraseIndex,
    isTyping,
    isDeleting,
    phrases,
    typingSpeed,
    backspaceSpeed,
    backspaceDelay,
    delay,
    loop,
  ]);

  return (
    <Typography {...props}>
      {currentText}
      <span 
        style={{ 
          borderRight: '2px solid currentColor',
          animation: 'blink 1s step-end infinite',
          marginLeft: '2px',
        }}
      >
      </span>
      <style jsx global>{`
        @keyframes blink {
          from, to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </Typography>
  );
};

export default TypeWriter; 