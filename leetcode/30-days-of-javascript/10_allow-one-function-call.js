let once = (fn)=>{
    let theAllreadyRunning=0;
    return (...args)=>(
        theAllreadyRunning ? undefined : (theAllreadyRunning=1, fn(...args))
    )
}