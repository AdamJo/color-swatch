import { createStore } from "redux";
import { h } from "preact";
import colors from '../assets/color-names';

const pageMax = 12;

function calcPages(pageMax, sort=undefined) {
  let totalColors = 0;
  if (sort) {
    return Array.from(Array(Math.ceil(colors[sort].length / pageMax)).keys());
  } else {
    for (const color in colors) {
      totalColors += colors[color].length;
    }
    return Array.from(Array(Math.ceil(totalColors / pageMax)).keys());
  }
}

const allColors = [];

Object.keys(colors).map((color) => {
  allColors.push(...colors[color]);
});

let ACTIONS = {
  SIDE_BAR_COLOR_SORT: (state = {}, { colorSort }) => {
    let totalPages = calcPages(pageMax, colorSort);
    return {
      ...state,
      colorSort,
      totalPages,
    };
  },
};

const INITIAL = {
  allColors,
  colors,
  colorOptions: Object.keys(colors),
  colorSort: undefined,
  pageMax,
  pageNumber: 1,
  totalPages: calcPages(pageMax)
};

export default createStore(
  (state, action) =>
    action && ACTIONS[action.type]
      ? ACTIONS[action.type](state, action)
      : state,
  INITIAL
);