// pair sum DSA problem 
// broute fource approch time complexity O(n^2)
const bruteforceTarget = (arr,target)=>{
  for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
          if(arr[i]+arr[j]==target){
              return {num1:arr[i],num2:arr[j]}
          }
      }
  }
}

// two pointer approch  time complexity O(n)
const optimalTarget = (arr,target)=>{
    let i=0; j=arr.length-1;
    while(i<j){
        if(target > arr[i]+arr[j])j--;
        if(target<arr[i]+arr[j])i++;
        if(target == arr[i]+arr[j]){ 
            console.log(arr[i]+arr[j])
         return{num1:arr[i],num2:arr[j]};
        }
    }
}
    
const arr = [3,2,5,7,9]
//const {num1,num2}=findTarget(arr,12);
const {num1,num2}=optimalTarget(arr,12);
console.log(num1,num2)