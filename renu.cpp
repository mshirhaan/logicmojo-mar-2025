// ❓ Problem Statement:
// Given a string s containing letters and digits, return all possible strings you can form by changing the case of alphabetic characters (upper/lower). Digits remain unchanged.

// 🧪 Example:
// Input:

// s = "a1b2"
// Output (any order):

// ["a1b2", "a1B2", "A1b2", "A1B2"]


#include <iostream>
#include <vector>
#include<string>

using namespace std;
//a1B2
//output : "a1B2", "A1B2", "a1b2", "A1b2"
void helper(const string& s, int index, string current, vector<string>& result)
{
    int len = s.length();
    if(index == len)
    {
        result.push_back(current);
        return;
    }
    
    if(isalpha(s[index])) // check alphabet
    {
        string currUpper = current + char(toupper(s[index]));
        string currLower = current + char(tolower(s[index]));
        //two cases: uppercase and lowercase
        helper(s, index+1, currUpper, result);
        helper(s, index+1, currLower, result);
    }
    else
    {
        //if digit, move to next char
        helper(s, index+1, current+s[index], result);
    }
}


vector<string> getAllCombinations(string s)
{
    vector<string> combination;
    helper(s, 0, "", combination);
    return combination;
}


int main()
{
    string str = "a1B2";
    vector<string> result = getAllCombinations(str);
    
    cout<<"Possible solution "<<endl;
    for(const string& comb : result)
        cout<<comb<<endl;

    return 0;
}
This paste expires in <1 hour. Public IP access. Share whatever you see with others in seconds with Context.Terms of ServiceReport this
