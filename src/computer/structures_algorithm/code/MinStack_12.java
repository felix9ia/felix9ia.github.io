public class MinStack {

    private int[] stack;
    private int min

    public MinStack() {
        // do intialization if necessary
    }

    /*
     * @param number: An integer
     * @return: nothing
     */
    public void push(int number) {
        // write your code here
        // 从旧的复制一个新的,
        // 在最后元素添加 number
        // TODO 在 push 时进行比较并排序,并记录min
        if (this.min > number) {
            this.min = number
        }
    }

    /*
     * @return: An integer
     */
    public int pop() {
        // 从数组的尾部 pop
        // write your code here
        // 拿到尾部的,
        // 复制除了尾部的其他

    }

    /*
     * @return: An integer
     */
    public int min() {
        // 返回 this.min
        // write your code here
    }

    public static void main(String[] args) {

    }
}
