#include<iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter number to print series"<<endl;
    cin>>num;
    cout<<"The series is "<<endl;
    for(int i=num; i>=0;i--){
        cout<<i<<endl;
    }
}