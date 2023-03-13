import './style-unit.css'
import {unit} from '../../helpers/unitGallaryList'
import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import {Component} from 'react';

class UnitGallary extends Component{
    
    state = {
        like: 0
      };
    
      handleLike = () => {
        this.setState({
          like: this.state.like + 1
        });
      };
      handleUnLike = () => {
        this.setState({
          like: this.state.like - 1
        });
      };

    render(){
        const {like} = this.state;
        return ( 
        <>
        {
            unit.map((item)=>{
                
=======
=======
import {Component} from 'react';
>>>>>>> 5ac5fcf (	modified:   diplom/src/App.js)

class UnitGallary extends Component{
    
    state = {
        like: 0
      };
    
      handleLike = () => {
        this.setState({
          like: this.state.like + 1
        });
      };
      handleUnLike = () => {
        this.setState({
          like: this.state.like - 1
        });
      };

    render(){
        const {like} = this.state;
        return ( 
        <>
        {
            unit.map((item)=>{
<<<<<<< HEAD
>>>>>>> 9ef7edf (	new file:   diplom/src/components/unitGallary/UnitGallary.js)
=======
                
>>>>>>> 5ac5fcf (	modified:   diplom/src/App.js)
                return(
                    <>
                        <div className="col-md-4 mx-aut unitPic" data-toggle="modal" data-target="#exampleModal">
                            <img className='unitImg' src={item.img}/>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{item.caption}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                <div class="modal-body">
                                    <img className='unitImg' src={item.img}/>
                                    <p>{item.nomination}</p>
                                    <p>{item.university}</p>
                                    <p>{item.teacher}</p>

                                </div>
                                <div class="modal-footer">
<<<<<<< HEAD
<<<<<<< HEAD
                                    <p>{like}</p>
                                    <button type="button" class="btn btn-primary" onClick={() => {this.handleLike()}}>Нравится</button>
                                    <button type="button" class="btn btn-secondary" onClick={() => {this.handleUnLike()}}>Не нравится</button>
=======
                                    <p>{counter}</p>
                                    <button type="button" class="btn btn-primary" onClick={handleClick1}>Нравится</button>
                                    <button type="button" class="btn btn-secondary" onClick={handleClick2}>Не нравится</button>
>>>>>>> 9ef7edf (	new file:   diplom/src/components/unitGallary/UnitGallary.js)
=======
                                    <p>{like}</p>
                                    <button type="button" class="btn btn-primary" onClick={() => {this.handleLike()}}>Нравится</button>
                                    <button type="button" class="btn btn-secondary" onClick={() => {this.handleUnLike()}}>Не нравится</button>
>>>>>>> 5ac5fcf (	modified:   diplom/src/App.js)
                                </div>
                                </div>
                            </div>
                        </div>
                    </>
<<<<<<< HEAD
<<<<<<< HEAD
                )
            })}
        </>
        );

    }
    
=======
                       
                )
            })}
       </>
     );
>>>>>>> 9ef7edf (	new file:   diplom/src/components/unitGallary/UnitGallary.js)
=======
                )
            })}
        </>
        );

    }
    
>>>>>>> 5ac5fcf (	modified:   diplom/src/App.js)
}
 
export default UnitGallary;