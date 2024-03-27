let map = (arr, fn)=>(
    arr.reduce(
        (theRes, theCur, theIndex) => (theRes.push(fn(theCur, theIndex)), theRes),[]
    )
);