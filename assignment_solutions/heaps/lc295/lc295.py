# Problem Statement #

# Design a class to calculate the median of a number stream. The class should have the following two methods:

#   1. insertNum(int num): stores the number in the class
#   2. findMedian(): returns the median of all numbers inserted in the class

# If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

class MedianOfAStream:
  def insert_num(self, num):
   # TODO: Write your code here

   return -1

  def find_median(self):
    # TODO: Write your code here
    return 0.0


def main():
  medianOfAStream = MedianOfAStream()
  medianOfAStream.insert_num(3)
  medianOfAStream.insert_num(1)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(5)
  print("The median is: " + str(medianOfAStream.find_median()))
  medianOfAStream.insert_num(4)
  print("The median is: " + str(medianOfAStream.find_median()))


#main()




#example of non documented solution
class stream_median:
  def __init__(self):
    self.stream = []
    self.length = len(self.stream)

  def insert_num(self, number):
    self.stream.append(number)
    self.length+=1

  def find_median(self):
    if self.length == 0:
      print(self.length)
      print(len(self.stream))
      return None
    if self.length == 1:
      return self.stream[0]
    
    if self.length % 2 == 0:
      print('even')
      return (self.stream[self.length//2] + self.stream[self.length//2-1])/2
    if self.length % 2 == 1:
      print('odd')
      return self.stream[self.length//2]

    return None


new_stream = stream_median()

def insert_and_check(stream, values):
  for value in values:
    stream.insert_num(value)
    print(stream.stream)

    print(stream.find_median())
    
insert_and_check(new_stream, [1,2,3,4,5,6])




#example with simple line notations
class stream_median_documented:
  def __init__(self):
    self.stream = [] #initialize a list you can access
    self.length = len(self.stream) #create this length and continously update it in order to avoid calculating a length ever time find median is called

  def insert_num(self, number):
    self.stream.append(number) #append value to list
    self.length+=1 #add one to length

  def find_median(self):
    if self.length == 0: #error checking this would break the even rule
      return None
    if self.length == 1: #you don't really need this. The odd solution will work either way. But good check before you verify that fact. 
      return self.stream[0]
    
    if self.length % 2 == 0: #if even
      print('even')
      return (self.stream[self.length//2] + self.stream[self.length//2-1])/2 #return half of the middle two
    if self.length % 2 == 1: #if odd
      print('odd')
      return self.stream[self.length//2] #return the middle value. Note this works because of zero indexing is Python.

    return None

    def find_mean(self):
      return sum(self.stream)/self.length #mean is sum/length.

    def find_range(self):
      return max(self.stream)-min(self.stream) #if you have a heap, this might be even better. 
      
    def find_mode(self):
      value_counter = dict()

      for value in self.stream: #add values to a dict with a counter for the number of times they occur. The time cost is O(n) and space constant is a worst case O(n).
        value_counter[value] = value_counter.get(value, 0) + 1
      max_elem_count = 0
      for key, value in value_counter: #this should be put in a separate function or written pythonically.
        if value > max_elem_count:
          max_elem_count = value
          max_key = key
      
      return max_key #note that if many keys are the mode, it'll return the first key in the (unordered) dict it finds.
        

