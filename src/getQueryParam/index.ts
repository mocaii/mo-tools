
const getQueryParam = (key: string,search = window.location.search ) => {
  let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
  let result = search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
};

export default getQueryParam