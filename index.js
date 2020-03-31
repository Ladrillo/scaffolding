console.log(
  'the doc title is ', document.title
)

const root = document.querySelector('#root')

console.log(root, '<--- this is supposed to be the div');

root.textContent = 'Having fun INDEED!!!'
