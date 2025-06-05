#include<iostream>
using namespace std;

void reverse(int arr[], int size){
    int start = 0;
    int end = size - 1;
    while(start < end){
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}

int main() {
    int arr[] = {4, 2, 6, 7, 8, 10, 9};
    int size = 7;

    reverse(arr, size);

    for(int num : arr){
        cout << num << " ";
    }

    return 0;
}
