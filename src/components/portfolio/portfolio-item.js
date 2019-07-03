import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
     //Data that we'll need:
    //-backgroundimage: thumb_image_url
    //-logo
    //-description: description
    //-id: id

    const { thumb_image_url, id, description, logo } = props.item;

    return (
        <div>
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}><h3>{props.title}</h3></Link>


        </div>
    )
}

