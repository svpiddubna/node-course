


const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

messageOne.textContent = ''

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = search.value
  messageOne.textContent = 'Loading..'
  messageTwo.textContent = ''

  fetch(`http://localhost:3000/weather?address=${location}`).then(response => {

  response.json().then(data => {

    if (data.error) {
      messageOne.textContent = data.error
    } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    }
  })
})
})