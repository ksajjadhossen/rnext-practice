import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    console.log("Hello world");
  });
  return <h1>My component</h1>;
}
