import { useContext, useLayoutEffect, useRef } from "react";
import rough from "roughjs";
import boardContext from "../../store/board-context";
import { TOOL_ACTION_TYPES, TOOL_ITEMS } from "../../constants";
import toolboxContext from "../../store/toolbar-context";

function Board() {
  const canvasRef = useRef();
  const {
    elements,
    boardMouseDownHandler,
    boardMouseMoveHandler,
    boardMouseUpHandler,
    toolActionType,
  } = useContext(boardContext);

  const { toolboxState } = useContext(toolboxContext);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext("2d");
    context.save();

    const roughCanvas = rough.canvas(canvas);

    elements.forEach((element) => {
      switch (element.type) {
        case TOOL_ITEMS.ARROW:
        case TOOL_ITEMS.CIRCLE:
        case TOOL_ITEMS.RECTANGLE:
        case TOOL_ITEMS.LINE:
        case TOOL_ITEMS.ELLIPSE:
          roughCanvas.draw(element.roughEle);
          break;

        case TOOL_ITEMS.BRUSH:
          context.fillStyle = element.stroke;
          context.fill(element.path);
          context.restore();
          break;
        default:
          throw new Error("Type Not Recognized");
      }
    });

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [elements]);

  const handleMouseDown = (event) => {
    boardMouseDownHandler(event, toolboxState);
  };

  const handleMouseMove = (event) => {
    if (toolActionType === TOOL_ACTION_TYPES.DRAWING) {
      boardMouseMoveHandler(event);
    }
  };
  const handleMouseUp = () => {
    boardMouseUpHandler();
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "1px solid grey" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}></canvas>
    </div>
  );
}

export default Board;
