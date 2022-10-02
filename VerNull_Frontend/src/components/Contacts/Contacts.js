import React, { useState } from 'react'
import style from './Contacts.module.scss'
function Contacts({ setContact }) {
    const [contacts, setContacts] = useState([])
    return (
        <div className={[style.Wrapper, 'scrollBar'].join(' ')}>
            <div className={[style.details, 'scrollBar'].join(' ')}>
                <div className={style.head}>Edit Profile</div>

                {contacts.map((contact, idx) => {
                    return (

                        <div className={style.cell} key={idx}>
                            <div className={style.remove} onClick={() => {
                                console.log(contacts.splice(idx, 1), idx)
                                setContacts([...contacts])
                            }}>Remove</div>
                            <div className={style.name}>
                                <div className={style.fname}>
                                    First name
                                    <input type='text' placeholder='John' value={contacts[idx][0]} onChange={(e) => {
                                        contacts[idx][0] = e.target.value;
                                        setContacts([...contacts])
                                    }} />
                                </div>
                                <div className={style.lname}>
                                    Last name
                                    <input type='text' placeholder='Doe' value={contacts[idx][1]}  onChange={(e) => {
                                        contacts[idx][1] = e.target.value;
                                        setContacts([...contacts])
                                    }} />
                                </div>

                            </div>

                            <div className={style.name}>
                                <div className={style.email}>
                                    Email
                                    <input type='text' placeholder='John@gmail.com' value={contacts[idx][2]}  onChange={(e) => {
                                        contacts[idx][2] = e.target.value;
                                        setContacts([...contacts])
                                    }} />
                                </div>
                                <div className={style.lname}>
                                    Contact Number
                                    <input type='text' placeholder='111111111' value={contacts[idx][3]}  onChange={(e) => {
                                        contacts[idx][3] = e.target.value;
                                        setContacts([...contacts])
                                    }} />
                                </div>

                            </div>
                        </div>

                    )
                })}
                <div className={style.add} onClick={() => { setContacts([...contacts, []]) }}>Add new contact</div>

                <div className={style.btn}>
                    <div className={style.cancel} onClick={() => setContact(false)}>Cancel</div>
                    <div className={style.submit} onClick={() => setContact(false)}>Save Changes</div>
                </div>


            </div>
        </div>
    )
}

export default Contacts