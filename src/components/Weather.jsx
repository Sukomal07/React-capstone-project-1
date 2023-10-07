import axios from "axios";
import { useEffect, useState } from "react"
import pressureIcon from '../assets/pressureIcon.png'
import windIcon from '../assets/windIcon.png'
import humidityIcon from '../assets/humidityIcon.png'

function Weather() {
    const apiKey = import.meta.env.VITE_OPENAPI_KEY
    const [data, setData] = useState({
        weatherData: null,
        error: ''
    })
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const fetchWeatherData = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                    axios.get(api)
                        .then((response) => {
                            setData({ ...data, weatherData: response.data });
                        })
                        .catch((error) => {
                            setData({ ...data, error: error.message });
                        });
                },
                (error) => {
                    setData({ ...data, error: error.message });
                }
            );
        } else {
            setData({ ...data, error: "Geolocation is not available in this browser." });
        }
    };
    useEffect(() => {
        fetchWeatherData();
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, [])

    const weatherIcon = `https://openweathermap.org/img/wn/${data.weatherData?.weather[0].icon}.png`
    return (
        <div className="weather">
            <div className="dateContainer">
                <p>{currentDateTime.toLocaleString("en-IN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                })}</p>
                <p>{currentDateTime.toLocaleString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })}</p>
            </div>
            <div className="weatherData">
                {data.error ? (
                    <p className="error">{data.error}</p>
                ) : (
                    <>
                        <div className="firstContainer">
                            <img src={weatherIcon} alt="icon" className="icon" />
                            <p className="weatherType">{data.weatherData?.weather[0].main}</p>
                        </div>
                        <span className="bar"></span>
                        <div className="secondContainer">
                            {
                                data.weatherData?.main?.temp && (
                                    <p className="temp">{Math.round(data.weatherData?.main?.temp - 273.15)}°C</p>
                                )
                            }
                            <div className="pressureDiv">
                                <img src={pressureIcon} alt="pressure" className="pressureIcon" />
                                <p className="pressure">{data.weatherData?.main?.pressure} mbar Pressure</p>
                            </div>
                        </div>
                        <span className="bar"></span>
                        <div className="thirdContainer">
                            <div className="windDiv">
                                <img src={windIcon} alt="wind" className="windIcon" />
                                <p className="windSpeed">{data.weatherData?.wind?.speed}Km/h Wind</p>
                            </div>
                            <div className="humidityDiv">
                                <img src={humidityIcon} alt="humidity" className="humidityIcon" />
                                <p className="humidity">{data.weatherData?.main?.humidity}%  Humidity </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Weather
