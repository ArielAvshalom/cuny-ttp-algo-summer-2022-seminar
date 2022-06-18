# 1. 
def subsAvgs(A, k):
    B = []
    tot, start = 0.0, 0
    for i in range(len(A)):
        tot += A[i]
        if i >= k-1:
            B.append(tot/k)
            tot -= A[start]
            start += 1
    return B
            
# 2. 
def minSubArrLen(A, k):
    l = tot = 0
    res = float('inf')
    for r in range(len(A)):
        tot += A[r]
        while tot >= k:
            res = min(res, r-l+1)
            tot -= A[l]
            l += 1
    return 0 if res == float('inf') else res

# 3.
def KDistinctLongestSubS(S, k):
    D = {}
    start = longest = 0
    for end in range(len(S)):
        newChar = S[end]
        if newChar in D.keys():
            D[newChar] += 1
        else:
            D[newChar] = 1
        while len(D) > k:
            startChar = S[start]
            start += 1
            D[startChar] -= 1
            if D[startChar] == 0:
                D.pop(startChar)
        if end - start + 1 > longest:
            longest = end - start + 1
    return longest
  
# 4. 
def maxSumSubOfSizeK(A, k):
    if (len(A) < k): return -1
    res = 0
    for i in range(k):
        res += A[i]
    curr_sum = res
    for i in range(k, len(A)):
        curr_sum += A[i] - A[i-k]
        res = max(res, curr_sum)
    return res
  
# 5. 
def totalFruit(fruits):
    window_start = 0
    max_so_far = 0
    fruit_basket = {}
    for window_end in range(len(fruits)):
        right_fruit = fruits[window_end]
        if right_fruit not in fruit_basket:
            fruit_basket[right_fruit] = 1
        else:
            fruit_basket[right_fruit] += 1

        while len(fruit_basket) > 2:
            left_fruit = fruits[window_start]
            fruit_basket[left_fruit] -= 1
            if fruit_basket[left_fruit] == 0:
                del fruit_basket[left_fruit]
            window_start += 1
        max_so_far = max(max_so_far, window_end - window_start+1)
    return max_so_far