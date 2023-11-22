import { getDate, format, getMonth } from 'date-fns'
import { useEffect } from 'react'
export function Wheather() {

    useEffect(() => {
        console.log(getDate(Date.now()));
    }, [])

    function getSeasonFromDate(date) {
        const month = getMonth(date);
        if (month >= 2 && month <= 4) {
            return { season: 'Spring', img: '../assets/imgs/sakura.png' };
        } else if (month >= 5 && month <= 7) {
            return { season: 'Summer', img: '../assets/imgs/summer.png' };
        } else if (month >= 8 && month <= 10) {
            return { season: 'Fall', img: '../assets/imgs/leaves.png' };
        } else {
            return { season: 'Winter', img: '../assets/imgs/snowflake.png' };
        }
    }

    return (

        <>
            <div className="box-container flex column align-center">
                <h1>{getSeasonFromDate(Date.now).season}</h1>
                <img src="../assets/imgs/leaves.png" alt="Season-image" />
                <h3>Date</h3>
                <h4>hour</h4>

            </div>
        </>
    )
}