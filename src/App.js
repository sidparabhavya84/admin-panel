import { useState } from "react";
import Maincontent from "./Components/Maincontent/Maincontent";
import Sidebar from "./Components/Sidebar/Sidebar";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {

  const [show, setShow] = useState(false);

  const handle = useFullScreenHandle();
  const handleSidebar = () => {
    setShow(!show);
  }

  return (
    <>
      <FullScreen className="bg-white" handle={handle}>
        <div className="d-flex">
          <Sidebar show={show} />
          <Maincontent className="col" handleSidebar={handleSidebar} handle={handle} />
        </div>
      </FullScreen>
    </>
  );
}

export default App;
