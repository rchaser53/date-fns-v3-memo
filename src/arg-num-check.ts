// BREAKING: Functions now don’t check the number of passed arguments, delegating this task to type checkers. The functions are now slimmer because of this.
// 引数チェックはtsの機能に依存するようになった
import format from "date-fns/format";
const anyFormat = format as any;
try {
    anyFormat(1);
} catch (err:any) {
    console.log(`format throws the validation error: ${err.message}`)
}
