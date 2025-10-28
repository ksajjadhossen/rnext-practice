import { useEffect } from "react";
import { useRef } from "react";

export default function Animation() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    node.style.opacity = 1; //trigger the animation

    return () => (node.style.opacity = 0);
  });
  return <h1 ref={ref}>Here is an animation....</h1>;
}
