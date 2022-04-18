/*
Issue 04

You have the two following arrays:
colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
position = ["th","st","nd","rd"]

In English you have the ordinal numbers to specify positions in a list, for example:
1 - First (st) - means the first item of a list.
2 - Second (nd) - means the second item of a list.
3 - Third (rd) - means the third item of a list.

Only the first three items has special names. The rest you can name as:
4 - Fourth (th) - means the fourth item of a list.
5 - Fiveth (th) - means the fiveth item of a list.
6 - Sixth (th) - means the sixth item of a list.
....


At result.png you can see how it should works. Paste your code below.
*/

function exercicio4() {
  const colors = [
    'Blue ',
    'Green',
    'Red',
    'Orange',
    'Violet',
    'Indigo',
    'Yellow '
  ]
  let position = ['th', 'st', 'nd', 'rd']
  let num = 1
  var ul, li
  ul = document.createElement('ul')
  for (let i = 0; i < colors.length; i++) {
    if (num <= 3) {
      li = document.createElement('li')
      li.setAttribute('style', 'color: ' + colors[i])
      li.innerHTML = num + position[num] + ' choice is ' + colors[i]
      ul.appendChild(li)
    } else {
      li = document.createElement('li')
      li.setAttribute('style', 'color: ' + colors[i])
      li.innerHTML = num + position[0] + ' choice is ' + colors[i]
      ul.appendChild(li)
    }
    num++
  }
  document.body.appendChild(ul)
}
exercicio4()
