const contro = require('./cal2')
describe('Test', () => {
        it('3 => prime', () => {
            const expected = 'prime'
            const result = contro(3)
            expect(expected).toEqual(result)
        })
        it('2 => prime', () => {
            const expected = 'prime'
            const result = contro(2)
            expect(expected).toEqual(result)
        })
        
      }
)

