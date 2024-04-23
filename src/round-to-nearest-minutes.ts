// BREAKING: roundToNearestMinutes now returns Invalid Date instead of throwing an error when nearestTo option is less than 1 or more than 30.
// nearestToオプションで不正な値が入った際の仕様が例外を投げるからInvalid Dateに変更された
import { roundToNearestMinutes } from 'date-fns/roundToNearestMinutes'
try {
    const ret = roundToNearestMinutes(new Date('2024/04/02 20:30:12'), { nearestTo: -1 as any});
    console.log(ret) // Invalid Date
} catch (err:any) {
    console.log(`err message is: ${err.message}`) // 呼ばれない
}
