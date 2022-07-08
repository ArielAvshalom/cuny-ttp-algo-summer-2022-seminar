# Problem Statement #

# Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
  res = 0
  # TODO: Write your code here
  return res

def main():
  print(find_subarrays([2, 5, 3, 10], 30))
  print(find_subarrays([8, 2, 6, 5], 50))


main()












# Solution
# -----
# def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
#         l = 0
#         res = 0
#         product = 1

#         for r in range(len(nums)):
#             product *= nums[r]

#             if product >= k:
#                 while product >= k and l <= r:
#                     product /= nums[l]
#                     l += 1

#             res += r - l + 1

#         return res

# -----

