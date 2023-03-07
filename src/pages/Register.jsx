import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleRegister}>
      {error && <p>{error}</p>}
      <label>
        Cedula:
        <input type="text" value={cedula} onChange={(e) => setCedula(e.target.value)} />
      </label>
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirmar contraseña:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Register;

