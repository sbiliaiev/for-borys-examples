const arr = ['foo', 'bar', 123, true, {a: 'a'}]

arr[2]

const myPersonData = {
  name: 'sereja',
  surname: 'boroda',
  age: 28,
  gender: true,
  tel: 123
}

const myPersonDataOld = ['sereja', 'boroda', 28, true, 123]

const checkSequence = (name, surname, age, gender, tel) => {
  //..
    return true
}

const func1 = (personData) => {
   checkSequence(personData[0], personData[1], personData[2], personData[3], personData[4])
}

const func2 = (personData) => {
  const name = personData[0]
  const surname = personData[1]
  const age = personData[2]
  const gender = personData[3]
  const tel = personData[4]

  checkSequence(name, surname, age, gender, tel)
}

const func3 = (personData) => {
  const [ name, surname, age, gender, tel ] = personData

  checkSequence(name, surname, age, gender, tel)
}