import {useForm} from 'react-hook-form'

const UploadFile = () => {
    const {register, handleSubmit} = useForm()

    const onChange=(e) =>{
        const file = e.target.file[0]
        const storageRef = app.storage().ref()
        
    }

    return ( 
        <form onSubmit={handleSubmit(onChange)}>
            <input ref={register} onChange={onChange}/>
            <button type='sumbit'>Отправить</button>
        </form>
     );
}
 
export default UploadFile;