const chunk = (theArrList, theSize) => {
    let theArrListLength = theArrList.length;
    let theResult = [];

    for (let theStartIndex = 0; theStartIndex < theArrListLength; theStartIndex += theSize) {
        theResult.push(theArrList.slice(theStartIndex, theStartIndex + theSize));
    }

    return theResult;
}