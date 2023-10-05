import axios from "axios"
import { useEffect, useState } from "react";

function News() {
    const apiKey = import.meta.env.VITE_API_KEY
    const [news, setNews] = useState(null)
    const api = `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en`

    async function handleData() {
        try {
            const res = await axios.get(api)
            const newsWithImages = res.data.results.filter(
                (article) => article.image_url
            );
            setNews(newsWithImages[0]);
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
            <div className="news">
                <div className="imageContainer">
                    <img src={news?.image_url} alt="photo" />
                    <div className="titleDiv">
                        <p>{news?.title}</p>
                        <span>{formatDateAndTime(news?.pubDate)}</span>
                    </div>
                </div>
                <div className="content">
                    <p>{news?.content}</p>
                </div>
            </div>
        </div>
    )
}

export default News
