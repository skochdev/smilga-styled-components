export const setBorder = ({ width = 1, type = 'solid', color }) => {
  return `${width}px ${type} ${color}`;
};
