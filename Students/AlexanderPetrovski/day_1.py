# INTERVIEWER ROLE

# Unsorted array composed of 1 to n numeric values w/ duplicates (2 of the same value at most) is given. 
# Find duplicates w/t using extra space.


A = [5, 4, 7, 2, 3, 5, 3]
# A = [3, 2, 3, 4, 5, 5, 7] SORTED

def findAllDups(A):
    i = 0
    B = []
    while i < len(A):
        j = A[i] - 1
        if A[i] != A[j]:
            A[i], A[j] = A[j], A[i]
        else:
            i += 1
    for i in range(len(A)):
        if A[i] != i+1:
            B.append(A[i])
    return B

print(findAllDups(A))