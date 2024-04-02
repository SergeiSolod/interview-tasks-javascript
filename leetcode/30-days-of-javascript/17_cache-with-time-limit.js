let getTime = (
    () => performance.now()
)

let TimeLimitedCache = function () {
    this.theBase = new Map()
}

TimeLimitedCache.prototype = {

    set: (
        function (key, value, duration) {
            let theTime = getTime();
            let theBase = this.theBase;

            let {expired} = theBase.get(key) ?? {expired: 0};

            theBase.set(key, {value, expired: (theTime + duration)});

            return (theTime < expired);
        }
    ),

    get: (
        function (key) {
            let theTime = getTime();
            let {value, expired} = this.theBase.get(key) ?? {expired: 0};

            return (
                (theTime < expired) ? value : -1
            )
        }
    ),

    count: (
        function () {
            let theTime = getTime()
            let theBase = this.theBase;

            return (
                [...theBase.values()].reduce(
                    (theRes, {expired}) => (theTime < expired ? ++theRes : theRes), 0
                )
            )
        }
    )
}