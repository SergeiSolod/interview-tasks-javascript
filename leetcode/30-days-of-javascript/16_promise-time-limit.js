const timeLimit = (fn, t) => {
    return function (...args) {
        const p1 = fn(...args)
        const p2 = new Promise(
            (doRes, doRej)=> {
                setTimeout(
                    () => doRej("Time Limimit Exceeded"), t
                )
            }
        );

        return Promise.race(
            [p1, p2]
        )
    }
}

const timeLimit2 = (fn, t) => {
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