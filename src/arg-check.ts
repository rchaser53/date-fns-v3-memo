import { format } from 'date-fns/format';
// BREAKING The arguments are not explicitly converted to the target types. Instead, they are passed as is, delegating this task to type checkers.
// 引数を強引に変換していたようだが、tsの機能に依存するようになった。ex. formatの第二引数
// https://github.com/date-fns/date-fns/commit/1fcc0458fce7ae44b0a2dcad120fb029879a93b5
try {
  format(new Date(), undefined as any)
} catch (err:any) {
  console.log(`format throws the validation error: ${err.message}`)
}