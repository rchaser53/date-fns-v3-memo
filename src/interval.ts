// BREAKING: Functions that accept Interval arguments now do not throw an error if the start is before the end and handle it as a negative interval. If one of the properties in an Invalid Date, these functions also do not throw and handle them as invalid intervals.
// intervalの引数がstartとendが逆になっても良くなった
import { areIntervalsOverlapping } from 'date-fns/areIntervalsOverlapping';
const start1 = new Date('2024/04/01');
const end1 = new Date('2024/04/20');
const start2 = new Date('2024/04/10');
const end2 = new Date('2024/04/30');
try {
    const isOverlap = areIntervalsOverlapping(
        { start: start1, end: end1 },
        { start: end2, end: start2 }    // { start: start2, end: end2 } と同値
    )
    console.log({ isOverlap }); // true
} catch (err: any) {
    console.log(`areIntervalsOverlapping throws the error: ${err.message}`) // 呼ばれない
}

// 片方が不正の場合はfalse
try {
    const isOverlap = areIntervalsOverlapping(
        { start: start1, end: end1 },
        { start: end2, end: undefined as any }    // ここがstartの方が遅いくて不正
    )
    console.log({ isOverlap }); // false
} catch (err: any) {
    console.log(`areIntervalsOverlapping throws the error: ${err.message}`)
}