const printResults = (data) => console.log(data);
const printResultsFancy = (data) => console.log(`This is our results data: { ${data.name}, ${data.age} }`);
const printResultsHAHA = (data) => console.log(data, 'yoyo haha');
const checkAge = (data) => {
  console.log(data)
  return data.age > 13 ? true : false;
}

const api = {
  user: (login, password) => ({ name: "Sereja", age: 28 }),
  group: (login, password) => ({ name: "Super mega coders", count: 13 }),
  settings: (login, password) => ({ language: "en", location: 'UA' }),
}

const loadUserData = (options, callback) => {
  const { login, password } = options;

  const result = api.user(login, password);
  return callback(result)
}

const loadGroupData = (options, callback) => {
  const { login, password } = options;

  const result = api.group(login, password);
  return callback(result)
}

const loadSettingsData = (options, callback) => {
  const { login, password } = options;

  const result = api.settings(login, password);
  return callback(result)
}

// loadUserData({ login: 'supermegayo', password: '666' }, (data) => {
//   console.log('hello from callbnack')
//   console.log(data);
//   console.log('end of callback function')
// })

// loadGroupData({ login: 'supermegayo', password: '666' }, printResults)
// loadSettingsData({ login: 'supermegayo', password: '666' }, printResults)

// loadUserData({ login: 'supermegayo', password: '666' }, printResults)
// loadUserData({ login: 'supermegayo', password: '666' }, printResultsFancy)
// loadUserData({ login: 'supermegayo', password: '666' }, printResultsHAHA)



/// closures

function sum(a) {
  const c = a * 2;
  return function(b) {
    return c + b
  }
}

const sumInline = (a) => (b) => a + b;

sum(7)(8)

// const plus4 = sum(2);
// plusSeven(8)

// plusSeven(1)  // sum(7)(1)
// plusSeven(2)  // sum(7)(2)
// plusSeven(3)  // sum(7)(3)
// plusSeven(4)  // sum(7)(4)

// const plusNine = sum(9);
// plusNine(1) // 10
// plusNine(9) // 18


function initCounter() {
  let count = 0;
  function myCounter() {
    return ++count;
  }
  return myCounter
}

const counter = initCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())


function Vehicle() {
  let color = '';
  let date = ''
  return {
    getColor: () => color,
    setColor: (newColor) => color = newColor,
    getDate: () => date,
    setDate: (newDate) => date = newDate
  }
}

const v1 = Vehicle();
v1.setColor('red')
v1.getColor();
console.log('v1.color', v1.color);

const initApi2 = (login, password) => {
  // check credentials
  // some requests
  // retrieve unique token
  const token = 'asdasdjh23k4jh23jk4ahsjkdahskdas'
  const foo = 5;
  return ({
    user: () => {
      console.log('here is our credentionals')
      console.log(login, password);
      // console.log('HERE IS OUR TOKEN', token)
      console.log('Requesting data...')
      console.log(foo)
      return { name: "Sereja", age: 28 }
    },
    group: () => ({ name: "Super mega coders", count: 13 }),
    settings: () => ({ language: "en", location: 'UA' }),
  })
}

const newApi = initApi2('supermegayo','666');
newApi.user()
newApi.group()
newApi.settings()

// console.log(newApi.user())


function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

makeFunc()()

// const makeFunc = () => {
//   const name = 'Mozilla';
//   const displayName = () => {
//     console.log(name);
//   }
//   return displayName;
// }

// connect(mapState)(MyComponent)

// const statedConnect = connect(mapState)
// statedConnect(MyComponent)

// (function() {

// }())()


function makeAdder(x) {
  let sum = x
  return function (y) {
    return sum += y;
  };
}

const add5 = makeAdder(5);

console.log('add5(2)', add5(2));
console.log('add5(2)', add5(2));
add5(2)
add5(2)
add5(2)
add5(2)
add5(2)
console.log('add5(2)', add5(2));