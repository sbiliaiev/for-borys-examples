const checkSequence = (name: string, surname: string, age: number, gender: boolean, tel: number) => {
  //..
    return true
}

type PersonData = [string, string, number, boolean, number]

const func3 = (personData: PersonData) => {
  const [ name, surname, age, gender, tel ] = personData

  checkSequence(name, surname, age, gender, tel)
}