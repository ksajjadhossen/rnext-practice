import { useEffect } from "react";
import { useState } from "react";

export default function Example1() {
  const [firstName] = useState("Taylor");
  const [lastName] = useState("Swift");
  //   const [fullName, setFullName] = useState("");
  //   useEffect(() => {
  //     setFullName(firstName + " " + lastName);
  //   }, [firstName, lastName]);

  const fullName = firstName + " " + lastName;
  return (
    <>
      <p>{fullName}</p>
    </>
  );
}
