import { useState } from "react";
import "./App.css";
import ChatRoom from "./components/Chatroom";

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((s) => !s)}>
        {isShow ? "Hide" : "Show"}
      </button>
      {isShow && <ChatRoom></ChatRoom>}
    </>
  );
}

export default App;
