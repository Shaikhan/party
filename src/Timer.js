import React, { useState, useEffect } from "react";
import "./App.css";

function Timer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <>
            <h1>Party Time!</h1>
            <h2 className="subtitle">
                {targetDate.toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: false
                })}
            </h2>
            <div className="timer">
                <div className="timer-block">
                    <span className="number">{timeLeft.days}</span>
                    <span className="label">Days</span>
                </div>
                <div className="timer-block">
                    <span className="number">{timeLeft.hours}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="timer-block">
                    <span className="number">{timeLeft.minutes}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="timer-block">
                    <span className="number">{timeLeft.seconds}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
        </>
    );
}

export default Timer;
