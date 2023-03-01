import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import Nav from '../components/Nav'

const Register = () => {
    return (
        <div>
            <Nav />
            <div className='flex items-center pt-28 py-2 bg-[#21683c]'>
                <Link to={`/`}>
                    <i className='fa-solid flex text-white hover:text-[#104423] text-[35px] ti ti-arrow-left ml-4 mr-[10px]'></i>
                </Link>
                
            </div>
            <form className='bg-[#21683c] text-white text-xl px-4' action=''>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Nombre completo:</label>
                    <input type='text' placeholder='Nombre y apellido' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Cedula de Identidad:</label>
                    <input type='number' placeholder='Sin puntos ni guiones' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col' >
                    <label htmlFor='' className='font-bold' >Celular:</label>
                    <input type='number' placeholder='09XXXXXXX' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Email:</label>
                    <input type='email' placeholder='p. ej.  360@email.com' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Ocupación:</label>
                    <input type='text'  placeholder='p. ej. Empleado' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Años de actividad fisica:</label>
                    <textarea className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Historial deportivo:</label>
                    <textarea className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Historial de lesiones:</label>
                    <textarea className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Lesiones o molestias actuales:</label>
                    <textarea className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Cobertura medica:</label>
                    <input type='text' placeholder='p. ej. Casmu'className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Servicio de emergencia:</label>
                    <input type='text' placeholder='p. ej. Suat' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Contacto de emergencia:</label>
                    <input type='number' placeholder='p. ej. Número de algún familiar' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Objetivos y motivaciones:</label>
                    <textarea  className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold'>Frecuencia en 360:</label>
                    <input placeholder='p. ej. Tres veces a la semana' type='text' className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='' className='font-bold' >Comentarios:</label>
                    <textarea  className='text-black w-full h-[7rem] md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-md py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex justify-center items-center py-4'>
                    <button  className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423] text-slate  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Register