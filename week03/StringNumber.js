const stringToNumber = (str, radix) => {
  if (radix > 2 && radix < 36) {
    let number = 0;
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
      if (str[i].charCodeAt() > '9'.charCodeAt()) {
        number = number * radix + str[i].charCodeAt() - 'a'.charCodeAt() + 10;
      } else {
        number = number * radix + str[i].charCodeAt() - '0'.charCodeAt()
      }
    }
    return number;
  }
};

// console.log(stringToNumber('1a2', 16));

const numberToString = (num, radix) => {
  // 将10进制的num转成radix进制的字符串
  let str = '';
  if(radix > 2 && radix < 10) {
    let number = num;
    while (number % radix > 0) {
      str = (number % radix).toString() + str;
      number = parseInt(number / radix);
    }
  } else if (radix >= 10 && radix < 36) {
    str = num.toString();
  } 
  return str;
};

console.log(numberToString(111, 8));