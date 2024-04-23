import { addHours } from "date-fns";
import { UTCDate } from "@date-fns/utc";
const date = new Date(2022, 2, 13);
console.log(addHours(date, 2).toString());  // 日本標準時

const utcDate = new UTCDate(2022, 2, 13);   
console.log(addHours(utcDate, 2).toString()); // (Coordinated Universal Time)
