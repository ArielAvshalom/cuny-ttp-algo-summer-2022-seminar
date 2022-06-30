# Problem Statement #

# Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

import math


def smallest_subarray_with_given_sum(s, arr):


def main():
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])))
  print("Smallest subarray length: " + str(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])))


main()
















  # Solution
  # -----
  # window_sum = 0
  # min_length = math.inf
  # window_start = 0

  # for window_end in range(0, len(arr)):
  #   window_sum += arr[window_end]  # add the next element
  #   # shrink the window as small as possible until the 'window_sum' is smaller than 's'
  #   while window_sum >= s:
  #     min_length = min(min_length, window_end - window_start + 1)
  #     window_sum -= arr[window_start]
  #     window_start += 1
  # if min_length == math.inf:
  #   return 0
  # return min_length
