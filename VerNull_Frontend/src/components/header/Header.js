import React, { useState } from 'react'
import style from './Header.module.scss'
import coins from '../../Assets/coins.png'
import user from '../../Assets/user.png'
import { Link, useLocation } from 'react-router-dom'
import wallet from '../../Assets/wallet.png'
import watch from '../../Assets/watch.png'
import edit from '../../Assets/edit.png'
import user1 from '../../Assets/user1.png'
import back from '../../Assets/back.png'
import Profile from '../Profile/Profile'
import Contacts from '../Contacts/Contacts'
function Header() {
    let path = useLocation().pathname;
    const [coinPopup, setCoinPopup] = useState(false)
    const [userPopup, setUserPopup] = useState(false)
    const [profile, setProfile] = useState(false);
    const [contact, setContact] = useState(false);
    return (
        <div className={style.wrapper}>
            <div className={style.top}>
                <div className={style.left}>Hi Robin</div>
                <div className={style.right}>
                    <div onClick={() => { setCoinPopup(!coinPopup) }} > 2000 <img src={coins} />
                        {coinPopup ?

                            <div className={style.coinWrapper}>
                                <div className={style.c1}>
                                    <div className={style.cl1}>
                                        <img src={wallet} /> Your Wallet
                                    </div>
                                    <div className={style.cl2} >2000 VN</div>
                                </div>
                                <div className={style.c2}>
                                    <div className={style.cl1}>VerNull Streak: </div>
                                    <div className={style.cl2}>🔥 8 Days (2x)</div>

                                </div>
                                <div className={[style.c3, 'scrollBar'].join(' ')}>
                                    <div className={style.cl1}>
                                        <div>Upto 10% Off on fitbit devices</div>
                                        <img src={watch} />
                                    </div>
                                    <div className={style.cl2}>
                                        <div>Upto 10% Off on fitbit devices</div>
                                        <img src={watch} />
                                    </div>

                                </div>
                            </div>
                            : null}
                    </div>
                    <div style={{ position: 'relative' }} onClick={() => setUserPopup(!userPopup)}><img src={user} />
                        {
                            userPopup ?

                                <div className={style.userPopup}>
                                    <div className={style.l1} onClick={() => setProfile(true)}>
                                        <div>Username</div>
                                        <img src={edit} />
                                    </div>
                                    <div className={style.l2} onClick={() => setContact(true)}>
                                        <img src={user1} />Enter Relief Contacts
                                    </div>
                                    <div className={style.l3}>
                                        <img src={back} /> Logout
                                    </div>
                                </div>
                                : null
                        }
                    </div>
                </div>

                {profile ? <Profile setProfile={setProfile} /> : null}
                {contact ? <Contacts setContact={setContact}/> : null}
            </div>
            <div className={style.bottom}>
                <Link to='/'>
                    <div className={path === '/' ? style.selected : ''}>Dashboard</div>

                </Link>
                <Link to='/resources'>
                    <div className={path !== '/' ? style.selected : ''}>Resources</div>
                </Link>
            </div>
        </div>
    )
}

export default Header