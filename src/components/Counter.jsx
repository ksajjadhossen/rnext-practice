import { useRef } from "react";

export default function Counter() {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert("The value is " + ref.current);
  }

  return <button onClick={handleClick}>Click me!</button>;
}
