#include<iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter the number to print table"<<endl;
    cin>>num;
    cout<<"Table is -->"<<endl;
    for(int i=num;i<=num*10;i=i+num){
        cout<<i<<endl;
    }
}