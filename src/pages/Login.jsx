import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Nav from '../components/Nav';

function Login() {
    const [cedula, setCedula] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cedula,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            navigate('/');
        } else {
            setError(data.error);
        }
    }

    return (
        <div>
            <Nav />
            <div className='bg-[#0c7034] h-screen flex flex-col justify-start text-white text-xl pt-40 px-4'>
                <div className='pb-12'>
                    <p className='text-2xl font-bold'>Bienvenido</p>
                    <p className='pt-2'>Iniciá sesión para continuar</p>
                </div>
                <form
                    className='flex flex-col'
                    onSubmit={handleLogin}>
                    {error && <p>{error}</p>}
                    <label htmlFor='' className='font-bold '>
                        C. I. :
                    </label>
                    <input
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl' 
                        type="text" 
                        value={cedula} 
                        placeholder='Sin puntos ni guiones'
                        onChange={(e) => setCedula(e.target.value)} />
                    <label className='font-bold '>
                        Contraseña:
                    </label>
                    <input 
                    className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl' 
                    htmlFor='' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className='flex justify-end pr-2'>
                        <p className='text-sm font-bold hover:underline decoration-1'>Olvidé mi contraseña</p>
                    </div>

                    <div className='flex justify-center pt-8'>
                        <button className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423] text-lg text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl' 
                        type="submit">
                            Ingresar</button>
                    </div>
                </form>
                <div className='pt-14 text-center'>
                    <p>Si no tenés usuario, <Link to={'/register'}>
                        <button className='font-bold hover:underline decoration-1'>registrate acá</button>
                    </Link>.</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;
