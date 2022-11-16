import React, { useEffect, useState } from 'react';
import { romansToNatural } from './rotna';

export const App = () => {
    

    const [roman, setRoman] = useState("");
    const [natural, setNatural] = useState("");

    const handleInputChange = ({target}) => {
        setRoman(target.value.toString().toUpperCase());
    }
    
    useEffect(() => {
      
        const natural = romansToNatural(roman.trim());
        if (natural === -1) {
            setNatural("No es valido");
        } else if ( natural === 0) {
            setNatural("");
        } else {
            setNatural(natural);
        }
      
    }, [roman])
    

    return (
        <div className='min-h-screen flex flex-col justify-around items-center bg-gradient-to-r from-[#1A2044] to-[#340EA2]'>
            <div className='min-h-[500px] flex flex-col justify-center'>
                <div className='mb-[20px]'>
                    <h1 className='text-3xl text-slate-100 font-bold'>Numeros Romanos a Enteros</h1>
                </div>
                <div className='flex flex-col justify-between items-start p-2 m-2'>
                    <div className='flex flex-row items-center'>
                        <label className='text-xl text-slate-100 mr-3'>Numero Romano: </label>
                        <input type="text" className='p-1 m-1 bg-transparent border-b-2 border-b-slate-800 text-xl text-white focus:outline-none' placeholder='CLVII' value={roman} onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex flex-row items-center'>
                        <label className='text-xl text-slate-100 mr-3'>Numero Entero: </label>
                        <input type="text" className='p-1 m-1 bg-transparent border-b-2 border-b-slate-800 text-xl text-white focus:outline-none' value={natural} readOnly/>
                    </div>
                </div>
            </div>
        </div>
    )
}