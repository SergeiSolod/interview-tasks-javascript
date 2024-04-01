const timeLimit = (fn, t) => {
    return function (...args) {
        let thePromise = (
            new Promise(
                (doRes, doRej) => {
                    let theTimer = (
                        setTimeout(
                            () => doRej("Time Limit Exceede"), t
                        )
                    );

                    fn(...args).then(
                        (theRes) => {
                            clearTimeout(theTimer), doRes(theRes)
                        }
                    ).catch(doRej);
                }
            )
        )

        return thePromise
    }
}