import { add, subtract } from "./testing";
import { isNumber } from "lodash";

const sum = add(3, 4);
const sub = subtract(10, 2);
if (isNumber(sum) >= 7) console.log("True!");
// 동적으로 변경해도 --watch 설정으로 자동 빌드 처리가 됨
console.log(sub);

export { sum };
