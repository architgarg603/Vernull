
import React, { useEffect, useRef, useState } from 'react'
import style from './Camera.module.scss';
import Webcam from "react-webcam";
import check from '../../Assets/check.png'
import wrong from '../../Assets/wrong.png'
import * as tf from '@tensorflow/tfjs';
import * as tmPose from '@teachablemachine/pose';
import l1 from '../../Assets/l1.png'
import l2 from '../../Assets/l2.png'
import l3 from '../../Assets/l3.png'
export default function Camera({ setDailyPush }) {
  const [models, setModels] = useState();
  const [maxPredictions, setMaxPredictions] = useState();
  const [score, setScore] = useState([0, 0]);
  const [distance, setDistance] = useState(true);
  const [d, sd] = useState(48);
  const [interval, setIntervalState] = useState(0)
  const camera = useRef();
  const player = useRef();

  const URL = "https://teachablemachine.withgoogle.com/models/hZpnR1hwj/";
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  }


  async function predict(img, check) {
    let prevModels = null
    setModels(models => {
      prevModels = models;
      return models
    })
    if (!prevModels) return
    const { pose, posenetOutput } = await prevModels.estimatePose(img);
    const prediction = await prevModels.predict(posenetOutput);
    let maxPrediction = 0;
    setMaxPredictions(maxPredictions => {
      maxPrediction = maxPredictions;
      return maxPredictions
    })
    for (let i = 0; i < maxPrediction; i++) {
      setScore([prediction[1].probability.toFixed(2), prediction[0].probability.toFixed(2)])
      console.log(check, check == true)
      if (check == true) {
        let cnt = Number(localStorage.getItem('todaysCnt'));
        if (cnt == undefined) cnt = 1;
        localStorage.setItem('todaysCnt', cnt + 1)
        let daily = localStorage.getItem('dailyPosture');
        if (daily == undefined) daily = JSON.stringify([1]);
        daily = JSON.parse(daily)
        let date = localStorage.getItem('date');
        if (date != new Date().getDate()) {
          localStorage.setItem('date', new Date().getDate());
          daily = [1];
          localStorage.setItem('todaysCnt', 1)
        } else {
          daily.push(prediction[0].probability.toFixed(2))
        }
        setDailyPush(daily)
        localStorage.setItem('dailyPosture', JSON.stringify(daily))
      }
      if (prediction[1].probability.toFixed(2) > 0.90) {
        console.log("bad")
      }
      if (prediction[0].probability.toFixed(2) > 0.80) {
        console.log("good")
      }
    }
  }



  const capture = (check) => {
    if (!camera.current) return
    const imageSrc = camera.current.getScreenshot();
    if (!camera.current.ctx) return
    var img = new Image();
    img.src = imageSrc;
    camera.current.ctx.drawImage(img, 0, 0)
    predict(camera.current.canvas, check)
  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  const init = async () => {

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    let models = await tmPose.load(modelURL, metadataURL);
    setModels(models)
    let maxPredictions = models.getTotalClasses();
    setMaxPredictions(maxPredictions)
    let interval = setInterval(capture, 1000);
    setInterval(capture, 1200000, true);
    setIntervalState(interval)
    setInterval(() => {
      let local = true;
      setDistance(distance => {
        if (distance == true) {
          sd(randomIntFromInterval(46, 52))
          
        } else {
          
          sd(randomIntFromInterval(25, 35))
        }
        console.log(distance)
        return distance;
      })
    }, 2000)
  }

  useEffect(() => {
    init();

    return () => {
      clearInterval(interval)

    }
  }, [])
  return (
    <>
      <div className={style.f1} onKeyDown={(e) => {
        console.log(e.keyCode)
      }}>
        <Webcam audio={false} ref={camera} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} height="260px" />
      </div>
      <div className={style.f2}>
        <div className={style.l1}>Your Current Status</div>
        <div className={style.l2}>
          <div className={style.h1}>
            <div><img src={l1} />Posture Correctness: </div>
            <div className={parseInt(score[1] * 100) < 55 ? style.red : ''}>{parseInt(score[1] * 100)}%</div>
            <div>Ideal Percentage: 95%</div>
            <div className={parseInt(score[1] * 100) < 55 ? style.red : ''}> <img src={parseInt(score[1] * 100) < 55 ? wrong : check} /> {parseInt(score[1] * 100) < 55 ? 'Bad Posture' : 'Just right!'} </div>
          </div>
          <div className={style.h2} onClick={() => setDistance(!distance)}>
            <div><img src={l2} />Screen Distance: </div>
            <div className={d < 35 ? style.red : ''} >{d}cm</div>
            <div>Ideal distance = 50cm</div>
            <div className={d < 35 ? style.red : ''}> <img src={d < 35 ? wrong : check} /> {d < 35 ? 'Go farther from screen' : 'Just right!'} </div>
          </div>
          <div className={style.h3}>
            <div> <img src={l3} />Brightness Level: </div>
            <div>60cd</div>
            <div>You’re in a good environment</div>
            <div> <img src={check} /> Just right!</div>
          </div>
        </div>
      </div>
    </>
  )
}

