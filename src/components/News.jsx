import axios from "axios"
import { useEffect, useState } from "react";
import newsImage from '../assets/newsImage.png'

function News() {
    const apiKey = import.meta.env.VITE_API_KEY
    const [news, setNews] = useState(null)
    const api = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en`

    async function handleData() {
        try {
            const res = await axios.get(api)
            setNews(res.data.results[0]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        handleData()
    }, [])
    function formatDateAndTime(dateTimeString) {
        if (!dateTimeString) return "";
        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };

        return new Date(dateTimeString).toLocaleString(undefined, options)
    }
    return (
        <div className="newsContainer">
            {
                news ? (
                    <div className="news">
                        <div className="imageContainer">
                            {
                                news?.image_url ? (
                                    <img src={news?.image_url} alt="photo" />
                                ) : (
                                    <img src={newsImage} alt="photo" />
                                )
                            }
                            <div className="titleContainer">
                                <p>{news?.title}</p>
                                <span>{formatDateAndTime(news?.pubDate)}</span>
                            </div>
                        </div>
                        <div className="content">
                            <p>{news?.content}</p>
                        </div>
                    </div>
                ) : (
                    <p className="loading">Loading...</p>
                )
            }
        </div>
    )
}

export default News
