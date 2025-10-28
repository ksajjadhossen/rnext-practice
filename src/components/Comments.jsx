import { useEffect, useState, useRef } from "react";
import { FetchComments } from "./utils/FetchComment";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const ignore = useRef(false); // 🔹 আগের let ignore = false এর জায়গায় useRef

  useEffect(() => {
    ignore.current = false; // reset each time postId changes

    async function startFetching() {
      const json = await FetchComments(postId);
      if (!ignore.current) {
        console.log("calling");
        setComments(json);
      }
    }

    startFetching();

    return () => {
      ignore.current = true; // 🔹 cleanup
    };
  }, [postId]);

  return (
    <>
      <ul className="flex flex-col">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </>
  );
}
