package main

import (
	"fmt"
	"strconv"
)

/**
 * @param n: An integer
 * @return: A list of strings.
 */
func fizzBuzz(n int) []string {
	// write your code here
	var results = make([]string, n)

	for i := 1; i <= n; i++ {
		var ele string
		if i%3 == 0 && i%5 == 0 {
			ele = "fizz buzz"
		} else if i%3 == 0 {
			ele = "fizz"
		} else if i%5 == 0 {
			ele = "buzz"
		} else {
			ele = strconv.Itoa(i)
		}
		results = append(results, ele)
	}
	return results
}

func main() {
	var reuslt []string = fizzBuzz(15)
	fmt.Printf("reuslt is : %v", reuslt)
}
