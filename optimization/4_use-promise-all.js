// Bad practice
let addTwoPromises = async () => {
    let theRes1 = await (fetch());
    let theRes2 = await (fetch());
    return (theRes1 + theRes2);
}

// Good practice
let addTwoPromises2 = () => {
    return (
        Promise.all([(fetch()), (fetch())])
            .then((theRes) => (theRes[0] + theRes[1]))
    )
}