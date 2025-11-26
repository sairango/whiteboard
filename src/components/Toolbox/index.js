import { COLORS } from "../../constants";
import classes from "./index.module.css";
import { useContext } from "react";
import cx from "classnames";

import toolboxContext from "../../store/toolbar-context";
import boardContext from "../../store/board-context";

const Toolbox = () => {
  const { activeToolItem } = useContext(boardContext);
  const { toolboxState, changeStroke } = useContext(toolboxContext);

  const strokeColor = toolboxState[activeToolItem]?.stroke;
  return (
    <div className={classes.container}>
      <div className={classes.selectOptionContainer}>
        <div className={classes.toolBoxLabel}>STROKE</div>
        <div className={classes.colorsContainer}>
          {Object.keys(COLORS).map((k) => {
            return (
              <div
                className={cx(classes.colorBox, {
                  [classes.activeColorBox]: strokeColor === COLORS[k],
                })}
                style={{ backgroundColor: COLORS[k] }}
                onClick={() => changeStroke(activeToolItem, COLORS[k])}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
