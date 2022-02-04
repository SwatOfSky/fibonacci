const fibonacci = num => {
    const result = [0, 1]
    for(let i = 2; i <= num; i++) {
        const prevNumber1 = result[i - 1]
        const prevNumber2 = result[i - 2]
        result.push(prevNumber1 + prevNumber2)
    }
    return result[num]
}
console.log(fibonacci(6))