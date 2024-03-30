let addTwoPromises = async (promise1, promise2) => {
    let theRes1 = await promise1;
    let theRes2 = await promise2;
    return (theRes1 + theRes2);
}