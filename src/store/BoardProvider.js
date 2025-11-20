import { useReducer } from "react";
import { TOOL_ITEMS } from "../constants";
import boardContext from "./board-context";

const boardReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TOOL":
      return {
        ...state,
        activeToolItem: action.payload.tool,
      };
    default:
      return state;
  }
};

const initialBoardState = {
  activeToolItem: TOOL_ITEMS.LINE,
  elements: [],
};

const BoardProvider = ({ children }) => {
  const [boardState, dispatchBoardAction] = useReducer(
    boardReducer,
    initialBoardState
  );

  const handleToolItemClick = (tool) => {
    dispatchBoardAction({
      type: "CHANGE_TOOL",
      payload: { tool },
    });
  };

  const boardContextValue = {
    activeToolItem: boardState.activeToolItem,
    handleToolItemClick,
  };

  return (
    <boardContext.Provider value={boardContextValue}>
      {children}
    </boardContext.Provider>
  );
};

export default BoardProvider;
