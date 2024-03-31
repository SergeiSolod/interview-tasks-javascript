const cancellable = (
    (fn, args, t) => {
        const theIdenty = setTimeout(fn, t, ...args);
        return (
            () => clearTimeout(theIdenty)
        )
    }
)