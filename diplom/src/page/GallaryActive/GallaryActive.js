import UnitGallary from '../../components/unitGallary/UnitGallary';
import './style-gallaryActive.css'

const GallaryActive = () => {
    return ( 
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>
                        <h1>Галлерея работ</h1>
                    </div>
                </div>
                <div className='row'>
                    <UnitGallary/>
                </div>
            </div>
         </>
     );
}
 
export default GallaryActive;