import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style-login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
    localStorage.setItem('token', data.token);
    nav.push('/dashboard');
    } else {
    alert('Неверный email или пароль');
    }
    } catch (error) {
    console.error(error);
    alert('Ошибка авторизации');
    }
    };

    return (
        <main>
            <div className='signin'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <form class="form-signin" onSubmit={handleSubmit}>
                                <h3 className='h3 mb-3 font-weight-normal'>Войдите пожалуйста</h3>
                                <label for="inputEmail" class="sr-only">Email</label>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" autofocus=""/>
                                <label for="inputPassword" class="sr-only">Пароль</label>
                                <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required=""/>
                                <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
         
     );
}
 
export default Login;
