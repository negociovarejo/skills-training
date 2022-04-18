/*
Issue 05
Using persons array, create a new array with only fullName and age properties. Then, sort this array by name.

const persons = [
  {
    firstName: 'John',
    secondName: 'Lennon',
    age: 45
  },
  {
    firstName: 'André',
    secondName: 'Silva',
    age: 28
  },
  {
    firstName: 'Derek',
    secondName: 'Flowers',
    age: 34
  }
];

Paste your code below.
*/

function exercicio5() {
  const persons = [
    {
      firstName: 'John',
      secondName: 'Lennon',
      age: 45
    },
    {
      firstName: 'André',
      secondName: 'Silva',
      age: 28
    },
    {
      firstName: 'Derek',
      secondName: 'Flowes',
      age: 34
    }
  ]

  const newpersons = persons.map(item => {
    return {
      fullname: `${item.firstName} ${item.secondName}`,
      age: item.age
    }
  })

  newpersons.sort((a, b) => {
    if (a.fullname < b.fullname) {
      return -1
    } else {
      return true
    }
  })

  console.log(newpersons)
}
exercicio5()
