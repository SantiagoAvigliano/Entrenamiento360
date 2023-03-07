import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

const Register = () => {
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      setErrorEmail('Los emails no coinciden!');
      return;
    }

    if (password !== confirmPassword) {
      setErrorPassword('Las contraseñas no coinciden! Intentalo de nuevo');
      return;
    }

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cedula,
        email,
        password
      })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/');
    } else {
      if (data.error.includes('email')) {
        setErrorEmail(data.error);
      } else if (data.error.includes('password')) {
        setErrorPassword(data.error);
      }
    }
  }

  return (
    <div className='h-screen'>

      <Nav />

      <form className='bg-[#0c7034] h-full  flex flex-col justify-start text-white text-xl pt-24 px-4' onSubmit={handleRegister}>

        <p className='text-2xl font-bold pt-12 '>Registrate</p>

        {errorPassword && <p className=' bg-red-600 font-semibold rounded-md mt-4 text-center'>{errorPassword}</p>}
        {errorEmail && <p className='bg-red-600 font-semibold rounded-md mt-4 text-center' >{errorEmail}</p>}

        <label className='font-bold pt-8'>
          C. I. :
          <input
            className='text-black font-normal w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="text"
            value={cedula}
            placeholder='Sin puntos ni guiones'
            onChange={(e) => setCedula(e.target.value)} />
        </label>

        <label className='font-bold pt-4'>
          Email:
          <input
            className='text-black font-normal w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="email"
            value={email}
            placeholder='Ingrese su email'
            onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className='font-bold'>
          Confirmar Email:
          <input
            className='text-black font-normal w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="email"
            value={confirmEmail}
            placeholder='Confirme su email'
            onChange={(e) => setConfirmEmail(e.target.value)} />
        </label>

        <label className='font-bold pt-4'>
          Contraseña:
          <input
            className='text-black font-normal w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="password"
            value={password}
            placeholder='Escriba su contraseña'
            onChange={(e) => setPassword(e.target.value)} />
        </label>

        <label className='font-bold'>
          Confirmar contraseña:
          <input
            className='text-black font-normal w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="password"
            value={confirmPassword}
            placeholder='Confirme su contraseña'
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>

        <div className='flex justify-center pt-6'>
          <button
            className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423] text-lg text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl'
            type="submit">Registrate</button>
        </div>

      </form>
    </div>
  );
}

export default Register;