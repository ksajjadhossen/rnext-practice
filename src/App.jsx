import { useState } from "react";
import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <>
      <div className="">
        <div className="">
          <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
            {" "}
            switch to profile number {userId === 1 ? 2 : 1}
          </button>
        </div>
        <Example2 key={userId} userId={userId}></Example2>
      </div>
    </>
  );
}

export default App;
