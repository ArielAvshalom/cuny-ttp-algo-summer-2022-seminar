# Problem Statement #

# We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.

def find_missing_numbers(nums):
  missingNumbers = []
  # TODO: Write your code here
  return missingNumbers

def main():
  print(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]))
  print(find_missing_numbers([2, 4, 1, 2]))
  print(find_missing_numbers([2, 3, 2, 1]))


main()




# Solution
# -----
# def find_missing_numbers(nums):
#   i = 0
#   while i < len(nums):
#     j = nums[i] - 1
#     if nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1

#   missingNumbers = []

#   for i in range(len(nums)):
#     if nums[i] != i + 1:
#       missingNumbers.append(i + 1)

#   return missingNumbers

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# Ignoring the space required for the output array, the algorithm runs in constant space O(1).
