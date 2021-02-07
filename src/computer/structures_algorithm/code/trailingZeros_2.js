
const trailingZeros = function (n) {
    let m = 1;
    while (n > 1) {
        m = m * n
        console.log("next n:", n)
        n--
    }

    console.log("m is:", m)
    mArray = m.toString().split("").reverse()

    count = 0
    mArray.forEach(i => {
        console.log(i)
        if (i === "0") {
            count ++
        }
    })
    return count
}

const res = trailingZeros(105)

console.log("res is:", res)