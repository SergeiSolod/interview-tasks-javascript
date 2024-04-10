let isArray = Array.isArray;
let helper = function(arr, depth, res) {
    for (let val of arr) {
        if (depth > 0 &&  isArray(val)) {
            helper(val, depth - 1, res);
        } else {
            res.push(val);
        }
    }
}

let flat = function(arr, n) {
    let res = [];
    helper(arr, n, res);
    return res;
}