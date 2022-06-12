# for loop and while loop

# AA = [[1,4], [2,5], [7,9]] # false
# AA = [[2,4], [6,7], [8,12]] # true
# AA = [[2,3], [3,6], [4,5]] # false 


def apptCheck(AA):
    if len(AA) < 1: return
    count = -1
    AA.sort(key=lambda x: x[0])
    for i in range(len(AA)):
        prevEnd = AA[i - 1][1]
        currStart = AA[i][0]
        if prevEnd >= currStart:
            count += 1
    if count == 0: return True
    else: return False 


def apptCheck(AA):
    if len(AA) < 1: return 
    count = -1
    AA.sort(key=lambda x: x[0])
    i = 0
    while i < len(AA):
        prevEnd = AA[i - 1][1]
        currStart = AA[i][0]
        if prevEnd >= currStart:
            count += 1
        i += 1
    if count == 0: return True
    else: return False