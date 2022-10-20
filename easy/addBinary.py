class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if int(b) == 0:
            return str(int(a))
        la = len(a);
        lb = len(b);
        l = max(la,lb);
        if la > lb :
            b = '0'*(la-lb)+b
        elif lb > la:
            a = '0'*(lb-la)+a
        x = ''
        s = '';
        for i in range(l):
            x += '0' if a[i]==b[i] else '1'
            s += '1' if a[i]=='1' and b[i]=='1' else '0'
        s = s + '0'
        return self.addBinary(x,s)


# Runtime: 104 ms, faster than 5.17% of Python3 online submissions for Add Binary.
# Memory Usage: 13.8 MB, less than 72.46% of Python3 online submissions for Add Binary.
# "My grandma runs faster than you code!!!" --- Steven He
