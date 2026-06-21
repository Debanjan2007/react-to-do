import { useEffect, useState } from "react";

export function useClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: "Asia/Kolkata",
                hour12: true
            };

            setTime(
                new Date().toLocaleTimeString(
                    "en-IN",
                    options
                )
            );
        };

        updateTime();

        const interval = setInterval(
            updateTime,
            1000
        );

        return () => clearInterval(interval);
    }, []);

    return time;
}