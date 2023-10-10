import axios from "axios";
import { useEffect, useState } from "react"
import pressureIcon from '../assets/pressureIcon.png'
import windIcon from '../assets/windIcon.png'
import humidityIcon from '../assets/humidityIcon.png'

function Weather() {
    const apiKey = import.meta.env.VITE_WEATHERAPI_KEY;
    const ipApi = import.meta.env.VITE_IP_API;
    const [data, setData] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [userIpAddress, setUserIpAddress] = useState("");

    const getUserIpAddress = async () => {
        try {
            const response = await axios.get(ipApi);
            setUserIpAddress(response.data);
        } catch (error) {
            console.error("Error fetching IP address:", error);
        }
    };

    const fetchWeatherData = async () => {
        if (userIpAddress) {
            const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userIpAddress}`;
            try {
                const response = await axios.get(api);
                setData(response.data.current);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
    };

    useEffect(() => {
        getUserIpAddress();
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        if (userIpAddress) {
            fetchWeatherData();
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [userIpAddress]);
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
                {
                    data ? (
                        <>
                            <div className="firstContainer">
                                <img src={data?.condition?.icon} alt="icon" className="icon" />
                                <p className="weatherType">{data?.condition?.text}</p>
                            </div>
                            <span className="bar"></span>
                            <div className="secondContainer">
                                <p className="temp">{data?.temp_c} °C</p>
                                <div className="pressureDiv">
                                    <img src={pressureIcon} alt="pressure" className="pressureIcon" />
                                    <p className="pressure">{data?.pressure_mb} mbar <br />Pressure</p>
                                </div>
                            </div>
                            <span className="bar"></span>
                            <div className="thirdContainer">
                                <div className="windDiv">
                                    <img src={windIcon} alt="wind" className="windIcon" />
                                    <p className="windSpeed">{data?.wind_kph} Km/h <br />Wind</p>
                                </div>
                                <div className="humidityDiv">
                                    <img src={humidityIcon} alt="humidity" className="humidityIcon" />
                                    <p className="humidity">{data?.humidity}%  <br />Humidity </p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="error">Loading...</p>
                    )
                }
            </div>
        </div>
    )
}

export default Weather
