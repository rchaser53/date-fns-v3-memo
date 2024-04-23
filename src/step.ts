import { eachMonthOfInterval } from 'date-fns/eachMonthOfInterval'
const start1 = new Date('2024/04/01');
const end1 = new Date('2024/12/20');

// eachMonthOfInterval, eachQuarterOfInterval, eachWeekOfInterval, and eachYearOfInterval now accept the step option like most of the eachXOfInterval functions.
console.log(eachMonthOfInterval({
  start: start1,
  end: end1
},
{
  step: 2 // v3.0.0から追加されたオプション
}
))
// [
//   2024-03-31T15:00:00.000Z,
//   2024-05-31T15:00:00.000Z,
//   2024-07-31T15:00:00.000Z,
//   2024-09-30T15:00:00.000Z,
//   2024-11-30T15:00:00.000Z
// ]