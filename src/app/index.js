const { Weather } = require('./Weather');
const { UI } = require('./UI');

const ui = new UI();

require('./index.css');

async function updateWeather(e) {
	e.preventDefault();
	const weather = new Weather(document.getElementById('city').value, document.getElementById('countryCode').value);
	const data = await weather.getWeather();
	if (data.cod === "404") {
		const element = document.createElement('div')
		element.innerHTML =
		`
		<div class="alert alert-danger">
			The country or city not found :(
		</div>
		`;
		document.getElementById('container')
			.insertBefore(element, document.getElementById('row'));
		element.setAttribute('id', 'alert-error');

		setTimeout(() => {
			document.getElementById('container')
				.removeChild(document.getElementById('alert-error'));
		}, 3000)

		document.getElementById('city').value = '';
		document.getElementById('countryCode').value = '';
	} else if (data.cod === 200) {
		const element = document.createElement('div')
		element.innerHTML =
		`
		<div class="alert alert-success">
			Your weather has been updated :)
		</div>
		`;
		document.getElementById('container')
			.insertBefore(element, document.getElementById('row'));

		element.setAttribute('id', 'alert-success');

		setTimeout(() => {
			document.getElementById('container')
				.removeChild(document.getElementById('alert-success'));
		}, 3000)

		document.getElementById('city').value = '';
		document.getElementById('countryCode').value = '';
	}
	console.log(data);
	ui.render(data);
}

document.getElementById('w-form')
	.addEventListener('submit', updateWeather)