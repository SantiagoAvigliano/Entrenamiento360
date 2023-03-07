import {useState} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import Nav from '../components/Nav'

const DataForm = () => {
const [nombre, setNombre] = useState('')
const [email, setEmail] = useState('')
const [celular, setCelular] = useState('')
const [ocupacion, setOcupacion] = useState('')
const [anios_actividad, setAnios_actividad] = useState('')
const [historial_deportivo, setHistorial_deportivo] = useState('')
const [historial_lesiones, setHistorial_lesiones] = useState('')
const [lesiones_actuales, setLesiones_actuales] = useState('')
const [cobertura_medica, setCobertura_medica] = useState('')
const [servicio_emergencia, setServicio_emergencia] = useState('')
const [contacto_emergencia, setContacto_emergencia] = useState('')
const [objetivos, setObjetivos] = useState('')
const [frecuencia_360, setFrecuencia_360] = useState('')
const [comentarios, setComentarios] = useState('')


    const form = async () => {
        try {
          const res = await fetch("http://localhost:4000/user/{id}", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
               
                nombre: nombre,
                email: email,
                celular: celular,
                ocupacion: ocupacion,
                anios_actividad: anios_actividad,
                historial_deportivo: historial_deportivo,
                historial_lesiones: historial_lesiones,
                lesiones_actuales: lesiones_actuales,
                cobertura_medica: cobertura_medica,
                servicio_emergencia: servicio_emergencia,
                contacto_emergencia: contacto_emergencia,
                objetivos: objetivos,
                frecuencia_360: frecuencia_360,
                comentarios: comentarios
            
            })
          });
          if (!res.ok) {
            throw new Error("invalid data ");
          }
          
        } catch (error) {
          console.log("Error");
          alert("Todos los datos son obligatorios");
        }
        }
    
    
    
      const onClick = (e) => {
        form();
      };
      const onChangeName = (e) => {
        setNombre(e.target.value);
      };
      const onChangeEmail = (e) => {
        setEmail(e.target.value);
      };
      const onChangeCelular = (e) => {
        setCelular(e.target.value);
      };
      const onChangeOcupacion = (e) => {
        setOcupacion(e.target.value);
      };
      const onChangeAnios_actividad = (e) => {
        setAnios_actividad(e.target.value);
      };
      const onChangeHistorial_deportivo = (e) => {
        setHistorial_deportivo(e.target.value);
      };
      const onChangeHistorial_lesiones = (e) => {
        setHistorial_lesiones(e.target.value);
      };
      const onChangeLesiones_actuales = (e) => {
        setLesiones_actuales(e.target.value);
      };
      const onChangeCobertura_medica = (e) => {
        setCobertura_medica(e.target.value);
      };
      const onChangeServicio_emergencia = (e) => {
        setServicio_emergencia(e.target.value);
      };
      const onChangeContacto_emergencia = (e) => {
        setContacto_emergencia(e.target.value);
      };
      const onChangeObjetivos = (e) => {
        setObjetivos(e.target.value);
      };
      const onChangeFrecuencia_360 = (e) => {
        setFrecuencia_360(e.target.value);
      };
      const onChangeComentarios = (e) => {
        setComentarios(e.target.value);
      };

    return (
        <div>
            <Nav />
            <div className='flex items-center pt-28 py-2 bg-[#0c7034]'>
                <Link to={`/`}>
                    <i className='fa-solid flex text-white hover:text-[#104423] text-[35px] ti ti-arrow-left ml-4 mr-[10px]'></i>
                </Link>
                
            </div>
            <form onSubmit={form} className='bg-[#0c7034] text-white text-xl px-4' action=''>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Nombre completo:</label>
                    <input 
                        name='nombre'
                        id='nombre'
                        value={nombre}
                        onChange={onChangeName}
                        type='text' 
                        placeholder='Nombre y apellido' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col' >
                    <label htmlFor='' className='font-bold' >Celular:</label>
                    <input
                        name='celular'
                        id='celular'
                        value={celular}
                        onChange={onChangeCelular} 
                        type='number' 
                        placeholder='09XXXXXXX' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Email:</label>
                    <input 
                        name='email'
                        id='email'
                        value={email}
                        onChange={onChangeEmail}
                        type='email' 
                        placeholder='p. ej.  360@email.com' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Ocupación:</label>
                    <input 
                        name='ocupacion'
                        id='ocupacion'
                        value={ocupacion}
                        onChange={onChangeOcupacion}
                        type='text'  
                        placeholder='p. ej. Empleado' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Años de actividad fisica:</label>
                    <textarea 
                        name='anios_actividad'
                        id='anios_actividad'
                        value={anios_actividad}
                        onChange={onChangeAnios_actividad}
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Historial deportivo:</label>
                    <textarea
                        name='historial_deportivo'
                        id='historial_deportivo'
                        value={historial_deportivo}
                        onChange={onChangeHistorial_deportivo} 
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Historial de lesiones:</label>
                    <textarea 
                        name='historial_lesiones'
                        id='historial_lesiones'
                        value={historial_lesiones}
                        onChange={onChangeHistorial_lesiones}
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Lesiones o molestias actuales:</label>
                    <textarea
                        name='lesiones_actuales'
                        id='lesiones_actuales'
                        value={lesiones_actuales}
                        onChange={onChangeLesiones_actuales} 
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Cobertura medica:</label>
                    <input
                        name='cobertura_medica'
                        id='cobertura_medica'
                        value={cobertura_medica}
                        onChange={onChangeCobertura_medica} 
                        type='text' 
                        placeholder='p. ej. Casmu'
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Servicio de emergencia:</label>
                    <input
                        name='servicio_emergencia'
                        id='servicio_emergencia'
                        value={servicio_emergencia}
                        onChange={onChangeServicio_emergencia} 
                        type='text' 
                        placeholder='p. ej. Suat' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Contacto de emergencia:</label>
                    <input 
                        name='contacto_emergencia'
                        id='contacto_emergencia'
                        value={contacto_emergencia}
                        onChange={onChangeContacto_emergencia}
                        type='number'  
                        placeholder='p. ej. Número de algún familiar' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Objetivos y motivaciones:</label>
                    <textarea
                        name='objetivos'
                        id='objetivos'
                        value={objetivos}
                        onChange={onChangeObjetivos}  
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Frecuencia en 360:</label>
                    <input
                        name='frecuencia_360'
                        id='frecuencia_360'
                        value={frecuencia_360}
                        onChange={onChangeFrecuencia_360}
                        placeholder='p. ej. Tres veces a la semana' 
                        type='text' 
                        className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Comentarios:</label>
                    <textarea
                        name='comentarios'
                        id='comentarios'
                        value={comentarios}
                        onChange={onChangeComentarios}
                        className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex justify-center items-center py-4'>
                    <button 
                        onClick={onClick}  
                        className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423] text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default DataForm