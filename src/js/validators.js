/* eslint-disable */
export function isValid(value) {
  // алгоритм Луна
  value = value.replace(/\D/g, "");

  let nCheck = 0;
  let bEven = false;

  for (let n = value.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(value.charAt(n), 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }
  // console.log(nCheck)
  return nCheck % 10 === 0;
}
