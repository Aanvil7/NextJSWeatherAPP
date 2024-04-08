'use client';
import React, { useState, useEffect } from 'react';
import Card from "./ui/card";
import Stat from './ui/stat';
import { WeatherIcon } from "./ui/weather-icon";
import WeatherData from './lib/data';
import { fetchWeather } from "./lib/api"; 

const city = "Utrecht";
const apiKey = "a5a277c30b845fe10dbf8dba82dbaf61";



export default function Home() {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');


    useEffect(() => {
            fetchWeather(city, apiKey)
                .then(setWeatherData)
                .catch(error => {
                    console.error(error.message);
                    setError(error.message); 
                })
                .finally(() => {
                    setLoading(false);
            });
        }, [city]);

        if (loading) { 
            return (
                <Card>
                    <div className="text-center">Loading weather data...</div>
                </Card>
            );
        }
    
        if (error) {
            return (
                <Card>
                    <div className="text-center text-red-500">{error}</div>
                </Card>
            );
        } 

    return (
        <Card>
            <div className="flex flex-col items-center">
                {weatherData && <WeatherIcon weatherId={weatherData.weather[0].id} />}
                <h1 className="text-xl font-bold mt-4">Weather in {city}</h1>
                <div className="mt-6 flex space-x-6">
                <Stat unit="°C" value={weatherData?.main?.temp || 0} label="Temperature" size="large" />
                <Stat unit="km/h" value={weatherData?.wind?.speed || 0} label="Wind Speed" />
                <Stat unit="%" value={weatherData?.main?.humidity || 0} label="Humidity" />
                </div>
            </div>
        </Card>
    );
}
