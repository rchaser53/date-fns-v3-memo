// 今回取り上げていない皆様

// BREAKING: date-fns is now a dual-package with the support of both ESM and CommonJS. The files exports are now explicitly in the package.json. The ESM files now have .mjs extension.
// BREAKING: Now all functions use Math.trunc rounding method where rounding is required. The behavior is configurable on a per-function basis.
// BREAKING: IE is no longer supported.
// BREAKING: Undocumented onlyNumeric option was removed from nn and sv locales. If you relied on it, please contact me.
// BREAKING: Flow is not supported anymore. If you relied on it, please contact me.
// BREAKING: The package now has a flat structure, meaning functions are now named node_modules/date-fns/add.mjs, locales are node_modules/date-fns/locale/enUS.mjs, etc.
// BREAKING: Now all file content’s exported via named exports instead of export default, which will require change direct imports i.e. const addDays = require(‘date-fns/addDays’) to const { addDays } = require(‘date-fns/addDays’).
// BREAKING: constants now is not exported via the index, so to import one use import { daysInYear } from "date-fns/constants";. It improves compatibility with setups that modularize imports like Next.js.
// A new interval function that validates interval, emulating the v2 interval functions behavior.
// differenceInX functions now accept options and allow setting up roundingMethod that configures how the result is rounded. Math.trunc is the default method.
