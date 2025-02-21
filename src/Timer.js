import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-02-28T17:00:00+02:00'); // Romania time (UTC+2)

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
    }, []);

    return (
        <>
            <h1>Party Time!</h1>
            <h2 className="subtitle">
                February 28th, 2025 at 17:00
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
