import { add, subtract } from "./testing";
import { isNumber } from "lodash";

const sum = add(3, 4);
if (isNumber(sum) >= 7) console.log("True!");

export { sum };
