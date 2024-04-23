// BREAKING: intervalToDuration now skips 0 values in the resulting duration, resulting in more compact objects with only relevant properties.
// 0のプロパティが出力されなくなった
import { intervalToDuration } from 'date-fns/intervalToDuration';
const start1 = new Date('2024/04/01');

console.log(intervalToDuration({ start:start1, end:start1 }))   // {}
