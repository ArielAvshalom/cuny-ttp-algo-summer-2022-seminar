// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  if(arr.length < 3){
		return [];
	}
  triplets = [];
  arr.sort(function(a, b) {
    return a - b;
  });

  let i = 0;
  for(; i < arr.length ; i++){
    let k = arr[i];
    if(i > 0 && k == arr[i - 1]){
	  	continue;
	  }
	  let left = i + 1;
	  let right = arr.length - 1;
	  while(left < right){
		  if(k + arr[left] + arr[right] < 0){
		  	left++;	
		  }
		  else if(k + arr[left] + arr[right] > 0){
		  	right--;
		  }
		  else{
		  	triplets.push([k, arr[left], arr[right]]);
		  	left++;
		  	while(left < right && (arr[left] === arr[left - 1])){
		  		left++;
		  	}
		  }
	  }
  }
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

