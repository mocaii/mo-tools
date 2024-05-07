
const isNullValue = (input: any) => {
  return (
    input === undefined ||
    input === null ||
    input === "" ||
    String(input).trim() === ""
  );
};

export default isNullValue