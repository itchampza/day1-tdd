const calculate = require('./calcuter')
    describe('Test', () => {
        it('  => 0', () => {
            const expected = 0
            const result = calculate('')
            expect(expected).toEqual(result)
        })
        it('1 => 1', () => {
            const expected = 1
            const result = calculate('1')
            expect(expected).toEqual(result)
        })
        it('1,2 => 3', () => {
            const expected = 3
            const result = calculate('1,2')
            expect(expected).toEqual(result)
        })


    }
)