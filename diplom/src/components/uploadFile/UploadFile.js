import {useForm} from 'react-hook-form'

const UploadFile = () => {
    const {register, handleSubmit} = useForm()

    const onChange = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('file', file)
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit(onChange)}>
            <input ref={register} onChange={onChange}/>
            <button type='sumbit'>Отправить</button>
        </form>
     );
}
 
export default UploadFile;