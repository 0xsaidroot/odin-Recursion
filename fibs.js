export function fibsIteration(n){
    if(n <= 0)return [0];
    if(n === 1) return [0,1];

    let current = 1;
    let previous = 0;
    let next = 0;
    let arr = [0,1];

    for(let i = 2;i<=n;i++){
        next = previous + current;
        previous = current;
        current = next;
        arr.push(current)
    }
    return arr;
}

export function fibsRecursion(n){
    if(n<=0) return [0];
    if(n === 1) return [0,1];
    let a = fibsRecursion(n - 1);
    let b = a[a.length - 1] + a[a.length - 2];
    a.push(b);
    return a;
}
console.log(fibsRecursion(5));