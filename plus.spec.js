const calculate = require('./cal')
describe('test', () => {
    it('1 => 1', () => {
        const expected = 1
        const result = calculate(1)
        expect(expected).toEqual(result)
    })
    it('2 => 2', () => {
        const expected = 2
        const result = calculate(2)
        expect(expected).toEqual(result)
    })
    it('3 =>  fizz', () => {
        const expected = 'Fizz'
        const result = calculate(3)
        expect(expected).toEqual(result)
    })
    it('3 =>  fizz', () => {
        const expected = 'Fizz'
        const result = calculate(3)
        expect(expected).toEqual(result)
    })
    it('4 =>  4', () => {
        const expected = 4
        const result = calculate(4)
        expect(expected).toEqual(result)
    })
    it('5 =>  buzz', () => {
        const expected = "buzz"
        const result = calculate(5)
        expect(expected).toEqual(result)
    })
    it('6 =>  Fizz', () => {
        const expected = "Fizz"
        const result = calculate(6)
        expect(expected).toEqual(result)
    })
    it('7 =>  7', () => {
        const expected = 7
        const result = calculate(7)
        expect(expected).toEqual(result)
    })
    it('8 =>  8', () => {
        const expected = 8
        const result = calculate(8)
        expect(expected).toEqual(result)
    })
    it('9 =>  Fizz', () => {
        const expected = "Fizz"
        const result = calculate(9)
        expect(expected).toEqual(result)
    })
    it('10 =>  buzz', () => {
        const expected = "buzz"
        const result = calculate(10)
        expect(expected).toEqual(result)
    })
    it('15 =>  fizzbuzz', () => {
        const expected = "fizzbuzz"
        const result = calculate(15)
        expect(expected).toEqual(result)
    })
    it('45 =>  fizzbuzz', () => {
        const expected = "fizzbuzz"
        const result = calculate(45)
        expect(expected).toEqual(result)
    })
    it('60 =>  fizzbuzz', () => {
        const expected = "fizzbuzz"
        const result = calculate(60)
        expect(expected).toEqual(result)
    })


}
)