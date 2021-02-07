package main

import "fmt"

/**
 * @param n: An integer
 * @return: return a  integer as description.
 */
func nthUglyNumber(n int) int {

	i := 1
	count := 1

	if n == 1 {
		return n
	}
	for {
		i++
		if i%2 == 0 || i%3 == 0 || i%5 == 0 {
			count++
		} else {
			continue
		}
		fmt.Printf("i: %d, count: %d \n", i, count)
		if count == n {
			break
		}

	}

	return i
}

func main() {

	res1 := nthUglyNumber(55)
	fmt.Printf("res1: %d \n", res1)

	res2 := nthUglyNumber(1)
	fmt.Printf("res2: %d \n", res2)

	//fmt.Print("hello world")
}
