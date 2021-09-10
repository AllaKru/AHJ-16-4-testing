export function isValidInn(value) {
  // Just stub (your logic must be here)
  // алгоритм Луна...(проверка остатка)
    value = value.replace(/\D/g, '');

    var nCheck = 0;
    var bEven = false;

    for (var n = value.length - 1; n >= 0; n--) {
        var nDigit = parseInt(value.charAt(n), 10);

        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }
console.log(nCheck)
    return (nCheck % 10) == 0;



  // return value === '7715964180' ? true : false;
}