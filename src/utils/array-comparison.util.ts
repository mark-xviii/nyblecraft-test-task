export function arrayIncludesOtherArray(arr: any[], target: any[]): boolean {
  if (arr && target) {
    return target.every((v) => arr.includes(v));
  }
  console.log(arr, target);
  return true;
}
