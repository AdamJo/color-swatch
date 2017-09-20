export function colorSwatch(color) {
  return {
    type: "COLOR_SWATCH",
    color
  };
}

export function sideBarColorSort(color) {
  return {
    type: "SIDE_BAR_COLOR_SORT",
    colorSort: color
  }
}