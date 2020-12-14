import React from 'react';
import data from './data/projects3data';
import ProjectRow from './ProjectRow';

function Project3Rows () {
    let rows=data.map((row, index) => {
        return (
            <div className='project-row'>
                <ProjectRow 
                    key={index}
                    index={index}
                    image={row.image}
                    project_text={row.project_text}
                />
            </div>
        )
    })

    return (
        <>
            {rows}
        </>
    )
}

export default Project3Rows
