import { useState } from "react";

export const useHoverImages = () => {
  const [hoveredImages, setHoveredImages] = useState({});

  const handleImageChange = (id, value) => {
    setHoveredImages((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return { hoveredImages, handleImageChange };
};
