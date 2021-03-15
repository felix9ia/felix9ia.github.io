class Solution:
    """
    @param str: An array of char
    @param offset: An integer
    @return: nothing
    """
    def rotateString(self, str, offset):
        # write your code here
        if not offset: return
        if not str: return

        offset = offset % len(str)
        for i in range(offset)
            c = str.pop()
            str.insert(0, c)

        return str
