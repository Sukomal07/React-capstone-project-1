import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [data, setData] = useState({
        hour: 0,
        minute: 0,
        second: 0
    });
    const onComplete = () => {
        setIsPlaying(false)
        setData({
            hour: 0,
            minute: 0,
            second: 0
        })
    }

    const increment = (type) => {
        if (!isPlaying) {
            setData((prevData) => ({
                ...prevData,
                [type]: prevData[type] < 59 ? prevData[type] + 1 : prevData[type],
            }));
        }
    };

    const decrement = (type) => {
        if (!isPlaying) {
            setData((prevData) => ({
                ...prevData,
                [type]: prevData[type] > 0 ? prevData[type] - 1 : prevData[type],
            }));
        }
    };
    const totalSeconds = data.hour * 3600 + data.minute * 60 + data.second;

    return (
        <div className="timerContainer">
            <div className="clock">
                <div className="outerDiv">
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={totalSeconds}
                        colors={"#FF6A6A"}
                        strokeWidth={5}
                        trailColor="transparent"
                        size={150}
                        onComplete={onComplete}
                    >
                        {({ remainingTime }) => {
                            const hours = Math.floor(remainingTime / 3600);
                            const minutes = Math.floor((remainingTime % 3600) / 60);
                            const seconds = remainingTime % 60;
                            const formattedHours = String(hours).padStart(2, "0");
                            const formattedMinutes = String(minutes).padStart(2, "0");
                            const formattedSeconds = String(seconds).padStart(2, "0");
                            return (
                                <div className="time">
                                    {`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}
                                </div>
                            );
                        }}
                    </CountdownCircleTimer>
                </div>
            </div>
            <div className="timerDetails">
                <div className="timerInputs">
                    <div className="displayContainer">
                        <span className="timeHeading">Hours</span>
                        <div className="timerbuttons">
                            <span className="incBtn" onClick={() => increment("hour")}></span>
                            <p>{String(data.hour).padStart(2, "0")}</p>
                            <span className="decBtn" onClick={() => decrement("hour")}></span>
                        </div>
                    </div>
                    <div className="displayContainer">
                        <span className="timeHeading">Minutes</span>
                        <div className="timerbuttons">
                            <span className="incBtn" onClick={() => increment("minute")}></span>
                            <p>{String(data.minute).padStart(2, "0")}</p>
                            <span className="decBtn" onClick={() => decrement("minute")}></span>
                        </div>
                    </div>
                    <div className="displayContainer">
                        <span className="timeHeading">Seconds</span>
                        <div className="timerbuttons">
                            <span className="incBtn" onClick={() => increment("second")}></span>
                            <p>{String(data.second).padStart(2, "0")}</p>
                            <span className="decBtn" onClick={() => decrement("second")}></span>
                        </div>
                    </div>
                </div>
                <div className="lowerDiv">
                    <button className="btn" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? "Stop" : "Start"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
