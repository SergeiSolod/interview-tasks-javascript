let memoize = (doThing) => {
    var theCache = new Map();

    return (
        (p1, p2) => {
            var theKey, theRes;

            return (
                theCache.has((theKey = `${p1} - ${p2}`)) ?
                    theCache.get(theKey) :
                    (theCache.set(theKey, (theRes = doThing(p1, p2))), theRes)
            )
        }
    )
}