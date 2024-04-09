let join = (arr1, arr2) => {

    let theMapArr1 = new Map(arr1.map((theEl) => [theEl.id, theEl]));

    arr2.forEach(
        (theEl) => {
            theMapArr1.has(theEl.id)
                ? theMapArr1.set(theEl.id, Object.assign(theMapArr1.get(theEl.id), theEl)) :
                theMapArr1.set(theEl.id, theEl)
        }
    )

    return [...theMapArr1.values()].sort((a, b) => a.id - b.id)
}