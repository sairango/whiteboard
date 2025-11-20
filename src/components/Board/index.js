import { useEffect, useRef } from "react";
import rough from "roughjs";

function Board() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const roughCanvas = rough.canvas(canvas);
    roughCanvas.line(60, 60, 400, 60, { strokeWidth: 5 });

    roughCanvas.rectangle(100, 100, 200, 200);
    roughCanvas.rectangle(140, 10, 100, 100, { fill: "red" });

    
  }, []);

  const handleBoardMouseDown = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX , clientY);
    

  }
    
    return (
      <div>
        <canvas ref={canvasRef} style={{ border: "1px solid grey" }} onMouseDown={handleBoardMouseDown}></canvas>
      </div>
    );
}

export default Board;
