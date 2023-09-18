import React, {useEffect, useState} from "react";
import './Clock.css'

type PropsType = {}
const getTwoDigitsStr = (num: number) => {
    return num < 10 ? `0${num}` : num
}

export const Clock: React.FC<PropsType> = (props) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Рассчитываем углы для стрелок часов, минут и секунд
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minuteDegrees / 360) / 12) * 360;

    return (
        <div className='clock-container'>
            <div className="analog-clock">
                <div className="hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }}></div>
                <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }}></div>
                <div className="hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }}></div>
            </div>
            <div className='digit-clock'>
                <span>{getTwoDigitsStr(time.getHours())}</span>
                :
                <span>{getTwoDigitsStr(time.getMinutes())}</span>
                :
                <span>{getTwoDigitsStr(time.getSeconds())}</span>
            </div>
        </div>

    );
}