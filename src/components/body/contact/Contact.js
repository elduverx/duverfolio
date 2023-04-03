import React from 'react'
import Separator from '../../common/separate/Separator'
import './contact.css'
import SocialContact from '../../common/social-contact/index'
function Contact() {
    return (
        <div className="contact">
            <Separator/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform</p>
                    <SocialContact />
                </div>
               
            </div>
        </div>
    )
}

export default Contact
