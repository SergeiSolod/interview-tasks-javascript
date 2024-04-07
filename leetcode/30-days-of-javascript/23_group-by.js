Array.prototype.groupBy = function (fn) {
    return this.reduce(
        (theRes, theVal) => (
            (
                (theRes[(fn(theVal))] ??= []).push(theVal)
            )
            , theRes
        )
        , {}
    );
};