// v3

// BREAKING: date-fns is now a dual-package with the support of both ESM and CommonJS. The files exports are now explicitly in the package.json. The ESM files now have .mjs extension.
// BREAKING: IE is no longer supported.
// BREAKING: Now all functions use Math.trunc rounding method where rounding is required. The behavior is configurable on a per-function basis.
// BREAKING: Undocumented onlyNumeric option was removed from nn and sv locales. If you relied on it, please contact me.
// BREAKING: Flow is not supported anymore. If you relied on it, please contact me.

// BREAKING: The package now has a flat structure, meaning functions are now named node_modules/date-fns/add.mjs, locales are node_modules/date-fns/locale/enUS.mjs, etc.
// pathがflatになった
import a from 'date-fns/addDays'

// BREAKING: Now all file content’s exported via named exports instead of export default, which will require change direct imports i.e. const addDays = require(‘date-fns/addDays’) to const { addDays } = require(‘date-fns/addDays’).
// named importできるものが増えた模様
import { subDays } from 'date-fns/subDays';
console.log({ subDays }) // Function

// BREAKING: constants now is not exported via the index, so to import one use import { daysInYear } from "date-fns/constants";. It improves compatibility with setups that modularize imports like Next.js.
// 何が変化したのかよく分からない。v2でもv3でも普通にimportできるように見える
import { daysInYear } from "date-fns/constants";
console.log(daysInYear)

// BREAKING: Functions now don’t check the number of passed arguments, delegating this task to type checkers. The functions are now slimmer because of this.
// 引数チェックはtsの機能に依存するようになった
import { format } from "date-fns/format";
const anyFormat = format as any;
try {
    anyFormat(1);
} catch (err:any) {
    console.log(`format throws the semantic error: ${err.message}`)
}

// BREAKING The arguments are not explicitly converted to the target types. Instead, they are passed as is, delegating this task to type checkers.
// 引数を強引に変換していたようだが、tsの機能に依存するようになった。ex. formatの第二引数
// https://github.com/date-fns/date-fns/commit/1fcc0458fce7ae44b0a2dcad120fb029879a93b5
try {
    format(new Date(), undefined as any)
} catch (err:any) {
    console.log(`format throws the semantic error: ${err.message}`)
}

// BREAKING: Functions that accept Interval arguments now do not throw an error if the start is before the end and handle it as a negative interval. If one of the properties in an Invalid Date, these functions also do not throw and handle them as invalid intervals.
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

// BREAKING: intervalToDuration now skips 0 values in the resulting duration, resulting in more compact objects with only relevant properties.
// 0のプロパティが出力されなくなった
import { intervalToDuration } from 'date-fns/intervalToDuration';
console.log(intervalToDuration({ start:start1, end:start1 }))   // {}

// BREAKING: roundToNearestMinutes now returns Invalid Date instead of throwing an error when nearestTo option is less than 1 or more than 30.
// nearestToオプションで不正な値が入った際の仕様が例外を投げるからInvalid Dateに変更された
import { roundToNearestMinutes } from 'date-fns/roundToNearestMinutes'
try {
    const ret = roundToNearestMinutes(new Date('2024/04/02 20:30:12'), { nearestTo: -1 as any});
    console.log(ret) // Invalid Date
} catch (err:any) {
    console.log(`err message is: ${err.message}`) // 呼ばれない
}
