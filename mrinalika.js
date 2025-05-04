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
