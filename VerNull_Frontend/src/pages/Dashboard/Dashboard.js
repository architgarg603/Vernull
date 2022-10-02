import React, { useState } from 'react'
import style from './Dashboard.module.scss'
import sad from '../../Assets/sad.png'
import arrow from '../../Assets/arrow.png'
import ToggleSwitch from '../../components/toggleBtn/Toggle'
import Camera from '../../components/Camera/Camera'
import ScreenTime from '../../components/ScreenTime'
// import Chart from '../../components/Chart/Chart'
import graph from '../../Assets/graph.png'
import happy from '../../Assets/happy.png'

function Dashboard() {
  const [mood, setMood] = useState(true);
  let time = localStorage.getItem('avgScreenTime');
  let posture = JSON.parse(localStorage.getItem('dailyPosture') != undefined ? localStorage.getItem('dailyPosture') : JSON.stringify([]))
  if (posture == undefined) posture = [1];
  const [dailyPush, setDailyPush] = useState([])
  let aggPosture = 0;
  posture.forEach(x => aggPosture =aggPosture+ Number(x))
  console.log(aggPosture)
  posture = aggPosture / posture.length
  posture = parseInt(posture*100)
  return (
    <div className={style.wrapper}>
      {/* f1 */}
      <div className={style.f1}>
        <Camera setDailyPush={setDailyPush} />
      </div>
      {/* f2 */}
      <div className={style.f2}>
        <div className={style.left} style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
          <img src={graph} style={{width:'80%'}} />
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <div className={style.t1}>
              <div>Current screen Time :</div>
              <ScreenTime />
            </div>
            <div className={style.t2}>
              <div>Average screen time : </div>
              {time != undefined ?
                <div>{time / 3600 < 10 ? "0" + parseInt(time / 3600) : parseInt(time / 3600)}h {time / 60 < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60)}m {time % 60 < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60)}s  </div>
                : <div> 00h 00m 00s</div>
              }
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.left}>
              <div>Avg Posture %</div>
              <div>{posture}%</div>
            </div>
            <div className={style.right}>
              <div>You snoozed 20-20 mode</div>
              <div>25 times</div>
            </div>

          </div>

        </div>

      </div>
      {/* f3 */}
      <div className={style.f3}>
        <div className={style.left}>
          <div className={style.l1}>
            <div>Presentation Mode </div>
            <div>Turn off camera access for monitoring posture while doing online presentations</div>
          </div>
          <div className={style.l2}>
            <ToggleSwitch label="1" />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.l1}>
            <div>20-20 Rule Mode</div>
            <div>After every 20 minutes, guess and sing along prompt will automatically pop up on your screen to give you a 20 sec break.</div></div>
          <div className={style.l2}>
            <ToggleSwitch label="2" />
          </div>
        </div>

      </div>
      {/* f4 */}
      <div className={style.f4}>
        <div className={style.left} onClick={()=>setMood(!mood)}>
          <div>Stress level : </div>{
            mood?
            <div style={{color:'#95FFA6'}}>Happy <img src={happy} /> </div>
            :
          <div>Stressed <img src={sad} /> </div>
          }
        </div>
        <div className={style.right}>
          <div className={style.l1}>
            <div>Feeling exhausted? </div>
            <div>Talking to someone might help you to feel better.</div>
          </div>
          <div className={style.l2}>
            <div>Join our Discord to talk to someone</div>
            <div>Find quick resources to refresh <img src={arrow} /></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard