import React from 'react';


class Card extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div className="col-lg-4 col-md-6 my-4">
                <div className="card">
                    <img src={this.props.img} className="card-img-top" alt="Image" />
                    <div className="card-body">
                        <h5 className="card-title"><b>{this.props.title}</b></h5>
                        <p className="card-text">{this.props.para}</p>
                        <a href={this.props.link} className="btn btn-outline-dark">Know More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;