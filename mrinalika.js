🧩 Problem: Print All Ways to Climb Stairs (1 or 2 Steps at a Time)
Difficulty: Easy-Medium
Category: Recursion / Combinatorics
Technique: Take / Not Take (take 1-step or take 2-steps)

❓ Problem Statement:
Given a staircase with n steps, print all possible ways to reach the top by climbing either 1 or 2 steps at a time.

🧪 Example:
Input:

txt
Copy
Edit
n = 3
Output:

txt
Copy
Edit
[1, 1, 1]
[1, 2]
[2, 1]
Each number represents how many steps you take at that move.

function main() {
    let n =3;

    let trolley = []
    helper(0, n, [], trolley);
    return trolley;

    function helper(index, n, bag, trolley) {
        if(index == n) {
            trolley.push([...bag]);
            return;
        }
        bag.push(1);
        helper(index+1, n, bag, trolley)
        bag.pop();
        if(index <= n-2) {
            bag.push(2);
            helper(index+2, n, bag, trolley)
            bag.pop()
        }

    }
}

console.log(main());
