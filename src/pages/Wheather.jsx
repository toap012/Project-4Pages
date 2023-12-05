import { format, getMonth } from 'date-fns'
import { useEffect, useState } from 'react'
export function Wheather() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const formattedTime = format(now, 'hh:mm:ss a')
            setCurrentTime(formattedTime)
        }
        updateTime()
        const intervalId = setInterval(updateTime, 1000)

        return () => clearInterval(intervalId);
    }, []);


    function formatDate(timestamp = Date.now()) {
        return format(timestamp, 'MM/dd/yyyy')
    }

    function getSeasonFromDate(date) {
        const month = getMonth(date);
        if (month >= 2 && month <= 4) {
            return { season: 'Spring', img: '/src/assets/imgs/sakura.png' };
        } else if (month >= 5 && month <= 7) {
            return { season: 'Summer', img: '/src/assets/imgs/summer.png' };
        } else if (month >= 8 && month <= 10) {
            return { season: 'Fall', img: '/src/assets/imgs/leaves.png' };
        } else {
            return { season: 'Winter', img: '/src/assets/imgs/snowflake.png' };
        }
    }

    return (

        <>
            <div className="box-container flex column align-center">
                <h1>{getSeasonFromDate(Date.now).season}</h1>
                <img src={getSeasonFromDate(Date.now).img} alt="Season-image" />
                <h3>{formatDate()}</h3>
                <h4>{currentTime}</h4>

            </div>
        </>
    )
}