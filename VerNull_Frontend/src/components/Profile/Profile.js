import React from 'react'
import style from './Profile.module.scss'
function Profile({setProfile}) {
    return (
        <div className={style.Wrapper}>
            <div className={style.details}>
                <div className={style.head}>Edit Profile</div>
                <div className={style.name}>
                    <div className={style.fname}>
                        First name
                        <input type='text' placeholder='John' />
                    </div>
                    <div className={style.lname}>
                        Last name
                        <input type='text'  placeholder='Doe'/>
                    </div>

                </div>
                <div className={style.email}>
                    Email
                    <input type='email' placeholder='john@gmail.com'/>
                </div>
                <div className={style.dob}>
                    Date of Birth
                    <div>
                        <input type='numer' placeholder='01' />
                        <input type='numer' placeholder='01' />
                        <input type='numer' placeholder='2000'/>
                    </div>
                </div>

                <div className={style.btn}>
                    <div className={style.cancel} onClick={()=>setProfile(false)}>Cancel</div>
                    <div className={style.submit} onClick={()=>setProfile(false)}>Save Changes</div>
                </div>


            </div>
        </div>
    )
}

export default Profile