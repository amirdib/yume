import { useState, useEffect, useRef } from "react";

export const useStickyEffect = (threshold) => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleIntersect = ([entry]) => {
      setIsSticky(!entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
    });

    if (elementRef.current && elementRef.current.nextElementSibling) {
      observer.observe(elementRef.current.nextElementSibling);
    }

    return () => {
      if (elementRef.current && elementRef.current.nextElementSibling) {
        observer.unobserve(elementRef.current.nextElementSibling);
      }
    };
  }, [threshold]);

  return { isSticky, elementRef };
};
