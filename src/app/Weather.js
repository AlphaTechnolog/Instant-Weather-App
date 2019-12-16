export class Weather {

	constructor(city, countryCode) {
		this.apikey = '59d7a8a5f34f3f9f5f710fe10c953754';
		this.city = city;
		this.countryCode = countryCode
	}

	async getWeather() {
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
		const response = await fetch(URI);
		const data = await response.json();
		return data;
	}

}