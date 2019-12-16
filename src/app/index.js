const { Weather } = require('./Weather');
const { UI } = require('./UI');

const ui = new UI();

require('./index.css');

async function updateWeather(e) {
	e.preventDefault();
	const weather = new Weather(document.getElementById('city').value, document.getElementById('countryCode').value);
	const data = await weather.getWeather();
	if (data.cod === "404") {
		ui.createAlert('The country code or city has been not found :(', 'danger');
	}
	else if (data.cod === 200) {
		ui.createAlert('The app has been updated :)', 'success')
	}
	console.log(data);
	ui.render(data);
}

document.getElementById('w-form')
	.addEventListener('submit', updateWeather)