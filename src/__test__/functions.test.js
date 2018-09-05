const functions = require('./../functions')

/* In jest we can use BeforeEach(() => ...)
*  Run some function before start each test
*
*  In jest we can use BeforeAll(() => ...)
*  Run only once for all test
*
*  In jest we can use Describe to create a group for test
*  describe('<SOME-TEXT>', () => {
*       <CREATE-SOME-FUNCTIONS>
*  }
})
*/

// First test all functions exist
// 2 way to test function exist
// expect(<NAME-FUNCTION>).toBeDefined()
// expect(typeof <NAME-FUNCTION>).toEqual('function')
it('All functions exist ', () => {
    expect(functions.add).toBeDefined()
    expect(typeof functions.isNull).toEqual('function')
    expect(functions.checkValue).toBeDefined()
    expect(functions.createUser).toBeDefined()
    expect(functions.fetchUser).toBeDefined()
    expect(functions.reverseString).toBeDefined()
    expect(functions.isAnagram).toBeDefined()
})

//toBe
it('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

//CHECK FOR TRUTHY & FALSY VALUE
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

//toBeNull
it('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

//toBeFalsy
it('Should be falsy', () => {
    expect(functions.checkValue()).toBeFalsy()
})

//toEqual
it('User should be Felipe Silva object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Felipe',
        lastName: 'Silva'
    })
})

// Less than
it('Should be under 1600', () => {
    const sum = ([800, 700]).reduce((a, b) => a + b, 0)
    expect(sum).toBeLessThan(1600)
})

// Less than or equal
it('Should be under or equal 1600', () => {
    const sum = ([800, 800]).reduce((a, b) => a + b, 0)
    expect(sum).toBeLessThanOrEqual(1600)
})

// Regex
it('There is not I in team', () => {
    expect('team').not.toMatch(/I/i)
})

// Arrays
it('Admin should be in usernames', () => {
    const usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})

// Working with async data
// Using fake API to get user
// https://jsonplaceholder.typicode.com/users
// Need use expect.assertions and return for promisse if not use this in case fail the test will be true
it('User fetched name should be Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async await
it('User fetched name should be Leanne Graham Async', async () => {
    expect.assertions(1)
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})

// reverse String
it('String reverse', () => {
    expect(functions.reverseString('Hello')).toEqual('olleh')
})

// chunkArray
it('Chunk an array of 10 values with length of 2', () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const len = 2
    const chunkedArr = functions.chunckArray(numbers, len)

    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})

// isAnagram is truthy
it('"cinema" is an anagram of "iceman"', () => {
    expect(functions.isAnagram('cinema', 'iceman')).toBeTruthy()
})

// isAnagram is falsy
it('"hello" is NOT an anagram of "aloha"', () => {
    expect(functions.isAnagram('hello','aloha')).toBeFalsy()
})