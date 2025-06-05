#include<iostream>
using namespace std;

int maxSubArraySum(int arr[],int size){
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

int main()
{ 
    int arr[]={3,-4,5,4,-1,7,-8};
    int size = 7;
    cout<<maxSubArraySum(arr,size);
    return 0;
}
