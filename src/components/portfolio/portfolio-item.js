import React, {Component} from 'react';


export default class PortfolioItem extends Component {
     //Data that we'll need:
    //-backgroundimage: thumb_image_url
    //-logo
    //-description: description
    //-id: id
    constructor (props) {
        super(props);

        this.state= {
            portfolioItemClass: ""
        };
    }

    handleMouseEnter(){
        this.setState({portfolioItemClass: 'image-blur'})
    }

    handleMouseLeave(){
        this.setState({portfolioItemClass: ''})
    }

    render () {
    const { thumb_image_url, id, description, logo_url } = this.props.item;

    return (
        <div className="portfolio-item-wrapper"
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
        >
            <div 
                className={"portfolio-img-background " + this.state.portfolioItemClass}
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
}

