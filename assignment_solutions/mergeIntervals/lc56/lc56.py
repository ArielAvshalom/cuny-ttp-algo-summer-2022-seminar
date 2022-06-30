# Problem Statement #

# Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

from __future__ import print_function


class Interval:
  def __init__(self, start, end):
    self.start = start
    self.end = end

  def print_interval(self):
    print("[" + str(self.start) + ", " + str(self.end) + "]", end='')


def merge(intervals):
  merged = []
  # TODO: Write your code here
  return merged


def main():
  print("Merged intervals: ", end='')
  for i in merge([Interval(1, 4), Interval(2, 5), Interval(7, 9)]):
    i.print_interval()
  print()

  print("Merged intervals: ", end='')
  for i in merge([Interval(6, 7), Interval(2, 4), Interval(5, 9)]):
    i.print_interval()
  print()

  print("Merged intervals: ", end='')
  for i in merge([Interval(1, 4), Interval(2, 6), Interval(3, 5)]):
    i.print_interval()
  print()

main()




# Solution
# -----
# def merge(intervals):
#   if len(intervals) < 2:
#     return intervals

#   # sort the intervals on the start time
#   intervals.sort(key=lambda x: x.start)

#   mergedIntervals = []
#   start = intervals[0].start
#   end = intervals[0].end
#   for i in range(1, len(intervals)):
#     interval = intervals[i]
#     if interval.start <= end:  # overlapping intervals, adjust the 'end'
#       end = max(interval.end, end)
#     else:  # non-overlapping interval, add the previous internval and reset
#       mergedIntervals.append(Interval(start, end))
#       start = interval.start
#       end = interval.end

#   # add the last interval
#   mergedIntervals.append(Interval(start, end))
#   return mergedIntervals

# -----

# Time complexity #
# The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

# Space complexity #
# The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
