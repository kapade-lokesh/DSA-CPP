//Best time to buy and sell stock 
const stat=[7,3,9,6,2,10,30,1,16]

const maxProfit=(arr)=>{
    let bestbuy = arr[0];
    let mp=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]>bestbuy){
          mp = Math.max(mp,arr[i]-bestbuy); 
      }
      bestbuy= Math.min(bestbuy,arr[i])
    }
    return mp;
}

console.log(maxProfit(stat))