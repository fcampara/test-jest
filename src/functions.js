const axios = require('axios')

const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Felipe'}
        user['lastName'] = 'Silva'
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error'),
    reverseString: (str) => str.toLowerCase().split('').reverse().join(''),
    chunckArray: (arr, len) => {
        const chunkedArr = []
        
        arr.forEach(val => {
            const last = chunkedArr[chunkedArr.length-1]
            !last || last.length === len ? chunkedArr.push([val]) : last.push(val)
        })

        return chunkedArr
    },
    isAnagram: (str1, str2) => formatStr(str1) === formatStr(str2)
}

 module.exports = functions
 
 function formatStr(str) {
     return str && str
     .replace(/[^\w]/g, '')
     .toLowerCase()
     .split('')
     .sort()
     .join('')
 }