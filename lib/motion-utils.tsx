// This file provides a simplified version of motion functionality
// without requiring the framer-motion library

"use client";

import { useRef, useState, useEffect } from "react";

export interface MotionProps {
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

// Simple implementation of motion div component
export function motion({ as: Component = "div" }: { as?: any } = {}) {
  return function MotionComponent({
    initial,
    animate,
    transition,
    className,
    children,
    style = {},
    ...props
  }: MotionProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [currentStyles, setCurrentStyles] = useState({});
    
    useEffect(() => {
      setIsMounted(true);
      if (initial) {
        setCurrentStyles(initial);
      }
    }, [initial]);
    
    useEffect(() => {
      if (isMounted && animate) {
        const delay = (transition?.delay || 0) * 1000;
        const duration = (transition?.duration || 0.3) * 1000;
        
        const timer = setTimeout(() => {
          setCurrentStyles(animate);
        }, delay);
        
        return () => clearTimeout(timer);
      }
    }, [isMounted, animate, transition]);
    
    if (!isMounted) {
      return null;
    }
    
    const combinedStyles = {
      ...style,
      ...currentStyles,
      transition: `all ${(transition?.duration || 0.3)}s ${transition?.ease || 'ease'} ${transition?.delay || 0}s`,
    };
    
    return (
      <Component className={className} style={combinedStyles} {...props}>
        {children}
      </Component>
    );
  };
}

// Simplified implementation of useInView hook
export function useInView(
  ref: React.RefObject<HTMLElement>,
  options: { once?: boolean; amount?: number } = {}
) {
  const [isInView, setIsInView] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  
  useEffect(() => {
    setHasInitialized(true);
    
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        threshold: options.amount || 0,
      }
    );
    
    observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
    };
  }, [ref, options.once, options.amount]);
  
  // Prevent hydration mismatch by returning false until client-side initialization
  return hasInitialized ? isInView : false;
}

// Create default motion components
motion.div = motion({ as: "div" });
motion.section = motion({ as: "section" });
motion.p = motion({ as: "p" });
motion.h1 = motion({ as: "h1" });
motion.h2 = motion({ as: "h2" });
motion.h3 = motion({ as: "h3" });
motion.h4 = motion({ as: "h4" });
motion.span = motion({ as: "span" });
motion.a = motion({ as: "a" });