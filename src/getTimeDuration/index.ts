import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)
export const getDuration = (date:any) => {
  if(!date) return ''
  const nowDate = dayjs().valueOf();
  const resultTime = nowDate - dayjs(date).valueOf();
  const countDays = Math.abs(dayjs.duration(resultTime).asDays());
  const countHour = Math.abs(dayjs.duration(resultTime).asHours());
  const countMins = Math.abs(dayjs.duration(resultTime).asMinutes());
  const seconds = dayjs.duration(resultTime).asSeconds();

  let suffix = seconds < 0 ? '后' : '前';
  if (countDays > 7) {
    return dayjs(date).format("YYYY-MM-DD");
  } else if (countDays >= 1 && countDays <= 7) {
    return `${Math.floor(countDays)}天${suffix}`;
  } else if (countDays < 1 && countHour >= 1) {
    return `${Math.floor(countHour)}小时${suffix}`;
  } else if (countHour < 1 && countMins >= 1) {
    return `${Math.floor(countMins)}分钟${suffix}`;
  } else{
    return `${Math.floor( Math.abs(seconds))}秒${suffix}`;
  }
};

export default getDuration