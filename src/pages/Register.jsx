import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';

const Register = () => {
  const [cedula, setCedula] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
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
      // Si el registro es exitoso, puedes redirigir al usuario a la página de inicio de sesión
      // Aquí utilizo un alert para mostrar un mensaje, pero puedes utilizar una notificación o cualquier otro componente para informar al usuario
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/');
    } else {
      setError(data.error);
    }
  }

  return (
    <div>
      <Nav />
      
      <form className='bg-[#0c7034] h-screen flex flex-col justify-start text-white text-xl pt-40 px-4' onSubmit={handleRegister}>
        {error && <p>{error}</p>}
        <label className='font-bold'>
          Cedula:
          <input
            className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)} />
        </label>
        <label className='font-bold'>
          Correo electrónico:
          <input
            className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className='font-bold'>
          Contraseña:
          <input
            className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className='font-bold'>
          Confirmar contraseña:
          <input
            className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-xl hover:shadow-2xl'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <div className='flex justify-center pt-8'>
          <button
            className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423] text-lg text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl'
            type="submit">Registrate</button>
        </div>
      </form>
    </div>
  );
}

export default Register;

