import { typeUtils } from "../utils/typeUtil.ts";
import { deepEqualsArrays } from "./deepEqualsArrays.ts";
import deepEqualsObjects from "./deepEqualsObjects.ts";

export const deepEquals = (a: unknown, b: unknown) => {
  // 참조가 같으면 true
  if (a === b) {
    return true;
  }
  if (typeUtils.isPrimitive(a) || typeUtils.isPrimitive(b)) {
    return a === b;
  }

  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray && bIsArray) {
    return deepEqualsArrays(a, b);
  }

  if (typeUtils.isObject(a) && typeUtils.isObject(b)) {
    return deepEqualsObjects(a, b);
  }

  return true;
};
