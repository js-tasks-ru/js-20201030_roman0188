/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const result = [];
  const Obj = new Set(arr);

  for (let item of Obj) {
    result.push(item);

  }
  return result;
}
