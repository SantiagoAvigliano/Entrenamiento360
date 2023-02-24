import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';
import Nav from '../components/Nav'

const Register = () => {
    return (
        <div>
            <Nav />
            <div className='flex items-center pt-28 py-2 bg-[#3b9c5f]'>
                <Link to={`/`}>
                    <i className="fa-solid flex text-white hover:text-[#104423] text-[35px] ti ti-arrow-left ml-4 mr-[10px]"></i>
                </Link>
                
            </div>
            <form className='bg-[#3b9c5f] text-white text-xl px-4 ' action="">
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Nombre completo</label>
                    <input type="text" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Cedula de Identidad</label>
                    <input type="number" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Celular</label>
                    <input type="number" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Email</label>
                    <input type="email" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Ocupación</label>
                    <input type="text" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Años de actividad fisica</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Historial deportivo</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Historial de lesiones</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Lesiones o molestias actuales</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Cobertura medica</label>
                    <input type="text" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Servicio de emergencia</label>
                    <input type="text" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Contacto de emergencia</label>
                    <input type="number" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Objetivos y motivaciones</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Frecuencia en 360</label>
                    <input type="text" className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Comentarios</label>
                    <textarea className='text-black w-full md:w-[500px] pl-[20px] bg-[#f7f7f9] mt-[10px] mb-[10px] rounded-xl py-[5px] shadow-md hover:shadow-xl' />
                </div>
                <div className="flex justify-center items-center py-4">
                    <button className='bg-[#23663c] hover:text-[#009e3a] hover:bg-[#104423] text-slate border-[#104423] border-2 rounded-2xl px-5 py-[5px] shadow-xl hover:shadow-2xl'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Register