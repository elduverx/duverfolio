import React from 'react';
import { WorkData } from '../../data/work';
import './work-card.css';

function WorkCard({item}) {
    const data = WorkData;
    return (
        <div className="work-card">
            <img src={item.companyLogo} className="work-logo" alt="company"/>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <div>
                    <label className="work-dates">
                        {item.dateJoining}
                    </label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-dec"> 
                <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
