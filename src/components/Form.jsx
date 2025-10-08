import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <>
      <MyInput type="text" placeholder="Enter name" ref={inputRef}></MyInput>
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
