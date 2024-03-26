import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

function App() {
  return (
    <div className="h-screen flex md:items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full px-4 max-h-[620px]">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
