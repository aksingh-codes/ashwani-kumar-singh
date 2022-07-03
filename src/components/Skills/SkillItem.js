import React from 'react'

const SkillItem = ({ skill }) => {
    const Icon = skill.icon;

    return (
        <div className="skill-item">
            <Icon className="skill-icon" />
            <br />
            <span style={{ fontSize: '0.7rem' }}>{skill.name}</span>
        </div>
    )
}

export default SkillItem