package main

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// 参考自 https://www.jianshu.com/p/b7b8c3293eff
// 递归调用
func dfs(root *TreeNode, k1 int, k2 int, res []int) {
	if root == nil {
		return
	}
	if root.Val > k1 {
		dfs(root.Left, k1, k2, res)
	}
	if root.Val < k2 {
		dfs(root.Right, k1, k2, res)
	}
	if root.Val >= k1 && root.Val <= k2 {
		res = append(res, root.Val)
	}
}

/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
func searchRange(root *TreeNode, k1 int, k2 int) []int {
	var result []int
	// write your code here
	dfs(root, k1, k2, result)
	return result
}

// TODO  记得重写
func main() {
	var root *TreeNode = nil
	searchRange(root, 1, 4)
}
