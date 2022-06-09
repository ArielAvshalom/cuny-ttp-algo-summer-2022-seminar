# HW
# CyclicSort
# Values: 1 - n

A = [3, 1, 5, 4, 2]

def CyclicSort(A):
    i = 0
    while i < len(A):
        j = A[i]-1
        if A[i] != A[j]:
            A[i], A[j] = A[j], A[i]
        else:
            i += 1
    return A


# HW
# Find all duplicate values in O(n) time and no extra space
# Values: 1 - n 

A = [3, 4, 4, 5, 5]

def findDups(A):
    i = 0
    while i < len(A):
        j = A[i]-1
        if A[i] != A[j]:
            A[i], A[j] = A[j], A[i]
        else:
            i += 1
    B = []
    for i in range(len(A)):
        if A[i] != i+1:
            B.append(A[i])
    return B


# HW
# Find all missing values in O(n) time and no extra space
# Values: 1 - n 

A = [2, 3, 1, 8, 2, 3, 5, 1]

def findMissed(A):
    i = 0
    while i < len(A):
        j = A[i]-1
        if A[i] != A[j]:
            A[i], A[j] = A[j], A[i]
        else:
            i += 1
    B = []
    for i in range(len(A)):
        if A[i] != i+1:
            B.append(i+1) 
    return B
