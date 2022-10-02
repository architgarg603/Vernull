import React from 'react'
import style from './Resources.module.scss'
import b1 from '../../Assets/b1.png'
import b2 from '../../Assets/b2.png'
import b3 from '../../Assets/b3.png'
import b4 from '../../Assets/b4.png'
import b5 from '../../Assets/b5.png'
import b6 from '../../Assets/b6.png'
import b7 from '../../Assets/b7.png'
import arrow from '../../Assets/arrow.png'
function Resources() {
  return (
    <div className={style.wrapper}>
      <div className={style.head}>Resources curated for you</div>
      <div className={[style.container, 'scrollBar'].join(' ')}>
        <div className={style.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2oudg45H5VA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>10 Min Upper Body Workout</div>
        </div>
        <div className={style.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5YokfY_rnWE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>Postural Exercises to Improve Posture</div>
        </div>
        <div className={style.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CqTtScFQ5-c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>Improve Your Posture</div>
        </div>
        <div className={style.video}>
          <iframe width="345" height="200" src="https://www.youtube.com/embed/5R54QoUbbow?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>How To Correct Your Posture</div>
        </div>
        <div className={style.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8tev7YTVa3U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div>7 MIN DAILY STRETCH to Fix Your Posture!</div>
        </div>
      </div>
      <div className={style.head} style={{ marginTop: '60px' }}>Resources curated for you</div>
      <div className={[style.container, 'scrollBar'].join(' ')}>
        <a href='https://medlineplus.gov/guidetogoodposture.html' target='_blank'>
          <div className={style.video}>
            <img src={b1} />
            <div>Guide to Good Posture</div>
            <div style={{ fontWeight: 'bold' }}> Read More <img src={arrow} /></div>
          </div>
        </a>
        <a href='https://www.health.harvard.edu/staying-healthy/why-good-posture-matters' target='_blank'>
          <div className={style.video}>
            <img src={b2} />
            <div>Why good posture matters</div>
            <div style={{ fontWeight: 'bold' }}> Read More <img src={arrow} /></div>
          </div>
        </a>
        <a href='https://www.webmd.com/osteoporosis/ss/slideshow-posture-tips' target='_blank'>
          <div className={style.video}>
            <img src={b4} />
            <div>9 Tips for Better Posture</div>
            <div style={{ fontWeight: 'bold' }}> Read More <img src={arrow} /></div>
          </div>
        </a>
        <a href='https://medlineplus.gov/guidetogoodposture.html' target='_blank'>
          <div className={style.video}>
            <img src={b3} />
            <div>Good Posture Benefits</div>
            <div style={{ fontWeight: 'bold' }}> Read More <img src={arrow} /></div>
          </div>
        </a>
        <a href='https://www.health.harvard.edu/staying-healthy/why-good-posture-matters' target='_blank'>
          <div className={style.video}>
            <img src={b5} />
            <div> Upper Body Workout</div>
            <div style={{ fontWeight: 'bold' }}> Read More <img src={arrow} /></div>
          </div>
        </a>
      </div>
      <div className={style.head} style={{ marginTop: '60px' }}>Premium FItness Programs</div>
      <div className={[style.container, 'scrollBar'].join(' ')}>
          <div className={style.video} style={{width:'450px'}}>
            <img src={b6} style={{width:'450px', cursor:"not-allowed"}} />
            <div>21 days Yoga Plan</div>
            <div style={{ fontWeight: 'bold' }}> 30000 coins</div>
          </div>
          <div className={style.video} style={{width:'450px', cursor:"not-allowed"}}>
            <img src={b7} style={{width:'450px'}}/>
            <div>Posture Correction Program</div>
            <div style={{ fontWeight: 'bold' }}>20000 coins</div>
          </div>
      </div>
    </div>
  )
}

export default Resources