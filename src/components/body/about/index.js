import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css';
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, I am <br/><span className="info-name"> Duver Muriel Dev</span> ,<br/> I'm a Colombian Developer with 1 year of experience in frontend develop, I consider myself an awesome person with a lot of soft and strong skills, I still living in Colombia and i'm 23 years old. I enjoy make friends and code. With me all is laugh and work. and yep, this is me, i hope you enjoy watching my portfolio! :D
                </div>
                <div className="about-photo">
                <img src={require('../../../assets/folioo.png').default} className="picture"  alt="yo"/>
                </div>
            </div>
            <div className="about-bottom">
           
            </div>
            <SocialContact/>
        </div>
    )
}

export default About
