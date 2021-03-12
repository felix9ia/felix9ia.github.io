package main

import "fmt"

/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
func mergeSortedArray(A []int, B []int) []int {
	var size int
	var result []int

	var aSize = len(A)
	var bSize = len(B)
	if aSize > bSize {
		size = aSize
	} else {
		size = bSize
	}

	// write your code here

	for i := 0; i < size; i++ {
		// TODO  分别取 a, b 数组的值填充进来,一遍填充一遍比较,
	}

	// TODO
	return result
}

func main() {
	var a = []int{9, 4, 1, 4}
	var b = []int{5, 2, 7, 5}

	res := mergeSortedArray(a, b)
	fmt.Printf("result is: %v", res)
}
