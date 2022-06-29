# Problem Statement #

# We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

def find_duplicate(nums):
  # TODO: Write your code here
  return -1

def main():
  print(find_duplicate([1, 4, 4, 3, 2]))
  print(find_duplicate([2, 1, 3, 3, 5, 4]))
  print(find_duplicate([2, 4, 1, 4, 4]))


main()


# Solution
# -----

# def find_duplicate(nums):
#   i = 0
#   while i < len(nums):
#     if nums[i] != i + 1:
#       j = nums[i] - 1
#       if nums[i] != nums[j]:
#         nums[i], nums[j] = nums[j], nums[i]  # swap
#       else:  # we have found the duplicate
#         return nums[i]
#     else:
#       i += 1

#   return -1

# -----

# Time complexity #
# The time complexity of the above algorithm is O(n).

# Space complexity #
# The algorithm runs in constant space O(1) but modifies the input array.
