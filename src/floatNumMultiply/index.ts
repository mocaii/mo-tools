
const floatNumMultiply = (a = 0, b = 0) => {
  let m = 0;
  const c = a.toString();
  const d = b.toString();

  try {
    m += c.split(".")[1].length;
  } catch (e) {}

  try {
    m += d.split(".")[1].length;
  } catch (e) {}

  return (
    (Number(c.replace(".", "")) * Number(d.replace(".", ""))) / Math.pow(10, m)
  );
};

export default floatNumMultiply