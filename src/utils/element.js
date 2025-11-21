import { TOOL_ITEMS } from "../constants";
import rough from "roughjs/bin/rough";

const gen = rough.generator();

export const createRoughElement = (id, x1, y1, x2, y2, { type }) => {
  const newElement = {
    id,
    x1,
    y1,
    x2,
    y2,
  };

  let options = {
    seed: id + 1,
  };

  switch (type) {
    case TOOL_ITEMS.LINE: {
      newElement.roughEle = gen.line(x1, y1, x2, y2, options);
      return newElement;
    }
    case TOOL_ITEMS.RECTANGLE: {
      newElement.roughEle = gen.rectangle(x1, y1, x2 - x1, y2 - y1, options);
      return newElement;
    }
    default: {
      throw new Error("Type Not Recognized");
    }
  }
};
