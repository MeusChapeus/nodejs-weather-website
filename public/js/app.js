const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value


    fetch('/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageTwo.textContent = data.error
            }
            messageOne.textContent = 'It is currently '+ data.forecast.temperature + ' degrees in ' + data.location + '.'
            messageTwo.textContent = 'There is a '+ data.forecast.rain + '% chance of rain.' 
        })
    })

})