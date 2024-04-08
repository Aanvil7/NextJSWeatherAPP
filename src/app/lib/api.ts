import WeatherData from './data';




export const fetchWeather = async (city: string, apiKey: string): Promise<WeatherData> => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    const data: WeatherData = await response.json();
    return data;
};

export default fetchWeather;