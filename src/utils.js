/**
 * The function converts RGB values to a hexadecimal color code.
 * @param c - The parameter `c` represents a single color component, such as the red, green, or blue
 * value of a color.
 * @returns The function `rgbToHex` is returning a string that represents the hexadecimal value of the
 * given RGB values.
 */
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
