
// Online C++ Compiler - Build, Compile and Run your C++ programs online in your favorite browser

#include<iostream>
using namespace std;
//linear search algorithm

int linear_search(int arr[],int size,int target){
    for(int i=0;i<size;i++){
        if(arr[i]==target){
            return 1;
        }
    }
    return -1;
}

int main()
{
   int arr[]={4,2,6,7,8,10,9};
    int size = 7;
    int target = 1;
   cout<< linear_search(arr,size,target);
    return 0;
}
