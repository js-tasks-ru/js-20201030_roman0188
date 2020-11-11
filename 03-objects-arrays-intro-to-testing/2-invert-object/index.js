/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj) return;

  if (obj) {
    let keyArr = [];
    for(let key in obj){
      keyArr.push(key);
    }
    let ValueArr = [];
    for(let key in obj) {
      ValueArr.push(obj[key]);
    }
    let newUser = {};
    for (let i = 0; i < keyArr.length; i++) {
      newUser[ValueArr[i]] = keyArr[i];
    }
    return newUser;
  }
}
