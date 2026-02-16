#include<iostream>
#include<climits>
using namespace std;

//  brute force

/*int maxSubArraySum(int arr[],int size){
    int maxsum=0;
   for(int st=0; st<size;st++){
       int sum=0;
      for(int end=st;end<size;end++){
         sum+=arr[end];
         maxsum=max(sum,maxsum);
      } 
   }
   
   return maxsum;
}
*/

 

//kadans algorithm 
int maxSubArraySum(int arr[],int size){
      int current =0;
      int maxsum =  INT_MIN;
      for(int i=0;i<size;i++){
         current+=arr[i];
         maxsum = max(current,maxsum);
         if(current<0){
            current =0;
         }
      }
      return maxsum;
}
int main()
{ 
    int arr[]={2,3,-4,6,3,5,7,4};
    int size = 8;
    cout<<maxSubArraySum(arr,size);
    return 0;
}
