#include<iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter the number to print the series";
    cin>>num;
    for(int i=1;i<=num;i=i+3){
        cout<<i<<endl;
    }
}