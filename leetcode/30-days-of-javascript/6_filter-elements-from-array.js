let filter = (arr, fn)=>(
    arr.reduce(
        (theRes, theEl, theIndex) => ((fn(theEl, theIndex) && (theRes.push(theEl))), theRes),[]
    )
);