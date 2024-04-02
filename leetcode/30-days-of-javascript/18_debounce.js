const debounce = (fn, t) => {
    let theTimer;
    return (...args) => {
        clearTimeout(theTimer);
        theTimer = setTimeout(
            () => fn(...args), t);
    }
}