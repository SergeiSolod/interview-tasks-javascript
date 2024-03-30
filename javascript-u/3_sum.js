// Implement a function that will sum numbers and output them to the logs
// Example sum(5)(4)(11)

const sum = (a) => {
    return function (b) {
        return sum(b+a)
    }
}

sum(5)
sum(5)(4)(11)
