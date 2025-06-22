//TC: O(2^n) | SC: O(n) - Stack Space
function fib(n) {
    if(n < 2) return n
    return fib(n-1) + fib(n-2)
}

//TC: O(n) | SC: O(n) + O(n) - Stack Space
function fib(n, map = {}) {
    if(map[n] != undefined) {
        return map[n]
    }
    if(n < 2) return n

    map[n] = fib(n-1, map) + fib(n-2, map)
    return map[n]
}

//TC: O(n) | SC: O(n)
function fib(n) {
    let arr = [0, 1]

    for(let i = 2; i<=n; i++) {
        arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n]
}



//TC: O(n) | SC: O(1)
function fib(n) {
    let first = 0;
    let second = 1;
    let ans;

    for(let i = 2; i<=n; i++) {
        ans = first + second;
        first = second
        second = ans;
    }
    return ans
}
