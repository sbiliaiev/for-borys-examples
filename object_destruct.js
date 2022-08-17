
function checkPersonData(personData) {...}

const func1 = (personData) => {
  if (checkPersonData(personData.name, personData.surname, personData.age, personData.gender, personData.tel) === true) {
    // sdasdas
  }
}

const func2 = (personData) => {
  const name = personData.name
  const surname = personData.surname
  const age = personData.age
  const gender = personData.gender
  const tel = personData.tel
  
  if (checkPersonData(name, surname, age, gender, tel) === true) {
    // sdasdas
  }
}

const func3 = (personData) => {
  const { name, age, gender, tel, surname } = personData

  if (checkPersonData(name, surname, age, gender, tel) === true) {
    // sdasdas
  }
}


