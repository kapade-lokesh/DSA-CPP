#include<iostream>
using namespace std;



void printSubArray(int arr[],int size){
    for(int st=0;st<size;st++){
        for(int end=st;end<size;end++){
            for(int k=st;k<=end;k++){
                cout<<arr[k];
            }
          cout<<" ";
         }
       cout<<endl;
    }
}

int main() {
    int arr[] = {1,2,3,4,5};
    int size = 5;

   printSubArray(arr,size);
   
    return 0;
}
