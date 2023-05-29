import { useState } from "react";
import BasicForm from "./component/BasicForm";
import AdvancedForm from "./component/AdvanceForm";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="text-center py-20 px-4 bg-[#1a202c] h-screen">
      <div className="flex justify-center items-center mb-8 ">
        <h3
          className="cursor-pointer text-[#718096] m-4 hover:text-white font-bold text-3xl"
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#FFFFFF" : "" }}
        >
          Basic
        </h3>
        <h3
          className="cursor-pointer text-[#718096] m-4 hover:text-white font-bold text-3xl"
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#FFFFFF" : "" }}
        >
          Advanced
        </h3>
      </div>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
