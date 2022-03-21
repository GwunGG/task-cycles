/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let a = start;
    let b = end;
    let sum = 0;
    for (let i = a; i < b + 1; i++) {
        if (i % 2 !== 1) {
            sum += i;
        }
    }
    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let sum = 0;
    while (a > 0.1) {
        a /= 2;
        sum += 1;
    }
    return sum;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let text = message;
    let textArray = text.split('');
    let length = 0;
    do {
        length += 3;
        textArray[length - 1] = '_';
    } while (length <= textArray.length - 3);
    text = textArray.join('');
    return text;
}
