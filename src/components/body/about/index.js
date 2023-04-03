import React from 'react'
import SocialContact from '../../common/social-contact';
import './about.css';
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, I am <br/><span className="info-name"> Duverney Muriel Dev</span> ,<br/> I'm a Colombian Developer with 1 year of experience in iOS Development with Swift and UIKit, I consider myself an awesome person with a lot of soft skills, i like ear new ideas and be friendly. all my knowlegde comes from tutorials, bootcamps, reading documentations. on the bottom i left you something about my projects that you can check following the link!         </div>
                <div className="about-photo">
                <img src={require('../../../assets/folioo.gif').default} className="picture"  alt="yo"/>
                </div>
            </div>
            <div className="about-bottom">
           
            </div>
            <SocialContact/>
        </div>
    )
}

export default About
