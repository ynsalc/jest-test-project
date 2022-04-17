import React from "react";

const Index = ({ videos = [] }) => {
  if (videos.length <= 0) {
    return <h2>Sorry, no videos!</h2>;
  }
  return (
    <div>
      {videos.map((video, index) => (
        <h3 key={index}>{video}</h3>
      ))}
    </div>
  );
};

export default Index;
