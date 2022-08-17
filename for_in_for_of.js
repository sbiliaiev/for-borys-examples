const myPersonData = {
  name: 'sereja',
  surname: 'boroda',
  age: 28,
  gender: true,
  tel: 123,
  address: 'valentinovskaya 123'
}

const prepareData = (obj) => {
  const newObj = { ...obj }

  if (newObj.gender === true) {
    newObj.gender = 'male'
  } else {
    newObj.gender = 'female'
  }

  newObj.tel = String(newObj.tel)

  return newObj
}

const prepareDataWithForIn = (obj) => {
  const newObj = {}

  for (const key in obj) {

    if (key === 'gender') {
      if (obj.gender === true) {
        newObj.gender = 'male'
      } else {
        newObj.gender = 'female'
      }
    } else if (key === 'tel') {
      newObj.tel = String(obj.tel)
    } else if (key == 'friends') {
      // dfsdfds
    } else {
      newObj[key] = obj[key]
    }

  }

  return newObj
}

const prepareDataWithForInAndSwitchCase = (obj) => {
  const newObj = {}

  for (const key in obj) {

    switch (key) {
      case 'gender':
        if (obj.gender === true) {
          newObj.gender = 'male'
        } else {
          newObj.gender = 'female'
        }
      case 'tel':
        newObj.tel = String(obj.tel)
      case 'friends':
        dadsas
      case 'lovers':
        dadsas
      case 'hobby':
        dadsas
      default:
        newObj[key] = obj[key]
    }

  }

  return newObj
}

const myPersonData1 = prepareData(myPersonData)
const myPersonData2 = prepareDataWithForIn(myPersonData)

// console.log(myPersonData)
// console.log('-----------------')
// console.log(myPersonData1)
// console.log('-----------------')
// console.log(myPersonData2)





// for (const property in myPersonData) {
//   if (property in myPersonData) {
//     console.log('property is ', property, ', and its value is ', myPersonData[property])
//   }
// }

const myPersonDataOld = ['sereja', 'boroda', 28, true, 123]

// for (const data of myPersonDataOld) {
//   console.log('my data is', data)
// }

console.log('------------------')

// for (let i = 0; i < myPersonDataOld.length; i++) {
//   console.log('my data is', myPersonDataOld[i], 'and its index is', i)
// }

const key = 'asdasdjk2343jk21h4jkh2kjhrsdjkf234jk45h323'

// for (let i = 0; i < key.length; i++) {
//   if (key[i] === 6) {
//     // ..sdasdas
//   }
//   console.log('character is', key[i], 'and its index is', i)
// }

// for (const character of key) {
//   if (character === 6) {
//     // ..sdas 
//   }
//   console.log('character is', character)
// }

// console.log(Object.keys(myPersonData))
// console.log(Object.values(myPersonData))
// console.log('----------')
// console.log(Object.entries(myPersonData))

// for (let [key, value] of Object.entries(myPersonData)) {
//   console.log(key, value);
// }

// for (const key in myPersonData) {
//   console.log('key is', key)
// }
console.log('-------')
// for (const key of Object.keys(myPersonData)) {
//   console.log('key is', key)
// }


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach((value) => {
//   console.log(value)
// })

console.log(arr)
console.log('----------')
const arr2 = arr.map((val) => val*2)
console.log(arr2)

arr.push(11)
const arr3 = [ ...arr, 11 ]

// for (const value of arr) {
//   console.log(value)
// }