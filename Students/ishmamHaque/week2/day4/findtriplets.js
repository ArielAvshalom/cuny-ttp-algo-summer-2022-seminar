// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

function search_triplets(arr) {
  triplets = [];
  // TODO: Write your code here Two pointers takes up too much memory
 // for(let i=0;i<arr.length-2;i++){
 //  j=i+1;
 //  k=arr.length-1;
 //  while(j<k){
 //   if(arr[i]+arr[j]+arr[k]==0){
  //   let newarr=[];
 //    newarr.push(arr[i]);
 //    newarr.push(arr[j]);
 //    newarr.push(arr[k]);
 //    triplets.push(newarr);
 //   }
 //   else if(arr[i]+arr[j]+arr[k]<0){
 //    j++;
 //   }
 //   else if(arr[i]+arr[j]+arr[k]>0){
 //    k--;
 //   }
 //  }
 // }
 for(let i=0;i<arr.length-2;i++){
  for(let j=i+1;j<arr.length-1;j++){
   for(let k=j+1;k<arr.length;k++){
       if(arr[i]+arr[j]+arr[k]==0){
         let newarr=[];
         newarr.push(arr[i]);
         newarr.push(arr[j]);
         newarr.push(arr[k]);
         triplets.push(newarr);
       }
   }
  }     
 }
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
