const sleep = async (millis) => {
    await (
        new Promise(
            (theRes, theRej)=> {
                setTimeout(theRes, millis)
            }
        )
    )
}

const sleep2 = (millis) => (
    new Promise(
        (theRes, theRej)=> {
            setTimeout(theRes, millis)
        }
    )
)