import { useState } from "react";

export default function Example2({ userId }) {
  const [comment, setComment] = useState("");
  return (
    <div className="">
      <h2>Profile id : {userId}</h2>

      <div className="">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <p style={{ backgroundColor: "lightcyan" }}>{comment}</p>
      </div>
    </div>
  );
}
