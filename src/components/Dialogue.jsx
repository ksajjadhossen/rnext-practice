import { useEffect } from "react";
import { useRef } from "react";

export default function Dialogue() {
  const dialogueRef = useRef(null);

  useEffect(() => {
    const dialog = dialogueRef.current;
    dialog.showModal();

    // cleanup is mandatory...
    return () => dialog.close();
  }, []);
  return (
    <>
      <dialog ref={dialogueRef} className=" border-4 border-red-600">
        {" "}
        This is an open dialogue window....
      </dialog>
    </>
  );
}
