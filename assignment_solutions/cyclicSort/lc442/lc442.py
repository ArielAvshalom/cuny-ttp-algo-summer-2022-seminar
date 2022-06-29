# Problem Statement #

# We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

def find_all_duplicates(nums):
  duplicateNumbers = []
  # TODO: Write your code here
  return duplicateNumbers

def main():
  print(find_all_duplicates([3, 4, 4, 5, 5]))
  print(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))


main()



# Solution
# -----
# def find_all_duplicates(nums):
#   i = 0
#   while i < len(nums):
#     j = nums[i] - 1
#     if nums[i] != nums[j]:
#       nums[i], nums[j] = nums[j], nums[i]  # swap
#     else:
#       i += 1

#   duplicateNumbers = []
#   for i in range(len(nums)):
#     if nums[i] != i + 1:
#       duplicateNumbers.append(nums[i])

#   return duplicateNumbers

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# Ignoring the space required for storing the duplicates, the algorithm runs in constant space O(1).
