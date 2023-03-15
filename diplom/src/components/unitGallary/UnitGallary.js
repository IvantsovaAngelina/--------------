import './style-unit.css'
import React, { Component, useState } from "react";


class UnitGallary extends Component{
    constructor(props){
        super(props)
        this.state = {
            likes:0
        }
        this.plusLikes = this.plusLikes.bind(this)
    }

    plusLikes(){
        this.setState(state => ({
            likes: ++state.likes
        }))
    }
  
    render(){
        const {img, name, nomination, university, teacher} = this.props
        const {likes} = this.state
        return(
            <>
                <div className="col-md-4 mx-aut unitPic" data-toggle="modal" data-target="#exampleModal">
                    <img className='unitImg' src={img}/>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{name}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        <div class="modal-body">
                            <img className='unitImg' src={img}/>
                            <p>{nomination}</p>
                            <p>{university}</p>
                            <p>{teacher}</p>

                        </div>
                        <div class="modal-footer">

                            <p>{this.state.likes}</p>
                            <button type="button" class="btn btn-primary" onClick={this.plusLikes}>Нравится</button>
                            <button type="button" class="btn btn-secondary">Не нравится</button>

                        </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
            

};

    
                       
 
 
export default UnitGallary;