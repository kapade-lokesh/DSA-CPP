
// majority Elelemt in arry 
// a elemet whoes frequency is n/2 in given array
// brute force approch time complexity O(n^2)
const bruteForceMajority = (arr=[])=>{
    let freq=0;
   for(let num of arr){
        for (let ele of arr){
            if(ele==num){
                freq++;
           }
            
        }
         if(freq > arr.length/2){
              return num;
      }
    }
}

//optimal Approch time complexity O(nlogn)
const optimalForceMajority=(arr=[])=>{
  arr.sort()
     let freq=1;
       console.log(arr)
  for(let i=0; i<arr.length;i++){
      console.log("array elememts: ",arr[i])
      if(arr[i]==arr[i+1]){
          freq ++;
      }else{
         freq=1;
      }
      if(freq > arr.length/2){
         return arr[i];
      } 
  }
  return -1;
}

//mooreVoting algorithm time complexity O(n)
const mooreFunction = (arr)=>{
  let freq=0, ans=0;
  for(let i=0;i<arr.length;i++){
      if(freq==0){
          ans=arr[i];
      }
      if(arr[i]==ans){
          freq++;
      }else{
          freq--;
      }
  }
  return ans
}
arr = [1,2,2,2,3,1,2,2,2,1]
//const majorityElement = bruteForceMajority(arr);
//const majorityElement = optimalForceMajority(arr);
const majorityElement = mooreFunction(arr);
console.log(majorityElement)