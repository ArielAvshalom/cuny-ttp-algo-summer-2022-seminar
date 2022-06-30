# Problem Statement #

# Given a string, find the length of the longest substring in it with no more than K distinct characters.

# You can assume that K is less than or equal to the length of the given string.

def longest_substring_with_k_distinct(str1, k):
# TODO: Write code here


def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))


main()


















# Solution
# -----
#   window_start = 0
#   max_length = 0
#   char_frequency = {}

#   # in the following loop we'll try to extend the range [window_start, window_end]
#   for window_end in range(len(str1)):
#     right_char = str1[window_end]
#     if right_char not in char_frequency:
#       char_frequency[right_char] = 0
#     char_frequency[right_char] += 1

#     # shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
#     while len(char_frequency) > k:
#       left_char = str1[window_start]
#       char_frequency[left_char] -= 1
#       if char_frequency[left_char] == 0:
#         del char_frequency[left_char]
#       window_start += 1  # shrink the window
#     # remember the maximum length so far
#     max_length = max(max_length, window_end-window_start + 1)
#   return max_length
