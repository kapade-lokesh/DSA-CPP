 //container with most water 
 const array = [1,8,6,2,5,4,8,3,7];
 //bruteForce approch
 const maxWater = (arr) =>{ //O(n^2)
     let max_water= 0;
     let width=0;
     let height =0;
     for(let i=0;i<arr.length;i++){
         let current_water= 0;
         for(let j=i+1;j<arr.length;j++){
             width = j-i;
             height = Math.min(arr[i],arr[j]);
             current_water= width*height;
             max_water = Math.max(max_water,current_water);
         }
     }
     return max_water;
 }
 
 console.log(maxWater(array));

 
 //optimal two pointers approch
 const opmaxWater = (arr) =>{ // O(n)
      let lp=0,rp=arr.length-1,width=0,height=0,max_water=0,current;
     while(rp>lp){
         width = rp-lp;
         height = Math.min(arr[rp],arr[lp]);
         current= width*height;
         max_water = Math.max(max_water,current)
         arr[lp] < arr [rp] ? lp++ : rp--;
     }
     return max_water;
 
 }
 console.log(maxWater(array));