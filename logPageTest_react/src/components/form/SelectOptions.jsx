import React from "react";

const positions = ["", "DevOps", "Développeur web", "Lead Developper"];
export const positionArr = positions.map((position, index) => {
  return (
    <div key={index} value={position}>
      {position}
    </div>
  );
});
