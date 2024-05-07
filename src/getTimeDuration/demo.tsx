import React,{ useState } from "react";
import {  DatePicker } from "antd";
import getDuration from "./index";
import dayjs from "dayjs"

const Demo = () => {
  const [time,setTime] = useState<any>(dayjs().valueOf())
  return (
    <div>
       <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        onChange={(value) => setTime(value)}
    />
      {getDuration(time)}
    </div>
  );
};

export default Demo;
