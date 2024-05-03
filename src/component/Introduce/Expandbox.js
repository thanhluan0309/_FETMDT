import { useState } from "react";
const ExpandBox = ({ initialContent, hoverContent }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`expand-box ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={{ overflow: "hidden" }}>
        {isHovered ? hoverContent : initialContent}
      </p>
    </div>
  );
};

export default ExpandBox;
