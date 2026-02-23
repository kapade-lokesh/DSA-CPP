// Binary Power Calculator Function 

const powerFunc = (base,power) => {
    let ans=1;

    if(power<0){
      base = 1/base;
      power = -power;
    }

    while(power>0){
      
      if(power%2==1){
          ans=ans*base;
      }
      base = base*base;
      power=Math.floor(power/2);
      
    }
  return ans
}
const result = powerFunc(3,1)
console.log(result);