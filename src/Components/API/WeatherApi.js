async function getWeatherData(latitude, longitude) {
    const url = "https://api.open-meteo.com/v1/forecast";
    const params = {
        latitude,
        longitude,
        hourly: "temperature_2m",
        timezone: "America/Sao_Paulo",
    };
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${url}?${query}`);
    return await response.json();
}

export async function getTemperatureByLatitudeLongitude(latitude, longitude) {
    const weatherData = await getWeatherData(latitude, longitude);
    const temperatures = weatherData.hourly.temperature_2m;
    const currentHour = new Date().getHours().toString();
    return temperatures[currentHour];
}