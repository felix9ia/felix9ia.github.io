/**
 * TODO 思路: 用取整和取余来实现
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
const digitCounts = function (k, n) {
    let  resCount = 0
    const nStrCount = n.toString().length

    while(n !== 0) {
        parseInt(n / (10 ^ parseInt(nStrCount, 10)), 10)
    }

    return resCount
}



let count = digitCounts(1, 12)

console.log("count: ", count)
