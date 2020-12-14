import React from 'react';


function ProjectRow (props) {

    let project_image_location = props.index % 2 === 0 ? 'project-image-left' : 'project-image-right';
    let project_text_location = props.index % 2 === 0 ? 'text-wrapper-right' : 'text-wrapper-left';
    
    return (
        <div>
        <img className={project_image_location} src={props.image} alt='none'></img>
        <div className={project_text_location}>
            <p>{props.project_text}
            </p>
        </div>
        </div>
    )
}

export default ProjectRow
