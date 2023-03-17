import React, { Component } from "react";

class ModalWindow extends Component{
    constructor(props){
        super(props)
        this.state = {
            likes:0
        }
        this.plusLikes = this.plusLikes.bind(this)
        this.minusLikes = this.minusLikes.bind(this)
    }

    plusLikes(){
        this.setState(state => ({
            likes: ++state.likes
        }))
    }

    minusLikes(){
        this.setState(state => ({
            likes: state.likes-1
        }))
    }

    render(){
        const {img, name, nomination, university, teacher,userName} = this.props
        const {likes} = this.state
        return(
            
            <div className="modal fade" id={userName} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <img className='unitImg' src={img}/>
                    <p>{nomination}</p>
                    <p>{university}</p>
                    <p>{teacher}</p>

                </div>
                <div className="modal-footer">

                    <p>{this.state.likes}</p>
                    <button type="button" className="btn btn-primary" onClick={this.plusLikes}>Нравится</button>
                    <button type="button" className="btn btn-secondary" onClick={this.minusLikes}>Не нравится</button>

                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ModalWindow;