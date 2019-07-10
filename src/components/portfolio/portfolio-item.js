import React from 'react';


export default function (props) {
     //Data that we'll need:
    //-backgroundimage: thumb_image_url
    //-logo
    //-description: description
    //-id: id

    const { thumb_image_url, id, description, logo_url } = props.item;

    return (
        <div className="portfolio-item-wrapper">
            <div 
                className="portfolio-img-background"
                style={{
                    backgroundImage: "url(" + thumb_image_url + ")"
                }}    
            />
           
            <div className="img-text-wrapper">
               <div className="logo-wrapper">
                    <img src={logo_url} />
                </div> 
                <div className="subtitle">{description}</div>

            </div>

        </div>
    );
}

