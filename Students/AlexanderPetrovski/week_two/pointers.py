# Problem 1
def twoSum(A, t):
    l, r, = 0, len(A)-1
    while l < r:
        if A[l] + A[r] > t:
            r -= 1
        elif A[l] + A[r] < t:
            l += 1
        else:
            return [l, r] 
    return -1

# Problem 2 
def threeSum(A):   
    A.sort()
    res = []
    for i in range(len(A)):
        v = A[i] 
        if i > 0 and v == A[i-1]: 
            continue
        l, r = i+1, len(A)-1
        while l < r:
            s = A[l] + A[r] + v
            if s > 0:
                r -= 1
            elif s < 0:
                l += 1
            else:
                res.append([v, A[l], A[r]])
                l += 1
                while l < r and A[l] == A[l-1]:
                    l += 1
    return res

# Problem 3
def threeSumClosest(A, t):
        A, res, min_diff, i = sorted(A), float("inf"), float("inf"), 0
        while i < len(A) - 2:
            if i == 0 or A[i] != A[i - 1]:  
                l, r = i + 1, len(A) - 1
                while l < r:
                    diff = A[i] + A[l] + A[r] - t
                    if abs(diff) < min_diff:
                        min_diff = abs(diff)
                        res = A[i] + A[l] + A[r]
                    if diff < 0:
                        l += 1
                    elif diff > 0:
                            r -= 1
                    else:
                        return t
            i += 1
        return res

# Problem 4
def threeSumSmaller(A):
    c = 0; A.sort()
    if len(A) < 3: return c
    for i in range(2, len(A)):
        l, r, v = 0, i-1, A[i]
        while l < r:
            s = A[l] + A[r]
            if s > v:
                c += r-l
                r -= 1
            else:
                l += 1
    return c

# Problem 5
def remDups(A):
    slow, fast = 0, 1
    while fast < len(A):
        if A[fast] != A[slow]:
            slow += 1
            A[slow] = A[fast]
        fast += 1
    return slow+1

# Problem 6
def subAsLessK(A, k):
    if k <= 1: return 0
    prod = 1
    res = l = 0
    for r, v in enumerate(A):
        prod *= v
        while prod >= k:
            prod /= A[l]
            l += 1
        res += r - l + 1
    return res