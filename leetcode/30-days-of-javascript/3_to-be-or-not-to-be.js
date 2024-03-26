let expect = (theVal) => {
    return (
        {
            toBe: (theTargetVal) => {
                if (theVal !== theTargetVal) {
                    throw "Not Equal"
                }
                return true
            },
            notToBe: (theTargetVal) => {
                if (theVal === theTargetVal) {
                    throw "Equal"
                }
                return true
            }
        }
    )
};