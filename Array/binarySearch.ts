 const inputarray:number[]=[1,2,3,4,5,6,7,8,9];

 class binarySearch{
    arr:number[];
    mid:number;
    start:number;
    end:number;
    constructor(arr:number[]){
      this.arr=arr;
      this.mid=0;
      this.start=0;
      this.end=arr.length-1;
    }

    search(target:number):number{
         
         
           while(this.start<=this.end){
                this.mid = Math.floor((this.start+this.end)/2);
                if(target>this.arr[this.mid]){
                    this.start=this.mid+1;
                }else if(target<this.arr[this.mid]){
                    this.end=this.mid-1;
                }
                
               if(target==this.arr[this.mid]){
                return this.mid;
               }
           }

           return -1;
    }
 }

 const findTarget = new binarySearch(inputarray)
 
 const index:number = findTarget.search(3);

 console.log(index);