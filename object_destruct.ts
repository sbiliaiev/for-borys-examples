const checkPersonData = (name: string, surname: string, age: string, gender: boolean, tel: number) => {
  // ....
  return true
}

type PersonData = {
  name: string,
  surname: string,
  age: string,
  gender: boolean,
  tel: number,
}

interface PersonDataI {
  name: string
  surname: string
  age: string
  gender: boolean
  tel: number
}

const func3 = (personData: PersonData) => {
  const { name, gender, tel, age, surname } = personData

  if (checkPersonData(name, surname, age, gender, tel) === true) {
    // sdasdas
  }
}