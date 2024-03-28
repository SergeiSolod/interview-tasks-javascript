let compose = (functions) => {
    return function (x) {
        return (
            functions.reduceRight(
                (theRes, theFun) => theFun(theRes),x
            )
        )
    }
}