/*
Issue 06
Convert the following array to object using [key: value] structure.

const persons = [
  {
    socialSecurityNumber: 25838175079,
    firstName: 'Wayne',
    secondName: 'Rooney',
    age: 37
  },
  {
    socialSecurityNumber: 49627679097,
    firstName: 'Aaron',
    secondName: 'Lennon',
    age: 39
  },
  {
    socialSecurityNumber: 22301222071
    firstName: 'Steven',
    secondName: 'Gerrard',
    age: 42
  }
];


The result should be like this
{
  "25838175079": {
    firstName: 'Wayne',
    secondName: 'Rooney',
    age: 37
  },
  "49627679097": {
    firstName: 'Aaron',
    secondName: 'Lennon',
    age: 39
  },
  "22301222071": {
    firstName: 'Steven',
    secondName: 'Gerrard',
    age: 42
  }
}

Paste your code below
*/

function exercicio6() {
  const persons = [
    {
      socialSecurityNumber: 25838175079,
      firstName: 'Wayne',
      secondName: 'Rooney',
      age: 37
    },
    {
      socialSecurityNumber: 49627679097,
      firstName: 'Aaron',
      secondName: 'Lennon',
      age: 39
    },
    {
      socialSecurityNumber: 22301222071,
      firstName: 'Steven',
      secondName: 'Gerrard',
      age: 42
    }
  ]
  let obj = {}
  persons.forEach(item => {
    obj = {
      ...obj,
      [item.socialSecurityNumber]: {
        firstName: item.firstName,
        secondName: item.secondName,
        age: item.age
      }
    }
  })

  console.log(obj)
}
exercicio6()
