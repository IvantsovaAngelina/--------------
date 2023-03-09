import './style-gallary.css'
import { gallery } from '../../helpers/picsList';

const Gallary = () => {
    return ( 
        <main>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='titleGallary'>Галерея предыдущих результатов конкурса</h1>
                </div>
            </div>
            <div className='row' > 
                <div className='col-md-12'>
                    <div className="gall">
                    {
                    gallery.map((item)=>{
                        return(
                            <div className="pics">
                                <a rel="gallery" className="photo" href={item.src} data-fancybox="gallery"
                                data-caption={item.caption+'<br/>'+item.teacher +'<br/>'+item.university+'<br/>' +item.nomination }><img src={item.src} className="picImg" alt="" /></a>
                            </div>   
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        </main>
        
     );
}
 
export default Gallary;