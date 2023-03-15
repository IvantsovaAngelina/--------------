import UnitGallary from '../../components/unitGallary/UnitGallary';
import {unit} from '../../helpers/unitGallaryList'
import './style-gallaryActive.css'

const GallaryActive = () => {
    return ( 
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <h1>Галерея работ</h1>
                    </div>
                </div>
                <div className='row'>
                    {
                        unit.map(
                            (item) => {
                                return(
                                    <UnitGallary img ={item.img} name = {item.name} nomination={item.nomination} university = {item.university} teacher={item.teacher}/>
                                )
                            }
                        )

                    }
                </div>
            </div>
         </>
     );
}
 
export default GallaryActive;