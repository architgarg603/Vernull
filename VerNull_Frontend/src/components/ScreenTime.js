import React, { useEffect, useState } from 'react'

function ScreenTime() {
    const [time, setTime] = useState(0)

    useEffect(() => {
        localStorage.setItem('date', new Date().getDate());
        const internval = setInterval(() => {
            setTime(time => {
                localStorage.setItem('currTime', time + 1);
                return time + 1
            })
        }, 1000)
      
        return () => {
            clearInterval(internval)
            let time = parseInt(localStorage.getItem('currTime'));
            let cnt = localStorage.getItem('timeCnt') != undefined ? parseInt(localStorage.getItem('timeCnt')) : 0;
            localStorage.setItem('timeCnt', (cnt + 1));
            let totalTime = cnt > 0 ? parseInt(localStorage.getItem('avgScreenTime')) * cnt : 0
            totalTime = totalTime + time;
            console.log(totalTime)
            localStorage.setItem('avgScreenTime', JSON.stringify(parseInt(totalTime / (cnt + 1))));
        }
    }, [])
    return (
        <div>{time / 3600 < 10 ? "0" + parseInt(time / 3600) : parseInt(time / 3600)}h {time / 60 < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60)}m {time % 60 < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60)}s  </div>
    )
}

export default ScreenTime