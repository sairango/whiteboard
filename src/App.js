import BoardProvider from "./store/BoardProvider";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <BoardProvider>
      <Board />
      <Toolbar />
    </BoardProvider>
  );
}

export default App;
