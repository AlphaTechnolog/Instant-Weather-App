export class UI {

	constructor() {
		this.location = document.getElementById('weather-location');
		this.desc = document.getElementById('weather-description');
		this.string = document.getElementById('weather-string');
		this.humidity = document.getElementById('weather-humidity');
		this.wind = document.getElementById('weather-wind');
	}

	render(weather) {
		this.location.textContent = weather.name + ' / ' + weather.sys.country;
		this.desc.textContent = weather.weather[0].description;
		this.string.textContent = weather.main.temp + ' ºC';
		this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
		this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s';
	}

	createAlert(text, cssClass) {
		const element = document.createElement('div');
		element.innerHTML =
		`
		<div class="alert alert-${cssClass}">
			${text}
		</div>
		`;
		document.getElementById('container').insertBefore(element, document.getElementById('row'));
		element.setAttribute('id', 'alert')

		this.resetForm();

		setTimeout(() => {
			document.getElementById('container').removeChild(document.getElementById('alert'));
		}, 3000)
	}

	resetForm() {
		document.getElementById('city').value = '';
		document.getElementById('countryCode').value = '';
	}

}