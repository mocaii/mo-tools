
const floatNumPlus = (a = 0, b = 0) => {
  let c, d;
  try {
    c = a.toString().split(".")[1].length;
  } catch (e) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (e) {
    d = 0;
  }
  const m = Math.pow(10, Math.max(c, d));
  return (a * m + b * m) / m;
};

export default floatNumPlus