const cityInput = document.querySelector('.city-input')
const seatchBtn = document.querySelector('.search-btn')

const apiKeys = 'f4db0ae4fdce3919fa651fc7362e7134'

seatchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
}) 
cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' &&
        cityInput.value.trim() != ''
    ) {
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})
function getFetchData() {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
}

function updateWeatherInfo(city) {
    const weatherData = getFetchData()
}