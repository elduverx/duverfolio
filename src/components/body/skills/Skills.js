import React from 'react';
import Separator from "../../common/separate/Separator"
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import './skills.css';
function Skills() {
    const data= SkillsData
    return (
        <div className="skills" >
        <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return (
                        <div className="skills-section" key={item._id}>
                            <label className="skills-section-title">{item.title}</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                         <SkillCard key={skill.name} skill={skill} />
                                    )
                                    
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
