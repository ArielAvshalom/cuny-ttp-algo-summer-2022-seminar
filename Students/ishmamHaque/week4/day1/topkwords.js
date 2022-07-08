/* 
Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. 
Sort the words with the same frequency by their lexicographical order.

Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 
Constraints:
1 <= words.length <= 500
1 <= words[i] <= 10
words[i] consists of lowercase English letters.
k is in the range [1, The number of unique words[i]]
 
Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?
*/

//code
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
//First I put my functional solution, then the answer//
 var topKFrequent = function(words, k) {
    //todo your code here
   let arrlength=words.length;
   let answerarray=[];
   counter=0;
   const wordmap = new Map();
   for(i=0;i<arrlength;i++){
     if(wordmap.has(words[i])){
       wordmap.set(words[i],wordmap.get(words[i])+1);
     }
     else{
       wordmap.set(words[i],1);
     }
   }
   wordmap.forEach((key, value) => {
   console.log(key, value);
   });
   const wordmap2 = new Map([...wordmap.entries()].sort((a, b) => b[1] - a[1]));
   wordmap2.forEach((key, value) => {
   console.log(key, value);
   });
  wordmap2.forEach((key, value) => {
  answerarray.push(value);
  });
  let finalarray=[];
  while(counter<k){
    finalarray.push(answerarray[counter]);
    counter++;
  }
  return finalarray;
};

let words = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2

console.log(topKFrequent(words,k));



/* solution
var topKFrequent = function(words, k) {
    const mappings = {}
    for (let i = 0; i < words.length; i++) {
        mappings[words[i]] = mappings[words[i]] + 1 || 1
    }
    const sorted = Object.keys(mappings).sort((a, b) => { 
        if (mappings[b] === mappings[a]) { 
            return a > b ? 1 : -1 
        }
        return mappings[b] - mappings[a]
    })
    return sorted.slice(0, k)
};
*/

