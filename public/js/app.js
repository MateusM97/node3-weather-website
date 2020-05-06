const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const mensageOne = document.querySelector('#mensage-1')
const mensageTwo = document.querySelector('#mensage-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    mensageOne.textContent = 'Loadind...'
    mensageTwo.textContent = ''

    fetch('/weather?address=' + location).then ((response) => {
    response.json().then((data) => {
        if (data.error){
            mensageOne.textContent = data.error
        } else {
            mensageOne.textContent = data.location
            mensageTwo.textContent = data.forecast
        }
    })
})
})