import COLOR_MAP from "../constants/colorMap";

/**
 * @desc Get background color classNames for Article-Card based on it's index
 * @param {Number} index index of the Article-Card
 * @example  (1) => 'bg-warning'
 */

const getColor = (index) => `bg-${COLOR_MAP[index % 3]}`;

export default getColor;
