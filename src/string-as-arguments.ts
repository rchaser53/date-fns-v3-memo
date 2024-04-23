import {subDays} from 'date-fns/subDays';
// 以下のようなフォーマットのstringを再びハンドリングするようにした(v1と同じようなハンドリングにした)
const day = subDays('2016-01-01' as any, 1);
console.log(day)    // 2015-12-31T00:00:00.000Z