const calculatePower = (base,power)=>{
    let ans=1;
    while(power>0){
      
        if(power%2==1){
         ans = ans *number;
        }
        number = number*number;
         power = Math.floor(power / 2);
    }
    return ans
}

let result = calculatePower(3,10);
console.log(result);