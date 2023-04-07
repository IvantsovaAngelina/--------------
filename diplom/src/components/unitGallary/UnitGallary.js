import './style-unit.css'
import {unit} from '../../helpers/unitGallaryList'
import React from "react";
import ModalWindow from '../modal/ModalWindow';

const UnitGallary = () => {
    return ( 
        unit.map(
            (item) => {
                return(
                    <>
                    <div className="unitPic" data-toggle="modal" data-target={'#'+item.userName}>
                        <img className='unitImg' src={item.img}/>
                    </div>
                    <ModalWindow img ={item.img} name = {item.name} nomination={item.nomination} university = {item.university} teacher={item.teacher} userName={item.userName}/>
                    </>
                    
                )
            }
        )
     );
}

export default UnitGallary;