const timeLimit = (fn, t) => {
    return function (...args) {
        let thePromise = (
            new Promise(
                (doRes, doRej) => {
                        setTimeout(
                            () => doRej("Time Limit Exceeded"), t
                        )

                    fn(...args).then(
                        (theRes) => {
                           doRes(theRes)
                        }
                    ).catch(doRej);
                }
            )
        )

        return thePromise
    }
}