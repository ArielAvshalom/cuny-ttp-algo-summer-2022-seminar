# Problem Statement #

# Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

# You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

# Write a function to return the maximum number of fruits in both baskets.

def fruits_into_baskets(fruits):


def main():
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))
  print("Maximum number of fruits: " + str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])))


main()




















# Solution
# -----
#   window_start = 0
#   max_length = 0
#   fruit_frequency = {}

#   # try to extend the range [window_start, window_end]
#   for window_end in range(len(fruits)):
#     right_fruit = fruits[window_end]
#     if right_fruit not in fruit_frequency:
#       fruit_frequency[right_fruit] = 0
#     fruit_frequency[right_fruit] += 1

#     # shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
#     while len(fruit_frequency) > 2:
#       left_fruit = fruits[window_start]
#       fruit_frequency[left_fruit] -= 1
#       if fruit_frequency[left_fruit] == 0:
#         del fruit_frequency[left_fruit]
#       window_start += 1  # shrink the window
#     max_length = max(max_length, window_end-window_start + 1)
#   return max_length
