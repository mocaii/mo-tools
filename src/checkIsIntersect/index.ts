/**
 * 比较两个区间
 * @param a 区间1
 * @param b 区间2
 * @returns 返回是否相交的结果
 */
export const checkItemFn = (a: number[], b: number[]) => {
  const start = [Math.min(...a), Math.min(...b)]; //两个区间的最小值
  const end = [Math.max(...a), Math.max(...b)]; //两个区间的最大值
  return Math.max(...start) <= Math.min(...end);
};

/**
 * 比较多个区间
 * @param list  多个区间组成的数组
 * @returns 返回是否相交的结果
 */
type checIsIntersectType = (list: any[]) => boolean;
const checkIsIntersect: checIsIntersectType = (list = [[], []]) => {
  const [checkItem, ...resItem] = list;
  let isIntersect = false;
  for (const item of resItem) {
    if (checkItemFn(checkItem, item)) {
      isIntersect = true;
      break;
    }
  }
  if (resItem.length > 1 && !isIntersect) {
    isIntersect = checkIsIntersect(resItem);
  }
  return isIntersect;
};

export default checkIsIntersect;
