/**
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
const digitCounts = function (k, n) {
    let  resCount = 0
    const kStr = k.toString()

    for (let i = 0; i <= n; i++) {

        const iStr = i.toString()
        const iStrArr = iStr.split("")

        console.log("iStrArr", iStrArr)

        for (let j = 0; j < iStrArr.length; j++) {
            const  ele = iStrArr[j]
            if (ele === kStr) {
                resCount++
            }
        }

    }

    return resCount
}



const count = digitCounts(1, 12)

console.log("count: ", count)
